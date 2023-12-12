import CryptoJS from "crypto-js";

export function buildSign(httpMethod, requestUri, secretKey) {
    try {
      const signatureHeaderInfo = `${httpMethod}$${requestUri}$`;
      const signature = CryptoJS.HmacSHA256(
        signatureHeaderInfo,
        secretKey
      ).toString(CryptoJS.enc.Base64);
      return signature;
    } catch (error) {
      throw new Error(error);
    }
  }