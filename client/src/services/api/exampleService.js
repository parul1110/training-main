import { API_ROUTES } from '../../utils/contants';
import { AxiosBase } from './index';

export default class ExampleService extends AxiosBase {

  addData = async (body) => {
    try {
      const response = await this.requests.post(`${API_ROUTES.EMPLOYEE.GET_EMP}`, body);
      return response;
    } catch (err) {
      throw err
    }
  }

  getData = async (params)=> {
    try {
      const response = await this.requests.get(this.serializeParams(API_ROUTES.EMPLOYEE.GET_EMP,params));
      return response;
    } catch (err) {
      throw err
    }
  }

  delData = async (params)=> {
    try {
      const id = params.toString();
      const response = await this.requests.delete(`${API_ROUTES.EMPLOYEE.UPD_EMP}` + id);
      return response;
    } catch (err) {
      throw err
    }
  }

  getEmp = async(params)=>{
    try {
      const id = params.toString();
      const response = await this.requests.get(this.serializeParams(API_ROUTES.EMPLOYEE.UPD_EMP + id, params));
      return response;
    } catch (err) {
      throw err
    }
  }

  updateEmp = async(id, params)=>{
    try {
      const response = await this.requests.put(`${API_ROUTES.EMPLOYEE.UPD_EMP}` + id, params);
      return response;
    } catch (err) {
      throw err
    }
  }
}