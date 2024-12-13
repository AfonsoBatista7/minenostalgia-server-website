import NavBar from './components/header/NavBar';
import style from './app.module.css';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Medals from './pages/Medals';
import Stats from './pages/Stats';
import History from './pages/History';

function App() {
  return (
    <>
        <NavBar/>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/history" element={<History/>}/>
            <Route path="/stats/:playerName" element={<Stats/>}/>
            <Route path="/stats" element={<Stats/>}/>
            <Route path="/medals" element={<Medals/>}/>
          </Routes>
        </Layout>
    </>
  );
}

export default App;
