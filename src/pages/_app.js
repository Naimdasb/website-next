import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';

import { Navbar } from '../components/navbar/Navbar'
import { Footer } from '../components/footer/Footer'
import { GoTop } from '../components/goTop/GoTop'

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <GoTop />
            <Footer />
        </>
    )
}

export default App;