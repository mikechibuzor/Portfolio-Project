import * as CryptoJS from "crypto-js";
class EncryptDecrypt {
  constructor() {
    /* jshint ignore:start */
    this.key = "fantasyFootAAXXXXXX";
  }
  /* jshint ignore:end */
  encrypt(data) {
    // Encrypt
    var ciphertext = CryptoJS.AES.encrypt(data, this.key).toString();
    return ciphertext;
  }
  decrypt(data) {
    // Decrypt
    var bytes = CryptoJS.AES.decrypt(data, this.key);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  }
}
export default EncryptDecrypt;
