const axios = require("axios");
const BASE_URL = "https://backendv2-test.smart1.ai";
const LOGIN_ENDPOINT = "/mobile/auth/token";
const valid_email = "mustafangm1212@gmail.com";
const valid_password = "Aa123@";

const login = async () => {
  
    const params = new URLSearchParams();
  params.append("username", valid_email);
  params.append("password", valid_password);
  params.append("deviceToken", "123456789");
  
  const response = await axios.post(`${BASE_URL}${LOGIN_ENDPOINT}`, params, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  console.log(response.data);
};
login();
