import './App.css'
import 'antd/dist/antd.css';
import PageRoutes from './Routes/PageRoutes';
import SideDrawerRouting from './Routes/SideDrawerRouting';
import Login from './Screens/Login/Login'
// import ViewDoctorDetails from './Screens/Doctors/ViewDoctorDetails'
import { Routes, Route } from "react-router-dom";
// import Dashboard from './Screens/Dashboard/Dashboard';

function App() {
  return (
    <div className="App"> 
    <PageRoutes>
      <Routes>
          <Route exact path='/' element={<Login/>} />
          <Route exact path='dashboard/*' element={<SideDrawerRouting/>} />
          <Route exact path='/login' element={<Login/>} />
          {/* <Route exact path='/doctor-details:id' element={<ViewDoctorDetails/>} /> */}
        </Routes>
      </PageRoutes>
    </div>
  );
}

export default App;
