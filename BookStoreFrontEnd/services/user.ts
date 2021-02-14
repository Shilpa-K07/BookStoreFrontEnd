/*************************************************************************
* Purpose : to call api methods from apiCalls class
*
* @file : user.js
* @author : Shilpa K <shilpa07udupi@gmail.com>
* @version : 1.0
* @since : 14/02/2021
*
**************************************************************************/

const apiCall = require('./apiCalls')
class User {
    register(userInput: any){
        const data = {
            input: userInput,
            url: process.env.VUE_APP_URL+"/registration"
        }
        return apiCall.post(data)
    }
}

export default new User();