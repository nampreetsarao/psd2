AppSettings = {
  // @if ENV == 'DEVELOPMENT'
  baseApiUrl: 'http://localhost:4400/',
  debug: true
  // @endif
  // @if ENV == 'TEST'
  baseApiUrl: 'https://test.api-example.com/'
  // @endif
  // @if ENV == 'PRODUCTION'
  baseApiUrl: 'https://api-example.com/'
  // @endif
}
