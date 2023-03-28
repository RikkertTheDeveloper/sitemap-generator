// # Define Application Constants:
const file_system = require("fs");
const sitemap_indexes = JSON.parse(file_system.readFileSync("data/sitemaps/sitemap-indexes.json").toString("utf-8"))
const sitemap_index_format = file_system.readFileSync("data/formats/sitemap-index-format.xml").toString("utf-8")
const website_base_url = sitemap_indexes.settings.domain

// # Read through all indexes:
let appended_sitemap_indexes = "";

file_system.rmSync("processed", {maxRetries: 2, recursive: true})
file_system.mkdirSync("processed", {recursive: true})
file_system.mkdirSync("processed/sitemaps", {recursive: true})

sitemap_indexes.sitemaps.forEach(element => {
    let appended_url_indexes = "";
    const sitemap_type = element.type;

    const sitemap_format = file_system.readFileSync(`data/formats/sitemap-${sitemap_type}-format.xml`).toString("utf-8")
    const read_sitemap_from_index = JSON.parse(file_system.readFileSync(`data/sitemaps/indexes/${element.index}.json`).toString("utf-8"))

    const news_name = (sitemap_type == "news" ? read_sitemap_from_index.settings.news_name : "en")
    const news_language = (sitemap_type == "news" ? read_sitemap_from_index.settings.news_language : "en")

    appended_sitemap_indexes = appended_sitemap_indexes.concat(`
    <sitemap>
        <loc>${website_base_url}/${element.index}.xml.gz</loc>
        <lastmod>2023-28-03</lastmod>
    </sitemap>`)

    // # Read through each sitemap and append it to it's own feed.
    read_sitemap_from_index.pages.forEach(url => {
        appended_url_indexes = appended_url_indexes.concat(`
        <url>
            <loc>${website_base_url}${url.location}</loc>
            <lastmod>${url.last_modification}</lastmod>
            <changefreq>${url.change_frequency}</changefreq>
            <priority>${url.priority}</priority>
            ###
        </url>`)

        if(sitemap_type == "news" && url.publication_date != undefined) {
            appended_url_indexes = appended_url_indexes.replace("###", `
            <news:news>
                <news:publication>
                    <news:name>${news_name}</news:name>
                    <news:language>${news_language}</news:language>
                </news:publication>

                <news:publication_date>${url.publication_date}</news:publication_date>
                <news:title>${url.publication_name}</news:title>
            </news:news>`)
        } else {
           appended_url_indexes = appended_url_indexes.replace("###", '');
        }

        appended_url_indexes = appended_url_indexes.replace("###", '');
        file_system.writeFileSync(`processed/sitemaps/${element.index}.xml`, sitemap_format.replace("###", appended_url_indexes))
    })
});

// # Write new sitemap indexes to file:
file_system.writeFileSync("processed/sitemap-indexes.xml", sitemap_index_format.replace("###", appended_sitemap_indexes))
