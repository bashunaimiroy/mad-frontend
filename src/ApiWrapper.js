import superagent from 'superagent';
let apiHost = process.env.REACT_APP_APIHOST || process.env.APIHOST

class Api {

getBands = (arr)=>{
    console.log("requesting 12 bands from",apiHost)
return superagent.get(`${apiHost}/api/v1/bands`)
.query({bandIdArray:arr})
}

getGenreIDs = (genre)=>{
    console.log("sending a IDs request to",apiHost)
    return superagent.get(`${apiHost}/api/v1/genreIDs`).query({genre})
}

}

export default new Api();

