import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import prefetch from '@astrojs/prefetch'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), react(), sitemap(), prefetch()],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true,
    },
  },
})
