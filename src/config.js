const config = {
  production: {
    ORIGIN_API_URL: 'https://whatword-api.herokuapp.com',
    ORIGIN_URL: 'https://kykungz.github.io/whatword/#',
  },
  development: {
    ORIGIN_API_URL: 'http://192.168.1.104:5000',
    // ORIGIN_URL: 'http://localhost:8080/#',
    ORIGIN_URL: window.location.origin + '/#',
  },
  // development: {
  //   ORIGIN_API_URL: 'https://whatword-api.herokuapp.com',
  //   ORIGIN_URL: 'https://kykungz.github.io/whatword/#',
  // },
}

export default config[process.env.NODE_ENV]
