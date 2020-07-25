module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: [
      'plugin:vue/vue3-recommended',
    // または、
    'plugin:vue/vue3-strongly-recommended',
    // または
    'plugin:vue/vue3-essential',
    ],

    parserOptions: {
      ecmaVersion: 2020
    },
    rules: {
    }
  }