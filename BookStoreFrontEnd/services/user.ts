/*************************************************************************
* Purpose : to call api methods from apiCalls class
*
* @file : user.js
* @author : Shilpa K <shilpa07udupi@gmail.com>
* @version : 1.0
* @since : 14/02/2021
*
**************************************************************************/

import apiCalls from "../services/apiCalls";
class User {
    // user registration
    register=(userInput: any) => {
        const data = {
            input: userInput,
            url: process.env.BASE_URL+"/registration"
        }
        return apiCalls.post(data)
    }

    // user login
    login=(userInput: any) => {
        const data = {
            input: userInput,
            url: process.env.BASE_URL+"/login"
        }
        return apiCalls.post(data)
    }
}

export default new User();