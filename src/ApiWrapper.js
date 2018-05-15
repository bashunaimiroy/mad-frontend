import superagent from 'superagent';
import firebase from 'firebase'
let apiHost = process.env.REACT_APP_APIHOST || process.env.APIHOST



let config = {
    apiKey: "AIzaSyBvGAykdiQ6PdC0AfwdX6dy83Bd61hIPCw",
    authDomain: "montreal-artist-database.firebaseapp.com",
    databaseURL: "https://montreal-artist-database.firebaseio.com",
    projectId: "montreal-artist-database",
    storageBucket: "montreal-artist-database.appspot.com",
    messagingSenderId: "747927973432"
  };

  firebase.initializeApp(config);

  const storage = firebase.storage();
  const storageRef = storage.ref('');

class Api {
    subscribeToNewsletter = (email)=>{
        return superagent.post(`${apiHost}/api/v1/newsletter-subscribe`).send({email:email})
    }
    uploadImage = (image,id)=>{
        return storageRef
        .child(`images/temp/${id}_temp.jpg`)
        .put(image)
    }

    getBands = (arr) => {
        return superagent.get(`${apiHost}/api/v1/bands`)
            .query({ bandIdArray: arr })
    }

    fetchBandIDs = (genre, searchterm) => {
        //we use an empty string for genre on the front-end to represent all genres being shown
        if (genre === "") {
            genre = "all"
        }
        return superagent.get(`${apiHost}/api/v1/genreIDs`).query({ genre, searchterm })
    }
    getSingleBand=(band_id)=>{
        return superagent.get(`${apiHost}/api/v1/bandData`).query({band_id})
    }

    submitBand = (bandObject)=>{
        return superagent.post(`${apiHost}/api/v1/submit`).send(bandObject)
    }
}

export default new Api();

