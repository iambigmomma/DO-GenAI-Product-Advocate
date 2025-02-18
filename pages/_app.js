import "../public/styles.css";
import { useEffect } from "react"

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
      const script = document.createElement("script")
      script.src =
        "https://agent-4beb4b58203d8395def9-czxvl.ondigitalocean.app/static/chatbot/widget.js"
      script.async = true

      // Chatbot configuration
      script.dataset.agentId = "afae3663-eaae-11ef-bf8f-4e013e2ddde4"
      script.dataset.chatbotId = "DfwJnJJlo3ufHdG8E3qZ8_yAykiawWtU"
      script.dataset.name = "DigitalOcean Product Advocate"
      script.dataset.primaryColor = "#031B4E"
      script.dataset.secondaryColor = "#000000"
      script.dataset.buttonBackgroundColor = "#FFFFFF"
      script.dataset.startingMessage =
        "Welcome to DigitalOcean! I am Nemo, specialized in our products! I will recommend the most suitable product portfolio based on your request!"
      script.dataset.logo =
        "https://pbs.twimg.com/media/EGmxMG8XUAA-pO3.png:large"

      document.body.appendChild(script)

      return () => {
        document.body.removeChild(script) // Clean up script on unmount
      }
    }, [])

  return <Component {...pageProps} />;
}
