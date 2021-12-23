import React, { useCallback } from 'react'

function SocialAuth() {

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
        window.location.replace(URL);
        
      }, []);

    return (
        <div className="social-login" >
            <button  className="facebook" onClick={handleFacebookLogin}>
                <span className="icon-facebook mr-3"></span> 
            </button>
            
            <button  className="google" onClick={handleGoogleLogin}>
                <span className="icon-google mr-3"></span> 
            </button>
        </div>
    )
}

export default SocialAuth
