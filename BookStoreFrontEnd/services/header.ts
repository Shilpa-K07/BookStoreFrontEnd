/* class Headers {
    'Content-Type': 'application/json',  
        'token': sessionStorage.token
} */
class Header {
    contentType: string;
    token: string;
    constructor(token: string ) {
      this.contentType = 'application/json';
      this.token = token;
    }
}
//let header = new Header(sessionStorage.token);
//export default header;