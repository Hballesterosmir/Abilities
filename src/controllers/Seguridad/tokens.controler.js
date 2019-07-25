var nJwt = require('njwt');
var secureRandom = require('secure-random');

import TokenModel from '../../models/Seguridad/TokenModel'
import UserAuthenticationModel from '../../models/Seguridad/UserAuthenticationModel'

var signingKey = 'Crypto_Key.*';

function PostTokenAip(req, res) {
    var TokenGenerado = GenerateToken(req);
    return res.status(200).send(TokenGenerado);
}

function PostTokenAipValidate(req, res) {
    console.log(new Date().getTime());
    try {
        var TokenHeader = req.headers.authorization;
        nJwt.verify(TokenHeader, signingKey, function (err, verifiedJwt) {
            if (err) {
                res.status(401).send({
                    'AppiStatus': 'Unauthorized'
                });
            } else {
                res.status(200).send({
                    'AppiStatus': 'Authorized'
                });
            }
        });
    } catch (error) {
        res.status(500).send({
            'AppiStatus': 'Internal Error'
        });
    }
}

function GenerateToken(ObjectEncrypt) {

    UserAuthenticationModel.UsertAuthentication = {
        UserName: ObjectEncrypt.body.UserName,
        Pasword: ObjectEncrypt.body.Pasword
    };

    var claims = {
        iss: ObjectEncrypt.headers.host,
        sub: UserAuthenticationModel.UsertAuthentication
    };

    var jwt = nJwt.create(claims, signingKey);
    console.log(new Date().getTime()+(60*1000));    
    jwt.setExpiration(new Date().getTime()+(60*1000));
    var token = jwt.compact();

    TokenModel.TokenModel = {
        ValueToken: token
    };
    return TokenModel.TokenModel;
}

export default {
    PostTokenAip,
    PostTokenAipValidate
}