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
const BASE_URL = process.env.BASE_URL;
class User {
    // user registration
    register=(userInput: any) => {
        const data = {
            input: userInput,
            url: BASE_URL+"/registration"
        }
        return apiCalls.post(data)
    }

    // user login
    login=(userInput: any) => {
        const data = {
            input: userInput,
            url: BASE_URL+"/userLogin"
        }
        return apiCalls.post(data)
    }

    // get books
    getBooks=() => {
        const data = {
            url: BASE_URL+"/book",
            headers: { 'Content-Type': 'application/json', 'token': sessionStorage.token } 
        }
        return apiCalls.get(data)
    }
}

export default new User();