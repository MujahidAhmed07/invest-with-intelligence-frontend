import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Invest from './pages/Home/Invest/Invest';
import Description from './pages/Description/Description';
import Signin from './components/login/signin';
import Signup from './components/Signup/Signup';
import InvestorDashboard from './components/investorDashboard/investorDashboard';
import DataForm from './components/dataform/dataform';
import About from './pages/About';
import Predict from './components/predict';
import EntreprenuerDashboard from './components/entreprenuerDashboard/eDashboard';
import Eprofile from './components/entreprenuerDashboard/entreprenuerProfile';



function App() {


  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/About" element={<About />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<DataForm />} />
          <Route path="/dataform" element={<DataForm />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Description/:id" element={<Description />} />
          <Route path="/investor-dashboard" element={<InvestorDashboard />} />
          <Route path="/predict/:id" element={<Predict />} />
          <Route path="/entreprenuer-dashboard" element={<EntreprenuerDashboard />} />
          <Route path="/entreprenuer-profile" element={<Eprofile />} />


        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
