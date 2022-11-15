import { Route, Routes } from 'react-router-dom';
import Modal from './Components/Modal/Modal';
import Footer from './Components/Reusable/Footer/Footer';
import Header from './Components/Reusable/Header/Header';
import Home from './Pages/Home/Home';
import NftPlace from './Pages/Places/NftPlace';
function App() {
    return ( 
    <>
        <Header/>
        <Routes>
        <Route path = '/'exact element = { <Home/>}/> 
        <Route path = 'home' element = { <Home /> }/> 
        <Route path = 'place_to_stay' element = { < NftPlace /> }/> 
        </Routes> 
        <Footer/>
        </>
    );
}

export default App;