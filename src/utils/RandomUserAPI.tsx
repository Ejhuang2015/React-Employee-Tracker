import axios from "axios";
const BASEURL: string = "https://randomuser.me/api/?results=25";

const getRandomUser = {
    getRandomUser: function() {
        return axios.get(BASEURL);
    }
  };

export default getRandomUser;