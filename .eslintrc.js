module.exports = {
   env: {
      browser: true,
      es2021: true,
      jest: true,
   },
   extends: ['next', 'prettier'],
   rules: {
      'no-use-before-define': 'off',
      'space-before-function-paren': 'off',
      'react/react-in-jsx-scope': 'off',
      'comma-dangle': 'off',
   }
}
