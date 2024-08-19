import axios from "axios";


const spaceGetData = () => {
    return axios.get(`${process.env.REACT_APP_LOCAL_HOST}/assets/json/officespace.json`)
}

export default spaceGetData