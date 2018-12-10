//var CryptoJS = require('./lib/pbkdf2.js');  //引用AES源码js
//import store from '../store/index'

var CryptoJS = require('./lib/aes.js');
var CryptoJS1 = require('./lib/pbkdf2');
var pw = "ecard_mini_programe"; //秘钥
var keySize = 8;

// var AesUtil = function( iterationCount) {
//   this.keySize = 8;
//   this.iterationCount = iterationCount;
// };


// AesUtil.prototype.generateKey = function(salt,iterationCount) {
//   var key = CryptoJS.PBKDF2(
//       this.pw, 
//       CryptoJS.enc.Hex.parse(salt),
//       { keySize: this.keySize, iterations: iterationCount });
//   return key;
// }

function generateKey(salt,iterationCount){
  var key = CryptoJS1.PBKDF2(
    pw, 
    CryptoJS.enc.Hex.parse(salt),
    { keySize: keySize, iterations: iterationCount });
return key;
}

// AesUtil.prototype.encrypt = function(salt, iv,iterationCount, plainText) {
//   var key = this.generateKey(salt,iterationCount);
//   var encrypted = CryptoJS.AES.encrypt(
//       plainText,
//       key,
//       { iv: CryptoJS.enc.Hex.parse(iv) });
//   return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
// }

function Encrypt(salt,iv,iterationCount,plainText){
  //console.log(this.store.state.iv_salt)
  var key = this.generateKey(salt,iterationCount);
  var encrypted = CryptoJS.AES.encrypt(
      plainText,
      key,
      { iv: CryptoJS.enc.Hex.parse(iv) });
  return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
}

// AesUtil.prototype.decrypt = function(salt, iv,iterationCount, cipherText) {
//   var key = this.generateKey(salt,iterationCount);
//   var cipherParams = CryptoJS.lib.CipherParams.create({
//     ciphertext: CryptoJS.enc.Base64.parse(cipherText)
//   });
//   var decrypted = CryptoJS.AES.decrypt(
//       cipherParams,
//       key,
//       { iv: CryptoJS.enc.Hex.parse(iv) });
//   return decrypted.toString(CryptoJS.enc.Utf8);
// }

function Decrypt(salt,iv,iterationCount,cipherText) {
  var key = this.generateKey(salt,iterationCount);
  var cipherParams = CryptoJS.lib.CipherParams.create({
    ciphertext: CryptoJS.enc.Base64.parse(cipherText)
  });
  var decrypted = CryptoJS.AES.decrypt(
      cipherParams,
      key,
      { iv: CryptoJS.enc.Hex.parse(iv) });
  return decrypted.toString(CryptoJS.enc.Utf8);
}

//暴露接口
module.exports.generateKey = generateKey;
module.exports.Decrypt = Decrypt;
module.exports.Encrypt = Encrypt;