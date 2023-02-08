import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
    server: {
        port: 3200,
        watch: {
            ignored: ['**/.idea/workspace.xml']
        }
    }
})
