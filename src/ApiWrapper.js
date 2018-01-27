import superagent from 'superagent';


class Api {

getBands = ()=>{
return superagent.get("207.107.68.234/api/bands")
}



}

export default new Api();