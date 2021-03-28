//var request = require('request');

module.exports =(req, res, next) => {
  console.log(req.body)
const auth = {
    uri: "https://api.sandbox.paypal.com/v1/oauth2/token",
    headers: {
        "Accept": "application/json",
        "Accept-Language": "en_US",
        "content-type": "application/x-www-form-urlencoded"
    },
    auth: {
    'user': 'AV_Sz5Y9AV4e-q1YkVarmbh_a0tjbivzeEwQZoP-g8vFUJKs82CSsDz4nDvO2l7nXydu0KJHxYv1_zev',
    'pass': 'EES9fO9XhK__ds0JDMgRwAoMOjbituhtv3seFKsfI1tWgrKo0z7X_7w3SMGZsGC5Su1wu1N3BRZztm2E'
    // 'sendImmediately': false
  },
  form: {
    "grant_type": "client_credentials"
  }
}
console.log(res.body)
next();

}