import { API_ROUTES } from '../../utils/contants';
import { AxiosBase } from './index';

export default class ExampleService extends AxiosBase {

  addData = async (body) => {
    try {
      const response = await this.requests.post(`${API_ROUTES.EXAMPLE.ADD_DATA}`, body);
      return response;
    } catch (err) {
      throw err
    }
  }

  getData = async (params)=> {
    try {
      const response = await this.requests.get(this.serializeParams(API_ROUTES.EXAMPLE.GET_DATA,params));
      return response;
    } catch (err) {
      throw err
    }
  }

  delData = async (params)=> {
    try {
      const id = params.toString();
      const response = await this.requests.delete(`${API_ROUTES.EXAMPLE.GET_EMP}` + id);
      return response;
    } catch (err) {
      throw err
    }
  }

  getEmp = async(params)=>{
    try {
      const id = params.toString();
      const response = await this.requests.get(this.serializeParams(API_ROUTES.EXAMPLE.GET_EMP + id, params));
      return response;
    } catch (err) {
      throw err
    }
  }

  updateEmp = async(id, params)=>{
    try {
      const response = await this.requests.put(`${API_ROUTES.EXAMPLE.GET_EMP}` + id, params);
      return response;
    } catch (err) {
      throw err
    }
  }
}