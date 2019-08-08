const config = {
  production: {
    // ORIGIN_API_URL: 'https://whatword.appspot.com',
    ORIGIN_API_URL: 'http://35.184.157.197:5000',
    ORIGIN_URL: 'https://kykungz.github.io/whatword/#',
  },
  development: {
    ORIGIN_API_URL: 'http://localhost:5000',
    ORIGIN_URL: 'http://localhost:8080/#',
  },
  // development: {
  //   ORIGIN_API_URL: 'https://whatword-api.herokuapp.com',
  //   ORIGIN_URL: 'https://kykungz.github.io/whatword/#',
  // },
}

export default config[process.env.NODE_ENV]
