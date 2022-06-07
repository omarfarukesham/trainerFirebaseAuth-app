import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Booking from './Components/Booking';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import RequireAuth from './Components/RequireAuth/RequiredAuth';
import Login from './Components/Securities/Login/Login';
import SignUp from './Components/Securities/SignUp/SignUp';
import Services from './Components/Services/Services';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>

        <Route path="/services" element={
          <RequireAuth>
            <Services></Services>
          </RequireAuth>
        }></Route>

        <Route path="/About" element={<About></About>}></Route>
        <Route path="/booking/:booking_id" element={<Booking></Booking>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
    
      </Routes>
    </div>
  );
}

export default App;
