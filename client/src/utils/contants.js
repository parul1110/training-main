const PAGE_ROUTES = {
  HOME : '/',
  LOGIN: '/login',
  ADD: '/addemployee',
  LIST: '/list'
}


const API_ROUTES = {
  BASE_URL : process.env.REACT_APP_BACKEND_API_URL,
  EMPLOYEE: {
    GET_EMP: '/employees',
    UPD_EMP: '/employees/',
  },
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout'
  },
  EXAMPLE: {
    GET_DATA : '/employees',
    ADD_DATA : '/employees', 

  }

}

const CONFIG = {
  TIMEOUT : 30000
}


const RESOURCE = {
  CLEAR_TEXT: 'ARE YOU SURE?',
  CONFIRM_DIALOG: 'Confirm Dialog',
  SUBMIT_TEXT: 'ARE YOU SURE?',
  CANCEL: 'CANCEL',
  CONFIRM: 'CONFIRM'

}

export { PAGE_ROUTES, RESOURCE, CONFIG, API_ROUTES }