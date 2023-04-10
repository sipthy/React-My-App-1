
import './App.css';
import './Componenets/Header';
import Header from './Componenets/Header';
import Product from './Componenets/Product';
import Topic from './Componenets/Topic';
import Footer from './Componenets/Footer';



function App() {
  return (
    <div className="App">
       <Header/>
       <Topic/>
       <Product/>
       <Footer/>
    </div>
  );
}

export default App;
