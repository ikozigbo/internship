
import crypto from "crypto";

const payload = {
    "business": "{{businessId}}",
    "sourceCurrency": "NGN",
    "destinationCurrency": "NGN",
    "amount": "20",
    "description": "i want to sha pay money",
    "paymentDestination": "bank_account",
    "beneficiary": {
        "firstName": "Alan",
        "lastName": "Ross",
        "accountHolderName": "Alan Ross",
        "country": "ng",
        "phone": "0803443433",
        "accountNumber": "012344345",
        "type": "individual",
        "email": "aa@aa.com",
        "bankCode":"058",
        "bankName":"Guaranty Trust Bank"
    }
};

const encryptionKey="";//get from settings page on the portal
const signature =  crypto
      .createHmac("SHA512", encryptionKey)
      .update(JSON.stringify(payload)) 
      .digest("hex");

//add generated signature to your headers as `signature` when initiating a payout