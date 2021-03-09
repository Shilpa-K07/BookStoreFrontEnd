/*************************************************************************
* Purpose : to make apicalls
*
* @file : apiCalls.js
* @author : Shilpa K <shilpa07udupi@gmail.com>
* @version : 1.0
* @since : 14/02/2021
*
**************************************************************************/

const axios = require('axios');
class APiCall {
    // axios get method for saving data
    post=(data: any) => {
        return axios.post(data.url, data.input);
    }

    // axios get method for retrieving books
    get= (data: any) => {
        return axios.get(data.url,{ headers: data.headers});
    }
}
export default new APiCall();