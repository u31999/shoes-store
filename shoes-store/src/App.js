import './res/layout/App.scss';
import Header from './component/Header';
import RowterSwitch from './component/RowterSwitch';
import Footer from './component/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header />   
          <RowterSwitch />
          </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
