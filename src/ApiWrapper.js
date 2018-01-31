import superagent from 'superagent';
let apiHost = process.env.REACT_APP_APIHOST || process.env.APIHOST
console.log("apiwrapper says process env node_env is ",process.env.NODE_ENV)
class Api {

getBands = (arr)=>{
    console.log("sending a request to",apiHost)
return superagent.get(`${apiHost}/api/v1/bands`)
.query({bandIdArray:arr})
}

getGenreIDs = (genre)=>{
    return superagent.get(`${apiHost}/api/v1/genreIDs`).query({genre})
}

}

export default new Api();

