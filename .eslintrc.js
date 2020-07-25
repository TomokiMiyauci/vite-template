module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: ['prettier'],
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-essential',
    'prettier',
    'prettier/vue'
  ],

  parserOptions: {
    ecmaVersion: 2020
  }
}
