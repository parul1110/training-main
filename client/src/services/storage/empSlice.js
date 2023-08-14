
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  userInfo: [],
  listEmp: [
    {"id": 1, "First Name": "a", "Last Name": "b", "Email": "ab@gmail.com", "Phone no": "253674", "Domain": "Testing"},
    {"id": 2, "First Name": "c", "Last Name": "d", "Email": "cd@gmail.com", "Phone no": "266774", "Domain": "Development"}
  ],
  formData: []
}
let id = 3;
export const empSlice = createSlice({
  name: "app",
  initialState,
  reducers:{
        addUser: (state, action) => {
            state.userInfo = (action.payload);
        },
        addEmployee: (state, action) => {
          action.payload.id = id++;
          state.listEmp.push(action.payload);
        },
        removeEmp: (state, action) => {
          state.listEmp = state.listEmp.filter((l)=>l.Email !== action.payload);
        },
        setForm: (state, action) => {
          //state.formData = state.listEmp.filter((l)=>l.Email === action.payload);
          state.formData = action.payload;
        },
        emptyForm: (state, action) => {
          state.formData = [];
        }, 
        updateEmployee: (state, action) => {
          state.listEmp = state.listEmp.map((l)=>{
            if(action.payload.id===l.id){
              return action.payload;
            }else{
              return l;
            }
          })
        }
      }
})

export const { addUser, addEmployee, removeEmp, setForm, emptyForm, updateEmployee } = empSlice.actions;
export default empSlice.reducer;