
import  { FC, useCallback } from "react";
import { Button } from "@material-ui/core";



const LoginComp: FC = () => {

  const handleGoogleLogin = useCallback(async () => {

    const qParams = [
    `client_id=${'596590630682-vbqse12tavim80h9p1uvks5sjo15bamr.apps.googleusercontent.com'}`,
      `redirect_uri=${'http://localhost:3000/oauth_callback'}`,
      `scope=${'profile email openid'}`,
      `prompt=consent`,
      `state=google`,
      `include_granted_scopes=${true}`,
      `response_type=${'code'}`,
    ].join("&");
    
    
    const URL = `https://accounts.google.com/o/oauth2/v2/auth?${qParams}`
    console.log(URL)
    window.location.replace(URL);
    
  }, []);


  const handleFacebookLogin = useCallback(async () => {

    const qParams = [
      `client_id=${'313309207074548'}`,
      `redirect_uri=${'http://localhost:3000/oauth_callback'}`,
      `state=${'{st=state1223abc,ds=1234256789}'}`,
      `scope=${'email'}`
    ].join("&");


    const URL = `https://www.facebook.com/v12.0/dialog/oauth?${qParams}`
    console.log(URL)
    window.location.replace(URL);
    
  }, []);

  return (
    <>
      <Button id="fb-button" variant="contained" color="primary" onClick={handleGoogleLogin}>
        Login with Google
      </Button>
      <br />
      <Button id="fb-button" variant="contained" color="primary" onClick={handleFacebookLogin}>
        Login with Facebook
      </Button>

    </>
  );
};

export default LoginComp;