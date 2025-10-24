// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['../base', '../pharmacy'],
  nitro: {
    output: {
      dir: '.output-user',   // custom build output
    },
  },
  devServer: { port: 3001 },
})
