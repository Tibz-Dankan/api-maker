const axios = require("axios");

async function makeAPICallWithToken(
  url,
  accessToken,
  method = "get",
  data = null
) {
  try {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };

    const config = {
      method: method,
      url: url,
      headers: headers,
      data: data,
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error("Error making API call:", error.message);
    throw error;
  }
}

async function main() {
  const apiUrl = "https://api.example.com/resource";
  const accessToken = "YOUR_ACCESS_TOKEN";

  try {
    const responseData = await makeAPICallWithToken(apiUrl, accessToken);
    console.log("API Response:", responseData);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
