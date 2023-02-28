import React from 'react'
import SideDrawer from '../Screens/SideDrawer/SideDrawer'
import Dashboard from '../Screens/Dashboard/Dashboard'
import Doctors from '../Screens/Doctors/Doctors';
import Hospitals from '../Screens/Hospitals/Hospitals';
import MedicalStores from '../Screens/MedicalStores/MedicalStores';
import AppointmentRecords from '../Screens/AppointmentRecords/AppointmentRecords';
import UserRecords from '../Screens/UserRecords/UserRecords';
import MedicineBookingRecords from '../Screens/MedicineBookingRecords/MedicineBookingRecords';
import HomeServiceRecords from '../Screens/HomeServiceRecords/HomeServiceRecords'
import ViewDoctorDetails from '../Components/ViewDetails/ViewDoctorDetials/ViewDoctorDetails'
import ViewHospitalDetails from '../Components/ViewDetails/ViewHospitalDetails/ViewHospitalDetails'
import ViewPanelUserDetails from '../Components/ViewDetails/ViewPanelUserDetails/ViewPanelUserDetails'
import ViewMedicalStoreDetails from '../Components/ViewDetails/ViewPharmacyDetails/ViewPharmacyDetails'
import SpecializationService from '../Screens/Specialization-Service/Specialization-Service';
import BookAppointment from '../Screens/BookAppointment/BookAppointment';
import HealthCard from '../Screens/HealthCard/HealthCard';
import ViewHealthcardDetails from '../Components/ViewDetails/ViewHealthcardDetails/ViewHealthcardDetails';
import AddData from '../Screens/AddData/AddData';
import PageRoutes from './PageRoutes'
import { Routes, Route } from "react-router-dom";

export default function Routing() {
  return (
    <div>
      <SideDrawer>
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route path="doctors">
            <Route index element={<Doctors />} />
            <Route path=":id" element={<ViewDoctorDetails />}/>
            {/* <Route exact path="doctors" element={<Doctors />}/> */}
          </Route>
          <Route path="hospitals">
            <Route index element={<Hospitals />} />
            <Route path=":id" element={<ViewHospitalDetails />}/>
          </Route>
          <Route path="pharmacies">
            <Route index element={<MedicalStores />} />
            <Route path=":id" element={<ViewMedicalStoreDetails />}/>
          </Route>
          <Route path="user-records">
            <Route index element={<UserRecords />} />
            <Route path=":id" element={<ViewPanelUserDetails />}/>
          </Route>
          <Route path="healthcard">
            <Route index element={<HealthCard />} />
            <Route path=":id" element={<ViewHealthcardDetails />}/>
          </Route>
          <Route exact path='add-data' element={<AddData />} />
          <Route exact path='appointment-records' element={<AppointmentRecords />} />
          <Route exact path='information' element={<SpecializationService />} />
          <Route exact path='home-service-records' element={<HomeServiceRecords />} />
          <Route exact path='medicine-booking-records' element={<MedicineBookingRecords />} />
          <Route exact path='book-appointment' element={<BookAppointment />} />
          {/* <Route exact path='health-card' element={<HealthCard />} /> */}
          <Route exact path='/login' element={<PageRoutes/>} />
        </Routes>
      </SideDrawer>

    </div>
  )
}
