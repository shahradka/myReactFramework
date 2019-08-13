import Axios from 'axios';
import {RestUrl} from './Url';

export class RestDataSource
{
    GetData = (dataType, params) => this.SendRequest("get", RestUrl[dataType], params);
    StoreData = (dataType, data) => this.SendRequest("post", RestUrl[dataType], {}, data)
    SendRequest = (method, url, params, data) => Axios.request({ method, url, params, data});
}
