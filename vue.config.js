const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css:{
    loaderOptions:{
      sass:{
        // prependData: `@import "@/style/App.scss";`
        prependData:`@import '@/style/App.scss'`
      }
    }
  }
})
