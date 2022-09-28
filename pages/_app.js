import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import '../styles/globals.css'
 // import "bootstrap/dist/js/bootstrap";
import Navbar from '@/layout/Navbar';
import Footer from '@/layout/Footer';

function MyApp({ Component, pageProps }) {
 
    if(Component.getLayout) {
      return Component.getLayout(<Component {...pageProps} />)
    }

    return (
      <>
        <Navbar />
          <Component {...pageProps} />
        <Footer />  
      </>
    )
  }
 

export default MyApp