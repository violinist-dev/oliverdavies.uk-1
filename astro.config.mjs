import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import compress from "astro-compress";

// https://astro.build/config
import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  integrations: [alpinejs(), mdx(), sitemap({
    serialize(item) {
      // To prevent crawling errors, remove the trailing slash from the URL
      // otherwise it will be a link to a redirect URL and not the content.
      item.url = item.url.replace(/\/$/, "");
      return item;
    }
  }), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), markdoc()],
  site: "https://www.oliverdavies.uk"
});