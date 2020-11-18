import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";
import NotFound from "./NotFound";
import Footer from "./Footer";

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <div className="container">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contactus" component={ContactUs} />
        <Route  component={NotFound} />
      </Switch>
      
      <div>
        <Footer/>
      </div>
    </div>
  </>
  );
}

export default App;
