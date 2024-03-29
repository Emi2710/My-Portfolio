const SibApiV3Sdk = require('sib-api-v3-sdk');
const defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY_TWO;

var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

const sendinblue = (sendSmtpEmail) => {
  apiInstance.sendTransacEmail(sendSmtpEmail).then(function() {
      return true;
    }, function(error) {
      console.error(error);
      return false;
    });
}

module.exports = sendinblue

