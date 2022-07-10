module.exports = {
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "src/*": [
        "src/*"
      ],
      "app/*": [
        "*"
      ],
      "components/*": [
        "src/components/*"
      ],
      "layouts/*": [
        "src/layouts/*"
      ],
      "pages/*": [
        "src/pages/*"
      ],
      "assets/*": [
        "src/assets/*"
      ],
      "boot/*": [
        "src/boot/*"
      ],
      "stores/*": [
        "src/stores/*"
      ],
      "vue$": [
        "node_modules/vue/dist/vue.runtime.esm-bundler.js"
      ]
    }
  },
  "exclude": [
    "dist",
    ".quasar",
    "node_modules"
  ]
}
