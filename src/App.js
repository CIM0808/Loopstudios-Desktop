import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Sect1 from './components/Sect1';
import Sect2 from './components/Sect2';
import Sect3 from './components/Sect3';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
        <Sect1 />
        <Sect2 />
        <Sect3 />
        <Footer />
    </div>
  );
}

export default App;
