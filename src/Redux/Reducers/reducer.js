import {
    AUTH_LOGIN,
    // 
    FETCH_DOCTORS, FETCH_DOCTORS_SCHEDULE, FETCH_HOSPITALS, FETCH_PHARMACY, FETCH_USER, FETCH_PANEL_USER, FETCH_PHYSICAL_APPOINTMENT,
    FETCH_ONLINE_APPOINTMENT, FETCH_SPECIALIZATION, FETCH_MEDICINE_BOOKING, FETCH_HOME_SERVICE, FETCH_PARTICULAR_DOCTOR,
    FETCH_SINGLE_DOCTORS_SCHEDULE, FETCH_PARTICULAR_HOSPITAL, FETCH_PARTICULAR_PHARMACY, FETCH_PARTICULAR_PANEL_USER,
    FETCH_SINGLE_SCHEDULE, FETCH_HEALTHCARD, FETCH_PARTICULAR_HEALTHCARD,
    // Fetch Count 
    FETCH_DOCTORS_COUNT, FETCH_HOSPITALS_COUNT, FETCH_USERS_COUNT, FETCH_PHARMACY_COUNT, FETCH_HOME_SERVICE_COUNT,
    FETCH_MEDICINE_BOOKING_COUNT, FETCH_ONLINE_APPOINTMENT_COUNT, FETCH_PHYSICAL_APPOINTMENT_COUNT,
    FETCH_MISSED_APPOINTMENT_COUNT, FETCH_COMPLETED_APPOINTMENT_COUNT, FETCH_CANCELLED_APPOINTMENT_COUNT,
    FETCH_PENDING_APPOINTMENT_COUNT,
    // Fetch Montlhy
    FETCH_DOCTORS_MONTHLY_COUNT, FETCH_HOSPITALS_MONTHLY_COUNT, FETCH_PHARMACIES_MONTHLY_COUNT, FETCH_USER_MONTHLY_COUNT,
    FETCH_HOME_SERVICE_MONTHLY_COUNT, FETCH_MEDICINE_BOOKING_MONTHLY_COUNT,
    // Fetch Limited
    FETCH_USER_LIMITED, FETCH_APPOINTMENT_LIMITED, FETCH_PHARMACY_LIMITED, FETCH_RECENT_ADDED_DOCTOR,
    // Create All
    CREATE_DOCTORS, CREATE_HOSPITALS, CREATE_PHARMACY, CREATE_PANEL_USER, CREATE_DOCTORS_SCHEDULE,
    CREATE_SPECIALIZATIONS, CREATE_SERVICES, CREATE_DOCTORS_AVAILABILITY, CREATE_HEALTHCARD,CREATE_HEALTHCARD_ACTIVITY,
    // Delete Single
    DELETE_SINGLE_DOCTOR, DELETE_SINGLE_HOSPITAL, DELETE_SINGLE_PHARMACY, DELETE_SINGLE_DOCTOR_SCHEDULE,
    DELETE_SINGLE_PANEL_USER, DELETE_SINGLE_HEALTHCARD,
} from '../Actions/action';

const initialState = {
    hospital: [], doctor: [], doctor_schedule: [],
    pharmacy: [], user: [],
    paneluser: [], onlineappointment: [],
    physicalappointment: [], specialization: [],
    medicinebooking: [], homeservice: [],
    recent_added_doctor: [], particular_doctor: [],
    single_doctor_schedule: [], particular_hospital: [],
    particular_pharmacy: [], particular_panel_user: [],
    single_schedule: [], healthcard: [], particular_healthcard: [],
    // ---------------------
    doctor_count: [], hospital_count: [],
    user_count: [], pharmacy_count: [],
    home_service_count: [], medicine_booking_count: [],
    online_appointment_count: [], physical_appointment_count: [],
    missed_count: [], completed_count: [], cancelled_count: [], pending_count: [],
    // -----------------------
    monthly_doctor: [], monthly_hospital: [],
    monthly_pharmacy: [], monthly_user: [],
    monthly_medicine_booking: [], monthly_home_service: [],
    // -----------------------
    user_limited: [], appointment_limited: [], pharmacy_limited: [],
    // ----------------------
    UserLogin:[], loginEmail: '', loginIsLoggedIn: '', loginFirstName: '', loginLastName: '', loginDesignation: '', loginId: '', 
    // -----------------------
    post_doctor: [], doc_insert_id: '', 
    post_hospital: [], post_pharmacy: [],
    post_panel_user: [], post_doctor_schedule: [],
    post_specialization: [], post_service: [], post_doctor_availability: [],
    healthcardData: [], healthcardActivity: [],
    // ---------------------
    delete_single_doctor: [], delete_single_doctor_schedule: [],
    delete_single_hospital: [], delete_single_panel_user: [],
    delete_single_pharmacy: [], delete_single_healthcard: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_LOGIN:
            return {
                ...state,
                UserLogin: action.payload,
                loginEmail: action.Email,
                loginFirstName: action.FName,
                loginLastName: action.LName,
                loginDesignation: action.Desig,
                loginId: action.Id,
                loginIsLoggedIn: action.token
            }
        case FETCH_DOCTORS:
            return {
                ...state,
                doctor: action.payload
            }
        case FETCH_DOCTORS_SCHEDULE:
            return {
                ...state,
                doctor_schedule: action.payload
            }
        case FETCH_HOSPITALS:
            return {
                ...state,
                hospital: action.payload
            }
        case FETCH_PHARMACY:
            return {
                ...state,
                pharmacy: action.payload
            }
        case FETCH_USER:
            return {
                ...state,
                user: action.payload
            }
        case FETCH_PANEL_USER:
            return {
                ...state,
                paneluser: action.payload
            }
        case FETCH_PHYSICAL_APPOINTMENT:
            return {
                ...state,
                physicalappointment: action.payload
            }
        case FETCH_ONLINE_APPOINTMENT:
            return {
                ...state,
                onlineappointment: action.payload
            }
        case FETCH_SPECIALIZATION:
            return {
                ...state,
                specialization: action.payload
            }
        case FETCH_MEDICINE_BOOKING:
            return {
                ...state,
                medicinebooking: action.payload
            }
        case FETCH_HOME_SERVICE:
            return {
                ...state,
                homeservice: action.payload
            }
            case FETCH_HEALTHCARD:
            return {
                ...state,
                healthcard: action.payload
            }
        case FETCH_RECENT_ADDED_DOCTOR:
            return {
                ...state,
                recent_added_doctor: action.payload
            }
        case FETCH_PARTICULAR_DOCTOR:
            return {
                ...state,
                particular_doctor: action.payload
            }
        case FETCH_SINGLE_DOCTORS_SCHEDULE:
            return {
                ...state,
                single_doctor_schedule: action.payload
            }
        case FETCH_SINGLE_SCHEDULE:
            return {
                ...state,
                single_schedule: action.payload
            }
        case FETCH_PARTICULAR_HOSPITAL:
            return {
                ...state,
                particular_hospital: action.payload
            }
        case FETCH_PARTICULAR_PHARMACY:
            return {
                ...state,
                particular_pharmacy: action.payload
            }
        case FETCH_PARTICULAR_PANEL_USER:
            return {
                ...state,
                particular_panel_user: action.payload
            }
            case FETCH_PARTICULAR_HEALTHCARD:
            return {
                ...state,
                particular_healthcard: action.payload
            }

        // -----------------------------------------------
        case FETCH_DOCTORS_COUNT:
            return {
                ...state,
                doctor_count: action.payload
            }
        case FETCH_HOSPITALS_COUNT:
            return {
                ...state,
                hospital_count: action.payload
            }
        case FETCH_USERS_COUNT:
            return {
                ...state,
                user_count: action.payload
            }
        case FETCH_PHARMACY_COUNT:
            return {
                ...state,
                pharmacy_count: action.payload
            }
        case FETCH_HOME_SERVICE_COUNT:
            return {
                ...state,
                home_service_count: action.payload
            }
        case FETCH_MEDICINE_BOOKING_COUNT:
            return {
                ...state,
                medicine_booking_count: action.payload
            }
        case FETCH_ONLINE_APPOINTMENT_COUNT:
            return {
                ...state,
                online_appointment_count: action.payload
            }
        case FETCH_PHYSICAL_APPOINTMENT_COUNT:
            return {
                ...state,
                physical_appointment_count: action.payload
            }
        case FETCH_MISSED_APPOINTMENT_COUNT:
            return {
                ...state,
                missed_count: action.payload
            }
        case FETCH_COMPLETED_APPOINTMENT_COUNT:
            return {
                ...state,
                completed_count: action.payload
            }
        case FETCH_CANCELLED_APPOINTMENT_COUNT:
            return {
                ...state,
                cancelled_count: action.payload
            }
        case FETCH_PENDING_APPOINTMENT_COUNT:
            return {
                ...state,
                pending_count: action.payload
            }
        // ------------------------------------------------------------
        case FETCH_DOCTORS_MONTHLY_COUNT:
            return {
                ...state,
                monthly_doctor: action.payload
            }
        case FETCH_HOSPITALS_MONTHLY_COUNT:
            return {
                ...state,
                monthly_hospital: action.payload
            }
        case FETCH_PHARMACIES_MONTHLY_COUNT:
            return {
                ...state,
                monthly_pharmacy: action.payload
            }
        case FETCH_USER_MONTHLY_COUNT:
            return {
                ...state,
                monthly_user: action.payload
            }
        case FETCH_HOME_SERVICE_MONTHLY_COUNT:
            return {
                ...state,
                monthly_home_service: action.payload
            }
        case FETCH_MEDICINE_BOOKING_MONTHLY_COUNT:
            return {
                ...state,
                monthly_medicine_booking: action.payload
            }
        // --------------------------------------------------------------
        case FETCH_APPOINTMENT_LIMITED:
            return {
                ...state,
                appointment_limited: action.payload
            }
        case FETCH_USER_LIMITED:
            return {
                ...state,
                user_limited: action.payload
            }
        case FETCH_PHARMACY_LIMITED:
            return {
                ...state,
                pharmacy_limited: action.payload
            }
        // -------------------------------------------------------------
        case CREATE_DOCTORS:
            return {
                ...state,
                post_doctor: action.payload,
                doc_insert_id: action.id
            }
        case CREATE_DOCTORS_SCHEDULE:
            return {
                ...state,
                post_doctor_schedule: action.payload
            }
        case CREATE_PANEL_USER:
            return {
                ...state,
                post_panel_user: action.payload
            }
        case CREATE_PHARMACY:
            return {
                ...state,
                post_pharmcay: action.payload
            }
        case CREATE_HOSPITALS:
            return {
                ...state,
                post_hospital: action.payload
            }
        case CREATE_SPECIALIZATIONS:
            return {
                ...state,
                post_specialization: action.payload
            }
        case CREATE_SERVICES:
            return {
                ...state,
                post_service: action.payload
            }
        case CREATE_DOCTORS_AVAILABILITY:
            return {
                ...state,
                post_doctor_availability: action.payload
            }
        case CREATE_HEALTHCARD:
            return {
                ...state,
                healthcardData: action.payload
            }
        case CREATE_HEALTHCARD_ACTIVITY:
            return {
                ...state,
                healthcardActivity: action.payload
            }
        // -----------------------------------------------------------
        case DELETE_SINGLE_DOCTOR:
            return {
                ...state,
                delete_single_doctor: action.payload
            }
        case DELETE_SINGLE_HOSPITAL:
            return {
                ...state,
                delete_single_hospital: action.payload
            }
        case DELETE_SINGLE_PHARMACY:
            return {
                ...state,
                delete_single_pharmacy: action.payload
            }
        case DELETE_SINGLE_DOCTOR_SCHEDULE:
            return {
                ...state,
                delete_single_doctor_schedule: action.payload
            }
        case DELETE_SINGLE_PANEL_USER:
            return {
                ...state,
                delete_single_panel_user: action.payload
            }
        case DELETE_SINGLE_HEALTHCARD:
                return {
                    ...state,
                    delete_single_healthcard: action.payload
            }
    }
    return state;
}
