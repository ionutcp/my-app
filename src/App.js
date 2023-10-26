import './App.css';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
      <>
      <Header></Header>
      <Outlet/>
      <Footer></Footer>
      </>
  );
}

export default App;
