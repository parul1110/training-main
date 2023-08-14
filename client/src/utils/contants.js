const PAGE_ROUTES = {
  HOME : '/',
  LOGIN: '/login',
  ADD: '/addemployee',
  LIST: '/list'
}


const API_ROUTES = {
  BASE_URL : process.env.REACT_APP_BACKEND_API_URL,
  EXAMPLE: {
    GET_DATA : '/employees',
    //GET_DATA : 'example/get',
    ADD_DATA : '/employees', 
    //ADD_DATA : 'example/post',
    DELETE_DATA : '/employees/', 
    GET_EMP: '/employees/',

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