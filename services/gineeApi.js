import axios from "axios";
import { buildSign } from "./BuildSign";

const baseURL = "https://api.ginee.com";

export const gineeApi = async (HttpMethod, RequestUri, requestData) => {
  try {

    const secretKey = '3ba61c5245556893';
    const accessKey = 'dev_02304d25f35a7771';
    const signatureGinee = await buildSign(HttpMethod, RequestUri, secretKey);

    if (signatureGinee) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${accessKey}:${signatureGinee}`,
        "X-Advai-Country": "ID",
      };

      const config = {
        method: HttpMethod,
        url: baseURL + RequestUri,
        headers: headers,
        data: requestData,
      };

      const response = await axios(config);

      console.log("Response:", response.data);
      return response.data;
    }
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Internal server error");
  }
};
