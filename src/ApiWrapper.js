import superagent from 'superagent';
let apiHost = process.env.REACT_APP_APIHOST || process.env.APIHOST

class Api {

    getBands = (arr) => {
        console.log("requesting 12 bands from", apiHost)
        return superagent.get(`${apiHost}/api/v1/bands`)
            .query({ bandIdArray: arr })
    }

    fetchBandIDs = (genre, searchterm) => {
        //we use an empty string for genre on the front-end to represent all genres being shown
        if (genre === "") {
            genre = "all"
        }
        console.log("sending a IDs request to", apiHost)
        return superagent.get(`${apiHost}/api/v1/genreIDs`).query({ genre, searchterm })
    }
    getSingleBand=(band_id)=>{
        console.log("sending a request for band data with ID",band_id)
        return superagent.get(`${apiHost}/api/v1/bandData`).query({band_id})
    }

    submitBand = (bandObject)=>{
        console.log("sending submission of band data, name:",bandObject.band_name)
        return superagent.post(`${apiHost}/api/v1/submit`).send(bandObject)
    }
}

export default new Api();

