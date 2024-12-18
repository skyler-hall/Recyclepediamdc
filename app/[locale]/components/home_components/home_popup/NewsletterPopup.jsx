'use client';

import { useEffect } from 'react';

function NewsletterPopup() {
  useEffect(() => {
    // create script for Constant Contact configuration
    const configScript = document.createElement('script');
    configScript.text = 'var _ctct_m = "f12cbddd5f03acd0b06a5a62b116f5f3";';

    const signupScript = document.createElement('script');
    signupScript.id = 'signupScript';
    signupScript.src =
      '//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js';
    signupScript.async = true;
    signupScript.defer = true;

    document.body.appendChild(configScript);
    document.body.appendChild(signupScript);

    return () => {
      document.body.removeChild(configScript);
      document.body.removeChild(signupScript);
    };
  }, []);

  return <div id='constant-contact-form'></div>;
}

export default NewsletterPopup;
