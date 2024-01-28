import Header from './components/Header';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Home = ({ params: { lang } }) => {
  return (
      <div>
        <Header/>
        <Services/>
        <Contact/>
        <Footer/>
      </div>
  );
}

export default Home
