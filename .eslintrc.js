module.exports = {
  extends: "airbnb",
  plugins: ["react", "jsx-a11y", "import"],
  env: {
    jest: true,
    browser: true
  },  
  "rules": {
    "react/prop-types": 0 
  }
};