import { API_ROUTES } from '../../utils/contants';
import { AxiosBase } from './index';

export default class AuthService extends AxiosBase {

  login = async (body) => {
    try {
      const response = await this.requests.post(`${API_ROUTES.AUTH.LOGIN}`, body);
      return response;
    } catch (err) {
      return err
    }
  }

  logout = async()=>{
    try {
      const response = await this.requests.post(`${API_ROUTES.AUTH.LOGOUT}`);
      return response;
    } catch (err) {
      throw err
    }
  }
}