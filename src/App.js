import 'bootstrap/dist/css/bootstrap.min.css';
import Header1 from "./components/header";
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import { Footer } from "./components/footer";
import Invest from './pages/Home/Invest/Invest';
import Description from './pages/Description/Description';
import LoginPage from './components/login/logn';
import Signup from './components/SIgnup/Signup';
import DataForm from './components/dataform/dataform'; 
import About from './pages/About';
import AdminLogin from './components/adminLogin';
import Predict from './components/predict';
// import adminroutes from './admin_routes';
// import Dashboard from './components/scenes/dashboard';
// import StartupComponent from './components/startupdata';
// import axios from 'axios';
// import useHistory from 'react-router-dom'; // Removed parentheses around useHistory

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Header1 />
          <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/invest" element={<Invest />} />
              <Route path="/About" element={<About />} />
                <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<DataForm />} /> 
                    <Route path="/dataform" element={<DataForm />} /> 
                      <Route path="/Signup" element={<Signup />} />
                        <Route path="/Description" element={<Description />} />
                      <Route path="/About" element={<About />} />
                      {/* <Route path="/admin-login" element={<AdminLogin />} />  */}
                      {/* <Route path="/admin" element={<adminroutes />} /> */}
                      <Route path="/predict" element={<Predict />} />
                      {/* <Route path="/startupdata" element={<StartupComponent />} /> */}

          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
