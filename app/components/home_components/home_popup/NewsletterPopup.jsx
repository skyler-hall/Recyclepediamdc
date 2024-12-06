"use client"

import { useEffect } from "react"

const NewsletterPopup = (show) => {

    const newsletterScript = (scriptUrl) => {
        useEffect(() => {
            window._ctct_m = "f12cbddd5f03acd0b06a5a62b116f5f3"; //defines a global variable to run the script
            const head = document.querySelector('head')
            const scriptElement = document.createElement('script')
            scriptElement.setAttribute('src', scriptUrl)
            scriptElement.setAttribute('id', 'signupScript')
            scriptElement.setAttribute('async', '')
            scriptElement.setAttribute('defer', '')

            head.appendChild(scriptElement)

            return () => {
                head.removeChild(scriptElement)
            }
        }, [scriptUrl, show])
    }

    
    return(
        <div>
            {
                newsletterScript("//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js")
            }
        </div>
    )
}

export default NewsletterPopup