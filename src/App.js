import 'bootstrap/dist/css/bootstrap.min.css';
import Header1 from "./components/header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import { Footer } from "./components/footer";
import Invest from './pages/Home/Invest/Invest';
import Description from './pages/Description/Description';
import LoginPage from './components/login/logn';
import Signup from './components/SIgnup/Signup';
import DataForm from './components/dataform/dataform'; // Corrected import with proper casing

function App() {
  return (
    <>
      <Router>
        <div>
          <Header1 />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/invest" element={<Invest />} />
            <Route path="/description" element={<Description />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<DataForm />} /> {/* Updated component name */}
            <Route path="/Signup" element={<Signup />} />
            <Route path="/dataform" element={<DataForm />} /> {/* Additional route for dataform */}

          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
