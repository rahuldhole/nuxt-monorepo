// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['../base'],
  nitro: {
    output: {
      dir: '.output-pharmacy',   // custom build output
    },
  },
  devServer: { port: 3002 },
})
