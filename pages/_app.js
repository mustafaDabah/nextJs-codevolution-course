import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import '../styles/globals.css'
 // import "bootstrap/dist/js/bootstrap";

function MyApp({ Component, pageProps }) {
 
    return (
      <>
        <Component {...pageProps} />
      </>
    )
  }
 

export default MyApp