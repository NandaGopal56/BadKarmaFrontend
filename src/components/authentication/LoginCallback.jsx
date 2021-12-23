import { useEffect } from "react";
import axios from "axios";

const LoginCallback = () => {
  useEffect(() => {

    const location = window.location.href
    const url = require('url');
    let urlObject = url.parse(location, true);

    // window.opener.postMessage("Hi dad!", "http://localhost:3000");
    

    if (urlObject.query.state === "google"){
      let code = urlObject.query.code
      console.log(code)
      const data = { code: code };
      axios.post('http://127.0.0.1:8000/account/social_login_Google', data)
        .then((response) => {
          console.log(response)
        }).catch((error) => {
          console.log(error.response.data)
        })
    }

    if(urlObject.query.state === '{st=state1223abc,ds=1234256789}'){
      let code = urlObject.query.code
      console.log(code)
      const data = { code: code };
      axios.post('http://127.0.0.1:8000/account/social_login_Facebook', data)
        .then((response) => {
          console.log(response)
        }).catch((error) => {
          console.log(error.response.data)
        })
    }

    

  }, []);

  

  return (
    <>
      <h1>Please wait while we authenticate you...</h1>
    </>
  );
};

export default LoginCallback;