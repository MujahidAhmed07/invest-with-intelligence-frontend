import 'bootstrap/dist/css/bootstrap.min.css';
import Header1 from "./components/header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import { Footer } from "./components/footer";
import Invest from './pages/Home/Invest/Invest';
import Description from './pages/Description/Description'; // Ensure the correct relative path
import LoginPage from './components/login/logn';
import Signup from './components/SIgnup/Signup';
import dataform from './components/dataform/dataform';


function App() {
  return (
    <>
    <Router>
      <div>
        <Header1 />
        <Routes>
          {/* Define routes for different pages */}
          <Route path="/" element={<Home />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/description" element={<Description />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<dataform />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/dataform" element={<dataform />} />

        </Routes>
        <Footer />
      </div>
    </Router>

    </>

  );
}

export default App;
