import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home.jsx"
import Login from "./pages/auth/Login.jsx"
import { PAGE_ROUTES } from "./utils/contants.js"
import AddEmployee from "./pages/employee/AddEmployee.jsx"
import EmployeeList from "./pages/employee/EmployeeList.jsx"
import { Provider } from 'react-redux';
import { store } from "./services/storage/store.js"

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <Routes>
        <Route path={PAGE_ROUTES.HOME} element={ <Home/> } />
        <Route path={PAGE_ROUTES.LOGIN} element={ <Login/> } />
        <Route path={PAGE_ROUTES.ADD} element={ <AddEmployee/> } />
        <Route path={PAGE_ROUTES.LIST} element={ <EmployeeList/> } />
      </Routes>
    </div>
    </Provider>
  )
}

export default App;