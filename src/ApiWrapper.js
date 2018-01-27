import superagent from 'superagent';
import { apiHost } from './config/config.js';

class Api {

getBands = (arr)=>{
    console.log("sending a request to",apiHost)
return superagent.get(`${apiHost}/api/v1/bands`)
.query({bandIdArray:arr})
}



}

export default new Api();

