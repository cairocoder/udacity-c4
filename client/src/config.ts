// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'k2uj9ie98h'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'cairocoder.us.auth0.com',                      // Auth0 domain
  clientId: 'JiRTM3PXwcDdWBbjWoIG2zE8vgSQarbD',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
