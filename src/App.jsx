import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Stack from './Stack';
import WebApp from './pages/WebApp';
import ItService from './pages/ItService';
import MobileApp from './pages/MobileApp';
import Blockchain from './pages/Blockchain';
import Software from './pages/Software';
import DataScience from './pages/DataScience';
import Abhi from './portfolio/abhishek/Abhi';
// import Amar from './portfolio/amar/Amar';
// import Neha from './portfolio/neha/Neha';
import Sushama from './portfolio/sushama/Sushama';
import Shubham from './portfolio/shubham/Shubham';
import Signup from './admin/Signup';
import NotFound from './service/NotFound';
import Signin from './admin/Signin';
import Dashboard from './admin/Dashboard';
import DashTeam from './admin/DashTeam';
import PrivateRoute from './admin/PrivateRoute';
import DashProject from './admin/DashProject';
import DashTask from './admin/DashTask';
import DashCalender from './admin/DashCalender';
import DashSettings from './admin/DashSettings';
import DashEnquiry from './admin/DashEnquiry';
import DashReports from './admin/DashReports';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Stack />} />
        <Route path="/webapp" element={<WebApp />} />
        <Route path="/itservice" element={<ItService />} />
        <Route path="/mobileapp" element={<MobileApp />} />
        <Route path="/blockchain" element={<Blockchain />} />
        <Route path="/software" element={<Software />} />
        <Route path="/ds" element={<DataScience />} />
        <Route path="/portfolio5" element={<Abhi />} />
        {/* <Route path="/portfolio4" element={<Amar />} /> */}
        {/* <Route path="/portfolio1" element={<Neha />} /> */}
        <Route path="/portfolio2" element={<Sushama />} />
        <Route path="/portfolio3" element={<Shubham />} />
        <Route path="/admin/auth/signup" element={<Signup/>} />
        <Route path='/admin/auth/login' element={<Signin />} />
        <Route element = {<PrivateRoute />}>

        <Route path='dashboard' element={<Dashboard/>} />
        <Route path='team' element={<DashTeam/>} />
        <Route path='projects' element={<DashProject />} />
        <Route path='Task' element={<DashTask />} />
        <Route path='calendar' element={<DashCalender />} />
        <Route path='settings' element={<DashSettings />} />
        <Route path='reports' element={<DashReports />} />
        <Route path='message' element={<DashEnquiry />} />
        


        </Route>
       <Route path="*" element={<NotFound />} /> 





      </Routes>
    </BrowserRouter>
  );
};

export default App;
