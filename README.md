
<p align=center>
<img width=90 height=90 src="https://provider.ams3.cdn.digitaloceanspaces.com/newspaper-solid.gif"/>
</p>

<h2 align="center"><b>Dynamic Sitemap Generator</b></h2>
<p align="center"><b>By <a href="https://github.com/u/rikkertthedeveloper">Rick Arendsen</a></b></p>

<hr>
<br>

### 👋 Tool Introdution
This tool is meant to be able to generate modular sitemap that are easily adjusted and modified to suit your own personal needs, I personally developed this project for my own sites in order to quickly generate content for dynamic sitemaps.
<br>
<br>

### 📙 Generator Usage
First, your sitemap 'indexes' are stored in the data/sitmaps/sitemap-indexes.json file, here you can define your sitemap indexes for different types of pages.

**You can then proceed to format these pages in your own way, here is an example of a sitemap format:**

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

### ⚙️Generating the sitemaps
In order to generate the sitemaps, simply run the index.js file using the following command:

```sh
node index.js
```
