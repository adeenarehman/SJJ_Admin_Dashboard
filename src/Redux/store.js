import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './Reducers/reducer';

const rootReducer = combineReducers({
  UserLogin: reducer,
  loginEmail: reducer,
  loginFirstName: reducer,
  loginLastName: reducer,
  loginDesignation: reducer,
  loginId: reducer,
  loginIsLoggedIn: reducer,
  // 
  doctor: reducer,
  doctor_schedule: reducer,
  hospital: reducer,
  pharmacy: reducer,
  user: reducer,
  paneluser: reducer,
  onlineappointment: reducer,
  physicalappointment: reducer,
  specialization: reducer,
  medicinebooking: reducer,
  homeservice: reducer,
  healthcard: reducer,
  recent_added_doctor: reducer,
  particular_doctor: reducer,
  single_doctor_schedule: reducer,
  particular_hospital: reducer,
  particular_pharmacy: reducer,
  particular_panel_user: reducer,
  single_schedule: reducer,
  particular_healthcard: reducer,
  // 
  doctor_count: reducer,
  hospital_count: reducer,
  user_count: reducer,
  pharmacy_count: reducer,
  home_service_count: reducer,
  medicine_booking_count: reducer,
  online_appointment_count: reducer,
  physical_appointment_count: reducer,
  missed_count: reducer,
  completed_count: reducer,
  cancelled_count: reducer,
  pending_count: reducer,
  // 
  monthly_doctor: reducer,
  monthly_hospital: reducer,
  monthly_pharmacy: reducer,
  monthly_user: reducer,
  monthly_medicine_booking: reducer,
  monthly_home_service: reducer,
  // 
  user_limited: reducer,
  appointment_limited: reducer,
  pharmacy_limited: reducer,
  // 
  post_doctor: reducer,
  doc_insert_id: reducer,
  post_hospital: reducer,
  post_pharmacy: reducer,
  post_panel_user: reducer,
  post_doctor_schedule: reducer,
  post_specialization: reducer,
  post_service: reducer,
  post_doctor_availability: reducer,
  healthcardData: reducer,
  healthcardActivity: reducer,
  // 
  delete_single_doctor: reducer,
  delete_single_hospital: reducer,
  delete_single_pharmacy: reducer,
  delete_single_doctor_schedule: reducer,
  delete_single_panel_user: reducer,
  delete_single_healthcard: reducer,
});

// const middleware = composeWithDevTools(applyMiddleware(thunk));
// const store = createStore(rootReducer, middleware);
// export default store;


// convert object to string and store in localStorage
function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

// create our store from our rootReducers and use loadFromLocalStorage
// to overwrite any values that we already have saved
const middleware = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, loadFromLocalStorage(), middleware);

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;