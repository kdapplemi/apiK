var CryptoJS = require("crypto-js"); //replace thie with script tag in browser env
var jwt = require('jsonwebtoken');

module.exports = {
    login(res) {
        res.json('login');
    },

    autenticate(new_login) {
        console.log(new_login.username);
        console.log(new_login.password);
        return true;
    },

    authorize() {
        var rol = 'tesghh';
        return rol;
    },

    generateToken(auth) {
        console.log('generateToken');
        var header = {
            "alg": "HS256",
            "typ": "JWT"
        };
        var payload = {
            sub: "1234567890",
            name: "John Doe",
            "admin": true,
            "reviewer": true
        };

        var secret = 'mySecret';
        /*
        var embeddedHeader = this.stringify(header);
        var embeddedPayload = this.stringify(payload);
        console.log('header');
        console.log(header);
        console.log(embeddedHeader);
        var encodedHeader = this.encodeBase64(embeddedHeader);
        var encodedPayload = this.encodeBase64(embeddedPayload);
        var token = this.generateSignature(encodedHeader, encodedPayload, secret);
        console.log(encodedHeader + '.' + encodedPayload + '.' + token);
*/
        // var token = jwt.sign(payload, secret);

        var token = jwt.sign({
            data: payload
        }, secret, { expiresIn: 60 * 1 });
        //return encodedHeader + '.' + encodedPayload + '.' + token;
        //return token;
        return token;
    },

    encodeBase64(auth) {
        var wordArray = CryptoJS.enc.Utf8.parse(auth);
        var base64 = CryptoJS.enc.Base64.stringify(wordArray);
        return base64;
    },

    generateSignature(encodedHeader, encodedPayload, secret) {
        var signature = CryptoJS.HmacSHA256(encodedHeader + "." + encodedPayload, secret);
        var wordArray = CryptoJS.enc.Utf8.parse(signature);
        var token = CryptoJS.enc.Base64.stringify(wordArray);
        return token;
    },

    decodeBase64(base64) {
        var parsedWordArray = CryptoJS.enc.Base64.parse(base64);
        var parsedStr = parsedWordArray.toString(CryptoJS.enc.Utf8);
        return parsedStr;
    },

    verifyToken(token) {
        var secret = 'mySecret123';
        try {
            var decoded = jwt.verify(token, secret);
        } catch (err) {
            return 'Invalid token';
        }
    },

    decodeToken(token) {
        var decoded = jwt.decode(token);
        return decoded;
    }
}