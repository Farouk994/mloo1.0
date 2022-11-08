// import '../styles/globals.css';
import Navbar from '../components/Navbar';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
// import Footer from './components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
       {/* <Footer/> */}
      </ChakraProvider>
    </div>
  );
}

export default MyApp;
