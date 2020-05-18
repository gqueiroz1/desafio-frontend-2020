module.exports = {
  pwa: {
    name: 'MktPlace',
    themeColor: '#8e36b7',
    msTileColor: '#000000',
    display: 'standalone',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'package.json',
    }
  }
}
