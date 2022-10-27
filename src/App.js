import './App.css';
import Header from './components/header';
import Specialization from './components/specialization';
import Portfolio from './components/portfolio';
import Customers from './components/customers';
import Pricing from './components/pricing'
import Footer from './components/footer';

function App() {
  return (
    <>
        <Header />
        <Specialization/>
        <Portfolio/>
        <Customers />
        <Pricing/>
        <Footer/>
    </>
  );
}

export default App;
