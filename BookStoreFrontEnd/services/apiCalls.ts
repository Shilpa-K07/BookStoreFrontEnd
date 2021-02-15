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
    post=(data: any) => {
        return axios.post(data.url, data.input);
    }
}
export default new APiCall();