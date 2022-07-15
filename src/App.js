
import './App.css';
import './components/Footer'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import RestaurantDetails from './components/RestaurantDetails';
function App() {
  return (
   <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details' element={<RestaurantDetails />}/>
      </Routes>

   </Router>
  );
}

export default App;
