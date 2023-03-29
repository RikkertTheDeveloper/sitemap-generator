
<p align=center>
<img width=90 height=90 src="https://provider.ams3.cdn.digitaloceanspaces.com/newspaper-solid.gif"/>
</p>

<h2 align="center"><b>Dynamic Sitemap Generator</b></h2>
<p align="center"><b>By <a href="https://github.com/u/rikkertthedeveloper">Rick Arendsen</a></b></p>

### 👋 Tool Introduction
This tool is designed to generate modular sitemaps that can be easily customized to meet your specific needs. I developed this project for my own websites to quickly generate all the necessary files for managing dynamic content.

With this tool, you can efficiently create sitemaps that are easy to adjust and modify as your website evolves. Whether you have a small website or a large one with multiple pages, this tool can help you keep your sitemap up to date and organized.

I'm confident that you'll find this tool to be a valuable asset for managing your website's content. Feel free to use it and make adjustments as needed to fit your individual requirements.
<br>
<br>

### 📙 Using a Sitemap Generator
To create a sitemap for your website, you need to store the sitemap indexes in the data/sitemaps/sitemap-indexes.json file. This is where you can define the sitemap indexes for different types of pages on your website.

Once you've defined the sitemap indexes, you can format them in any way you like. Here's an example of how you can format your sitemap:

```json
{
    "settings": {
        "domain": "https://rickarendsen.nl"
    },

    "pages": [
        {
            "location": "/",
            "last_modification": "2023-03-28",
            "change_frequency": "daily",
            "priority": 0.8
        }
    ]
}
```
To use this code, simply copy and paste it into your own sitemap file. You can customize the values to fit your website's specific needs.

### ⚙️Generating the sitemaps
To generate sitemaps for your website, you can use the index.js file which is included in your website's codebase. To run this file and initiate the sitemap generation process, you can use the following command in your command-line interface:

```sh
node index.js
```

This command will start the sitemap generation process and create the necessary sitemap files based on the configuration you have defined in the data/sitemaps/sitemap-indexes.json file. 
