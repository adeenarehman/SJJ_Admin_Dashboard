import axios from 'axios';
export const AUTH_LOGIN = 'AUTH_LOGIN'
export const CREATE_DOCTORS = 'CREATE_DOCTORS';
export const CREATE_HOSPITALS = 'CREATE_HOSPITALS';
export const CREATE_PHARMACY = 'CREATE_PHARMACY';
export const CREATE_USER = 'CREATE_USER';
export const CREATE_PANEL_USER = 'CREATE_PANEL_USER';
export const CREATE_MEDICINE_BOOKING = 'CREATE_MEDICINE_BOOKING';
export const CREATE_HOME_SERVICE = 'CREATE_HOME_SERVICE';
export const CREATE_RECENT_ADDED_DOCTOR = 'CREATE_RECENT_ADDED_DOCTOR';
export const CREATE_DOCTORS_SCHEDULE = 'CREATE_DOCTORS_SCHEDULE';
export const CREATE_PARTICULAR_DOCTOR = 'CREATE_PARTICULAR_DOCTOR';
export const CREATE_SPECIALIZATIONS = 'CREATE_SPECIALIZATION';
export const CREATE_SERVICES = 'CREATE_SERVICES';
export const CREATE_DOCTORS_AVAILABILITY = 'CREATE_DOCTORS_AVAILABILITY';
export const CREATE_HEALTHCARD = 'CREATE_HEALTHCARD';
export const CREATE_HEALTHCARD_ACTIVITY = 'CREATE_HEALTHCARD_ACTIVITY';
// 
export const FETCH_DOCTORS = 'FETCH_DOCTORS';
export const FETCH_HOSPITALS = 'FETCH_HOSPITALS';
export const FETCH_PHARMACY = 'FETCH_PHARMACY';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_PANEL_USER = 'FETCH_PANEL_USER';
export const FETCH_PHYSICAL_APPOINTMENT = 'FETCH_PHYSICAL_APPOINTMENT';
export const FETCH_ONLINE_APPOINTMENT = 'FETCH_ONLINE_APPOINTMENT';
export const FETCH_SPECIALIZATION = 'FETCH_SPECIALIZATION';
export const FETCH_MEDICINE_BOOKING = 'FETCH_MEDICINE_BOOKING';
export const FETCH_HOME_SERVICE = 'FETCH_HOME_SERVICE';
export const FETCH_HEALTHCARD = 'FETCH_HEALTHCARD';
export const FETCH_RECENT_ADDED_DOCTOR = 'FETCH_RECENT_ADDED_DOCTOR';
export const FETCH_DOCTORS_SCHEDULE = 'FETCH_DOCTORS_SCHEDULE';
export const FETCH_SINGLE_DOCTORS_SCHEDULE = 'FETCH_SINGLE_DOCTORS_SCHEDULE';
export const FETCH_PARTICULAR_DOCTOR = 'FETCH_PARTICULAR_DOCTOR';
export const FETCH_SINGLE_SCHEDULE = 'FETCH_SINGLE_SCHEDULE';
export const FETCH_PARTICULAR_HOSPITAL = 'FETCH_PARTICULAR_HOSPITAL';
export const FETCH_PARTICULAR_PHARMACY = 'FETCH_PARTICULAR_PHARMACY';
export const FETCH_PARTICULAR_PANEL_USER = 'FETCH_PARTICULAR_PANEL_USER';
export const FETCH_PARTICULAR_HEALTHCARD = 'FETCH_PARTICULAR_HEALTHCARD';
// 
export const FETCH_DOCTORS_COUNT = 'FETCH_DOCTORS_COUNT';
export const FETCH_HOSPITALS_COUNT = 'FETCH_HOSPITALS_COUNT';
export const FETCH_USERS_COUNT = 'FETCH_USERS_COUNT';
export const FETCH_PHARMACY_COUNT = 'FETCH_PHARMACY_COUNT';
export const FETCH_MEDICINE_BOOKING_COUNT = 'FETCH_MEDICINE_BOOKING_COUNT';
export const FETCH_ONLINE_APPOINTMENT_COUNT = 'FETCH_ONLINE_APPOINTMENT_COUNT';
export const FETCH_PHYSICAL_APPOINTMENT_COUNT = 'FETCH_PHYSICAL_APPOINTMENT_COUNT';
export const FETCH_HOME_SERVICE_COUNT = 'FETCH_HOME_SERVICE_COUNT';
export const FETCH_MISSED_APPOINTMENT_COUNT = 'FETCH_MISSED_APPOINTMENT_COUNT';
export const FETCH_COMPLETED_APPOINTMENT_COUNT = 'FETCH_COMPLETED_APPOINTMENT_COUNT';
export const FETCH_CANCELLED_APPOINTMENT_COUNT = 'FETCH_CANCELLED_APPOINTMENT_COUNT';
export const FETCH_PENDING_APPOINTMENT_COUNT = 'FETCH_PENDING_APPOINTMENT_COUNT';
// 
export const FETCH_DOCTORS_MONTHLY_COUNT = 'FETCH_DOCTORS_MONTHLY_COUNT';
export const FETCH_HOSPITALS_MONTHLY_COUNT = 'FETCH_HOSPITALS_MONTHLY_COUNT';
export const FETCH_PHARMACIES_MONTHLY_COUNT = 'FETCH_PHARMACIES_MONTHLY_COUNT';
export const FETCH_USER_MONTHLY_COUNT = 'FETCH_USER_MONTHLY_COUNT';
export const FETCH_MEDICINE_BOOKING_MONTHLY_COUNT = 'FETCH_USER_MONTHLY_COUNT';
export const FETCH_HOME_SERVICE_MONTHLY_COUNT = 'FETCH_USER_MONTHLY_COUNT';
// 
export const FETCH_USER_LIMITED = 'FETCH_USER_LIMITED';
export const FETCH_APPOINTMENT_LIMITED = 'FETCH_APPOINTMENT_LIMITED';
export const FETCH_PHARMACY_LIMITED = 'FETCH_PHARMACY_LIMITED';
// 
export const DELETE_SINGLE_DOCTOR = 'DELETE_SINGLE_DOCTOR';
export const DELETE_SINGLE_HOSPITAL = 'DELETE_SINGLE_HOSPITAL';
export const DELETE_SINGLE_PHARMACY = 'DELETE_SINGLE_PHARMACY';
export const DELETE_SINGLE_DOCTOR_SCHEDULE = 'DELETE_SINGLE_DOCTOR_SCHEDULE';
export const DELETE_SINGLE_PANEL_USER = 'DELETE_SINGLE_PANEL_USER';
export const DELETE_SINGLE_HEALTHCARD = 'DELETE_SINGLE_HEALTHCARD';
// export const CREATE_PARTICULAR_DOCTOR = 'CREATE_PARTICULAR_DOCTOR';

// const API = 'https://sjjserver.saifullahjunaidjamshed.com/'
const API = 'http://localhost:3001'
// ************************************* LOGIN API ************************************************************
export const AuthLogin = (Email, Password) => {

    return async dispatch => {
        await axios.post(`${API}/admin/login`, {Email, Password})
            .then(function (response) {
                console.log('This is console: ',response.data[0].panel_user_email);
                dispatch({
                    type: AUTH_LOGIN,
                    payload: response,
                    Email: response.data[0].panel_user_email,
                    FName: response.data[0].panel_user_first_name,
                    LName: response.data[0].panel_user_last_name,
                    Desig: response.data[0].designation_uid,
                    Id: response.data[0].panel_user_id,
                    token: response.data[0].is_logged_in
                });
            })
            .catch(function (error) {
                console.log(error);
                // alert(error)
            });
    }
}

// ************************************ COUNT API FUNCTIONS ***************************************************
export const fetchDoctorCount = () => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/doctor-count`)

        const resultDoctorCountData = await result.json();

        console.log(resultDoctorCountData);
        dispatch({
            type: FETCH_DOCTORS_COUNT,
            payload: resultDoctorCountData
        });
    }
}

export const fetchHospitalCount = () => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/hospital-count`);

        const resultHospitalCountData = await result.json();

        console.log(resultHospitalCountData);
        dispatch({
            type: FETCH_HOSPITALS_COUNT,
            payload: resultHospitalCountData
        });
    }
}

export const fetchUserCount = () => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/user-count`);
       const resultUserCountData = await result.json();

        console.log(resultUserCountData);
        dispatch({
            type: FETCH_USERS_COUNT,
            payload: resultUserCountData
        });
    }
}

export const fetchPharmacyCount = () => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/pharmacy-count`);

        const resultPharmacyCountData = await result.json();

        console.log(resultPharmacyCountData);
        dispatch({
            type: FETCH_PHARMACY_COUNT,
            payload: resultPharmacyCountData
        });
    }
}

export const fetchMedicineBookingCount = () => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/medicine-count`);

        const resultMedicineCountData = await result.json();

        console.log(resultMedicineCountData);
        dispatch({
            type: FETCH_MEDICINE_BOOKING_COUNT,
            payload: resultMedicineCountData
        });
    }
}

export const fetchHomeServiceCount = () => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/service-count`);

        const resultHomeServiceCountData = await result.json();

        console.log(resultHomeServiceCountData);
        dispatch({
            type: FETCH_HOME_SERVICE_COUNT,
            payload: resultHomeServiceCountData
        });
    }
}

export const fetchOnlineAppointmentCount = () => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/online-appointment-count`);

        const resultOnlineAppointmentCountData = await result.json();

        console.log(resultOnlineAppointmentCountData);
        dispatch({
            type: FETCH_ONLINE_APPOINTMENT_COUNT,
            payload: resultOnlineAppointmentCountData
        });
    }
}

export const fetchPhysicalAppointmentCount = () => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/physical-appointment-count`);

        const resultPhysicalAppointmentCountData = await result.json();

        console.log(resultPhysicalAppointmentCountData);
        dispatch({
            type: FETCH_PHYSICAL_APPOINTMENT_COUNT,
            payload: resultPhysicalAppointmentCountData
        });
    }
}

export const fetchMissedAppointmentCount = () => {
    return async dispatch => {
        const result = await fetch(`${API}/get/admin/missed-count`)

        const Result = await result.json();

        console.log(Result);
        dispatch({
            type: FETCH_MISSED_APPOINTMENT_COUNT,
            payload: Result
        });
    }
}

export const fetchCompletedAppointmentCount = () => {
    return async dispatch => {
        const result = await fetch(`${API}/get/admin/completed-count`);

        const Result = await result.json();

        console.log(Result);
        dispatch({
            type: FETCH_COMPLETED_APPOINTMENT_COUNT,
            payload: Result
        });
    }
}

export const fetchCancelledAppointmentCount = () => {
    return async dispatch => {
        const result = await fetch(`${API}/get/admin/cancelled-count`);

        const Result = await result.json();

        console.log(Result);
        dispatch({
            type: FETCH_CANCELLED_APPOINTMENT_COUNT,
            payload: Result
        });
    }
}

export const fetchPendingAppointmentCount = () => {
    return async dispatch => {
        const result = await fetch(`${API}/get/admin/pending-count`);

        const Result = await result.json();

        console.log(Result);
        dispatch({
            type: FETCH_PENDING_APPOINTMENT_COUNT,
            payload: Result
        });
    }
}

// ************************************ MONTHLY COUNT API FUNCTIONS ***************************************************
export const fetchMonthlyDoctorCount = () => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/monthly-doctor-count`);

        const resultDoctorMonthlyCountData = await result.json();

        console.log(resultDoctorMonthlyCountData);
        dispatch({
            type: FETCH_DOCTORS_MONTHLY_COUNT,
            payload: resultDoctorMonthlyCountData
        });
    }
}

export const fetchMonthlyHospitalCount = () => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/monthly-hospital-count`);

        const resultHospitalMonthlyCountData = await result.json();

        console.log(resultHospitalMonthlyCountData);
        dispatch({
            type: FETCH_HOSPITALS_MONTHLY_COUNT,
            payload: resultHospitalMonthlyCountData
        });
    }
}

export const fetchMonthlyPharmacyCount = () => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/monthly-Pharmacy-count`);

        const resultPharmacyMonthlyCountData = await result.json();

        console.log(resultPharmacyMonthlyCountData);
        dispatch({
            type: FETCH_PHARMACIES_MONTHLY_COUNT,
            payload: resultPharmacyMonthlyCountData
        });
    }
}

export const fetchMonthlyUserCount = () => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/monthly-user-count`);

        const resultUserMonthlyCountData = await result.json();

        console.log(resultUserMonthlyCountData);
        dispatch({
            type: FETCH_USER_MONTHLY_COUNT,
            payload: resultUserMonthlyCountData
        });
    }
}

export const fetchMonthlyHomeServiceCount = () => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/monthly-service-count`);

        const resultServiceMonthlyCountData = await result.json();

        console.log(resultServiceMonthlyCountData);
        dispatch({
            type: FETCH_HOME_SERVICE_MONTHLY_COUNT,
            payload: resultServiceMonthlyCountData
        });
    }
}

export const fetchMonthlyMedicineBookingCount = () => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/monthly-medicine-count`);

        const Data = await result.json();

        console.log(Data);
        dispatch({
            type: FETCH_MEDICINE_BOOKING_MONTHLY_COUNT,
            payload: Data
        });
    }
}

// ******************************************** LIMIT API FUNCTIONS ************************************************

export const fetchLimitedUser = () => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/limited-user`)

        const resultLimitedUserData = await result.json();

        console.log(resultLimitedUserData);
        dispatch({
            type: FETCH_USER_LIMITED,
            payload: resultLimitedUserData
        });
    }
}

export const fetchLimitedAppointment = () => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/limited-appointment`);

        const resultLimitedAppointmentData = await result.json();

        console.log(resultLimitedAppointmentData);
        dispatch({
            type: FETCH_APPOINTMENT_LIMITED,
            payload: resultLimitedAppointmentData
        });
    }
}

export const fetchLimitedPharmacy = () => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/limited-pharmacy`);

        const resultLimitedPharmacyData = await result.json();

        console.log(resultLimitedPharmacyData);
        dispatch({
            type: FETCH_PHARMACY_LIMITED,
            payload: resultLimitedPharmacyData
        });
    }
}

// ******************************************** ALL DATA API FUNCTIONS *****************************************
export const fetchDoctors = () => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/all-doctor`);
        const resultDoctorData = await result.json();

        console.log(resultDoctorData);
        dispatch({
            type: FETCH_DOCTORS,
            payload: resultDoctorData
        });
    }
}

export const fetchDoctorsSchedule = () => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/all-doctor-schedule`);

        const resultDoctorScheduleData = await result.json();

        console.log(resultDoctorScheduleData);
        dispatch({
            type: FETCH_DOCTORS_SCHEDULE,
            payload: resultDoctorScheduleData
        });
    }
}

export const fetchHospitals = () => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/all-hospital`)

        const resultHospitalData = await result.json();

        console.log(resultHospitalData);
        dispatch({
            type: FETCH_HOSPITALS,
            payload: resultHospitalData
        });
    }
}

export const fetchPharmacies = () => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/all-pharmacy`)

        const resultPharmacyData = await result.json();

        console.log(resultPharmacyData);
        dispatch({
            type: FETCH_PHARMACY,
            payload: resultPharmacyData

        });
    }

}

export const fetchUsers = () => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`$API{}/get/admin/all-user`);
        const resultUserData = await result.json();

        console.log(resultUserData);
        dispatch({
            type: FETCH_USER,
            payload: resultUserData
        });
    }

}

export const fetchPanelUsers = () => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/all-panel-user`);

        const resultPanelUserData = await result.json();

        console.log(resultPanelUserData);
        dispatch({
            type: FETCH_PANEL_USER,
            payload: resultPanelUserData
        });
    }

}

export const fetchPhysicalAppointments = () => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/all-physical-appointment`);

        const resultPhysicalAppData = await result.json();

        console.log(resultPhysicalAppData);
        dispatch({
            type: FETCH_PHYSICAL_APPOINTMENT,
            payload: resultPhysicalAppData
        });
    }

}

export const fetchOnlineAppointments = () => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/all-online-appointment`);

        const resultOnlineAppData = await result.json();

        console.log(resultOnlineAppData);
        dispatch({
            type: FETCH_ONLINE_APPOINTMENT,
            payload: resultOnlineAppData
        });
    }

}

export const fetchSpecializations = () => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/all-specialization`);

        const resultSpecializationData = await result.json();

        console.log(resultSpecializationData);
        dispatch({
            type: FETCH_SPECIALIZATION,
            payload: resultSpecializationData
        });
    }

}

export const fetchMedicineBookings = () => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/all-medicine`)

        const resultMedicineBookingData = await result.json();

        console.log(resultMedicineBookingData);
        dispatch({
            type: FETCH_MEDICINE_BOOKING,
            payload: resultMedicineBookingData
        });
    }

}

export const fetchHomeServices = () => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/all-home-service`);

        const resultHomeServicesData = await result.json();

        console.log(resultHomeServicesData);
        dispatch({
            type: FETCH_HOME_SERVICE,
            payload: resultHomeServicesData
        });
    }

}

export const fetchHealthCards = () => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/all-healthcard`);

        const Result = await result.json();

        console.log(Result);
        dispatch({
            type: FETCH_HEALTHCARD,
            payload: Result
        });
    }

}

export const fetchRecentAddedDoctor = (doc) => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/recent-added-doctor/`+doc);

        const resultRecentAddedDoctor = await result.json();

        console.log(resultRecentAddedDoctor);
        dispatch({
            type: FETCH_RECENT_ADDED_DOCTOR,
            payload: resultRecentAddedDoctor
        });
    }

}

export const fetchParticularDoctor = (doc) => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/particular-doctor/`+doc);

        const resultParticularDoctor = await result.json();

        console.log(resultParticularDoctor);
        dispatch({
            type: FETCH_PARTICULAR_DOCTOR,
            payload: resultParticularDoctor
        });
    }

}

export const fetchSingleDoctorSchedule = (doc) => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/particular-doctor-schedule/`+doc);

        const resultParticularDoctorSchedule = await result.json();

        console.log(resultParticularDoctorSchedule);
        dispatch({
            type: FETCH_SINGLE_DOCTORS_SCHEDULE,
            payload: resultParticularDoctorSchedule
        });
    }

}

export const fetchSingleSchedule = (doc) => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/particular-schedule/`+doc);

        const Result = await result.json();

        console.log(Result);
        dispatch({
            type: FETCH_SINGLE_SCHEDULE,
            payload: Result
        });
    }

}

export const fetchParticularHospital = (doc) => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/particular-hospital/`+doc);

        const Result = await result.json();

        console.log(Result);
        dispatch({
            type: FETCH_PARTICULAR_HOSPITAL,
            payload: Result
        });
    }

}

export const fetchParticularPharmacy = (doc) => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/particular-pharmacy/`+doc);

        const Result = await result.json();

        console.log(Result);
        dispatch({
            type: FETCH_PARTICULAR_PHARMACY,
            payload: Result
        });
    }

}

export const fetchParticularPanelUser = (doc) => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/particular-panel-user/`+doc);

        const Result = await result.json();

        console.log(Result);
        dispatch({
            type: FETCH_PARTICULAR_PANEL_USER,
            payload: Result
        });
    }

}

export const fetchParticularHealthcard = (id) => {
    return async dispatch => {

        // logic to fetch houses from API   
        const result = await fetch(`${API}/get/admin/particular-healthcard/`+id);

        const Result = await result.json();

        console.log(Result);
        dispatch({
            type: FETCH_PARTICULAR_HEALTHCARD,
            payload: Result
        });
    }

}

// ******************************************** POST API FUNCTIONS ***************************************************

//POST DOCTOR DATA
export const postDoctors = (docFirstName,docLastName,uniqueId,docPmcNumber,docDegree,docExperience,docSpecialization,
    docGender,docImageUrl,docAvailability,userId,docPublishTime,docPublishDate) => {

    return async dispatch => {
        await axios.post(`${API}/post/admin/doctor`, {docFirstName, docLastName, uniqueId, docPmcNumber, docDegree, docSpecialization, 
            docExperience, docGender, docAvailability, userId, docImageUrl, docPublishTime, docPublishDate})
            .then(function (response) {
                console.log('ye chali: ',response);
                dispatch({
                    type: CREATE_DOCTORS,
                    payload: response,
                    id:response.data.insertId
                });
            })
            .catch(function (error) {
                console.log('ye rha error: ',error);
            });
    }
}

//POST HOSPITAL DATA
export const postHospitals = (hospName,hospContact,hospAddress,hospCity,hospCountry,hospLat,hospLng,hospHomeService,
    hospImageUrl,userId,hospPublishTime,hospPublishDate) => {

    return async dispatch => {
        await axios.post(`${API}/post/admin/hospital`, {
           hospName,hospAddress,hospContact,hospCity,hospCountry,hospLat,hospLng,hospHomeService,hospImageUrl,
            userId,hospPublishTime,hospPublishDate})
            .then(function (response) {
                console.log(response);
                // setIsLoading(false)
                dispatch({
                    type: CREATE_HOSPITALS,
                    payload: response
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

//POST PHARMACY DATA
export const postPharmacies = (pharmacyName,pharmacyContact,pharmacyArea,pharmacyCity,pharmacyCountry,
    pharmacyLat,pharmacyLng,pharmacyImageUrl,userId,pharmacyPublishTime,
    pharmacyPublishDate) => {

    return async dispatch => {
        await axios.post(`${API}/post/admin/pharmacy`, {pharmacyName,pharmacyContact,pharmacyArea,
        pharmacyCity,pharmacyCountry,pharmacyLat,pharmacyLng,pharmacyImageUrl,userId,
        pharmacyPublishTime,pharmacyPublishDate})
            .then(function (response) {
                console.log(response);
                // setIsLoading(false)
                dispatch({
                    type: CREATE_PHARMACY,
                    payload: response
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

//POST PANEL USER DATA
export const postPanelUsers = (userFirstName,userLastName,uniqueId,userDesignation,userEmail,userPassword,
    userCity,userCountry,userImageUrl,userIsLoggedIn,userHospital,userId,userPublishTime,userPublishDate) => {

    return async dispatch => {
        await axios.post(`${API}/post/admin/panel-user` ,{ userFirstName,userLastName,uniqueId,userDesignation,
        userEmail,userPassword,userCity,userCountry,userImageUrl,userIsLoggedIn,userHospital,userId,userPublishDate,
        userPublishTime})
            .then(function (response) {
                console.log(response);
                // setIsLoading(false)
                dispatch({
                    type: CREATE_PANEL_USER,
                    payload: response
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

//POST DOCTOR SCHEDULE DATA
export const postDoctorsSchedule = (docUid,hospUid,value,startTime,endTime,shift,counter,availability,
    fees,userId,docPublishTime,docPublishDate) => {

    return async dispatch => {
        await axios.post(`${API}/post/admin/doctor-schedule `, {
            docUid, hospUid, value, startTime, shift, endTime, counter,availability, 
            fees, userId,docPublishTime, docPublishDate})
            .then(function (response) {
                console.log(response);
                dispatch({
                    type: CREATE_DOCTORS_SCHEDULE,
                    payload: response
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

//POST Specialization DATA
export const postSpecializations = (specName,specMeaning,specDescription,imageUrl,PublishTime,PublishDate) => {

    return async dispatch => {
        await axios.post(`${API}/post/admin/specialization`, {specName,specMeaning,
        specDescription,imageUrl,PublishTime,PublishDate})
            .then(function (response) {
                console.log(response);
                dispatch({
                    type: CREATE_SPECIALIZATIONS,
                    payload: response
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

//POST SERVICE DATA
export const postServices = (serviceName,serviceHospital,PublishTime,PublishDate) => {

    return async dispatch => {
        await axios.post(`${API}/post/admin/service`, {serviceName,serviceHospital,PublishTime,PublishDate})
            .then(function (response) {
                console.log(response);
                dispatch({
                    type: CREATE_SERVICES,
                    payload: response
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

// ******************************************** UPDATE API FUNCSTIONS ***************************************************

// UPDATE DOCTOR DATA
export const updateDoctors = (id, editDocFirstName, editDocLastName, editDocDegree, editDocExperience, editDocGender,
    editDocPmcNumber, editDocSpecialization, editDocAvailabilityUid, editDocImageUrl, loginId,
     docPublishTime, docPublishDate) => {

    return async dispatch => {
        await axios.put(`${API}/put/admin/doctor/`+ id, {id, editDocFirstName, editDocLastName, editDocDegree, editDocExperience, editDocGender,
        editDocPmcNumber, editDocSpecialization, editDocAvailabilityUid, editDocImageUrl, loginId, docPublishTime, docPublishDate })
            .then(function (response) {
                console.log(response);
                // setIsLoading(false)
                dispatch({
                    type: CREATE_DOCTORS,
                    payload: response,
                    // id:response.data.insertId
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

// UPDATE DOCTOR AVAILABILITY
export const updateDoctorsAvailability = (id, editDocAvailabilityUid, userId, docPublishTime, docPublishDate) => {

    return async dispatch => {
        await axios.put(`${API}/put/admin/doctor-availability/`+ id, 
        {id, editDocAvailabilityUid, userId, docPublishTime, docPublishDate })
            .then(function (response) {
                // console.log(response)
                console.log(response);
                dispatch({
                    type: CREATE_DOCTORS_AVAILABILITY,
                    payload: response,
                    // id:response.data.insertId
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

// UPDATE HOSPITAL DATA
export const updateHospitals = (id,editHospName, editHospContact, editHospAddress, editHospCity, editHospCountry,
    editHospHomeService, editHospLatitude, editHospLongitude, editHospImageUrl, userId, PublishTime, 
    PublishDate) => {

    return async dispatch => {
        await axios.put(`${API}/put/admin/hospital/`+ id ,
        {id,editHospName, editHospContact, editHospAddress, editHospCity, editHospCountry,
            editHospHomeService, editHospLatitude, editHospLongitude, editHospImageUrl, userId, PublishTime, 
            PublishDate})
            .then(function (response) {
                console.log(response);
                // setIsLoading(false)
                dispatch({
                    type: CREATE_HOSPITALS,
                    payload: response,
                    // id:response.data.insertId
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

// UPDATE PHARMACY DATA
export const updatePharmacies = (id,editPharmacyName, editPharmacyContact, editPharmacyArea, 
    editPharmacyLatitude, editPharmacyLongitude, editPharmacyCity, editPharmacyCountry, 
    editPharmacyImageUrl, userId, PublishTime, PublishDate) => {

    return async dispatch => {
        await axios.put(`${API}/put/admin/pharmacy/`+ id ,
        {id,editPharmacyName, editPharmacyContact, editPharmacyArea, 
            editPharmacyLatitude, editPharmacyLongitude, editPharmacyCity, editPharmacyCountry, 
            editPharmacyImageUrl, userId, PublishTime, PublishDate})
            .then(function (response) {
                console.log(response);
                // setIsLoading(false)
                dispatch({
                    type: CREATE_PHARMACY,
                    payload: response,
                    // id:response.data.insertId
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

// UPDATE PANEL USER DATA
export const updatePanelUsers = (id,editPanelUserFirstName, editPanelUserLastName, editPanelUserEmail, 
    editPanelUserPassword, editPanelUserCity, editPanelUserCountry, editPanelUserDesignationId, editPanelUserHospitalId, 
    editPanelUserImageUrl, userId, PublishTime, PublishDate) => {

    return async dispatch => {
        await axios.put(`${API}/put/admin/panel-user/`+ id, 
        {id,editPanelUserFirstName, editPanelUserLastName, editPanelUserEmail, editPanelUserPassword, editPanelUserCity, 
            editPanelUserCountry, editPanelUserDesignationId, editPanelUserHospitalId, editPanelUserImageUrl, 
            userId, PublishTime, PublishDate})
            .then(function (response) {
                console.log(response);
                // setIsLoading(false)
                dispatch({
                    type: CREATE_PANEL_USER,
                    payload: response,
                    // id:response.data.insertId
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

//POST DOCTOR SCHEDULE DATA
export const updateDoctorsSchedule = (id,docUid,hospUid,value,startTime,endTime,shift,counter,availability,
    fees,userId,docPublishTime,docPublishDate) => {

    return async dispatch => {
        await axios.put(`${API}/put/admin/doctor-schedule/` +id, 
        {id,docUid, hospUid, value, startTime, shift, endTime, counter,availability, 
            fees, userId,docPublishTime, docPublishDate})
            .then(function (response) {
                console.log(response);
                dispatch({
                    type: CREATE_DOCTORS_SCHEDULE,
                    payload: response
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

//POST DOCTOR SCHEDULE DATA
export const updateHealthcard = (id,cardNumber,userName,userContact,userAddress,userCity,fees,expiry,issue,
    status,activity,hospital,docPublishTime,docPublishDate) => {

    return async dispatch => {
        await axios.put(`${API}/put/admin/healthcard-data/` +id, 
        {id,cardNumber,userName,userContact,userAddress,userCity,fees,expiry,issue,status,activity,hospital,docPublishTime,docPublishDate})
            .then(function (response) {
                console.log(response);
                dispatch({
                    type: CREATE_HEALTHCARD,
                    payload: response
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export const updateHealthcardActivity = (id,activity) => {

    return async dispatch => {
        await axios.put(`${API}/put/admin/healthcard-activity/` +id, 
        {id,activity})
            .then(function (response) {
                console.log(response);
                dispatch({
                    type: CREATE_HEALTHCARD_ACTIVITY,
                    payload: response
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

// ******************************************** DELETE API FUNCSTIONS ***************************************************

// DELETE SINGLE DOCTOR
export const deleteSingleDoctor = (uid) => {

    return async dispatch => {
        await axios.delete(`${API}/delete/admin/doctor/` +uid)
            .then(function (response) {
                console.log(response);
                dispatch({
                    type: DELETE_SINGLE_DOCTOR,
                    payload: response
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

// DELETE SINGLE HOSPITAL
export const deleteSingleHospital = (uid) => {

    return async dispatch => {
        await axios.delete(`${API}/delete/admin/hospital/` + uid)
            .then(function (response) {
                console.log(response);
                dispatch({
                    type: DELETE_SINGLE_HOSPITAL,
                    payload: response
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

// DELETE SINGLE PHARMACY
export const deleteSinglePharmacy = (uid) => {

    return async dispatch => {
        await axios.delete(`${API}/delete/admin/pharmacy/` + uid)
            .then(function (response) {
                console.log(response);
                dispatch({
                    type: DELETE_SINGLE_PHARMACY,
                    payload: response
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

// DELETE SINGLE Doctor Schedule
export const deleteSingleDoctorSchedule = (uid) => {

    return async dispatch => {
        await axios.delete(`${API}/delete/admin/doctor-schedule/` +uid)
            .then(function (response) {
                console.log(response);
                dispatch({
                    type: DELETE_SINGLE_DOCTOR_SCHEDULE,
                    payload: response
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

// DELETE SINGLE PANEL_USER
export const deleteSinglePanelUser = (uid) => {

    return async dispatch => {
        await axios.delete(`${API}/delete/admin/panel-user/` +uid)
            .then(function (response) {
                console.log(response);
                dispatch({
                    type: DELETE_SINGLE_PANEL_USER,
                    payload: response
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

// DELETE HEalthcard
export const deleteSingleHealthcard = (uid) => {

    return async dispatch => {
        await axios.delete(`${API}/delete/admin/healthcard/` +uid)
            .then(function (response) {
                console.log(response);
                dispatch({
                    type: DELETE_SINGLE_HEALTHCARD,
                    payload: response
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}