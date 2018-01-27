import superagent from 'superagent';
import { apiHost } from './config/config.js';

class Api {

getBands = (arr)=>{
    console.log("sending a request to",apiHost)
return superagent.get(`${apiHost}/api/v1/bands`)
.query({bandIdArray:arr})
}

getNumberOfBands = ()=>{
    return superagent.get(`${apiHost}/api/v1/numberOfBands`)
}

}

export default new Api();

