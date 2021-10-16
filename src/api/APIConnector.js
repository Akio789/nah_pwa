import axios from 'axios';

const baseURL = 'http://nahapi-env.eba-n2pvtskp.us-east-2.elasticbeanstalk.com/';

export default axios.create({ baseURL });
