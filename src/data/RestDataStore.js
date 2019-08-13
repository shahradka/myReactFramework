import Axios from 'axios';
import {RestUrl} from './Url';

export class RestDataSource
{
    GetData = (dataType, params) => this.SendRequest("get", RestUrl[dataType], params);
    SendRequest = (method, url, params) => Axios.request({ method, url, params});;
}
