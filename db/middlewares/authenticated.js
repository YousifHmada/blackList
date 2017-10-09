var {User} = require('./../../models/user');


function Authenticated (req, res, next){
	User.isAuthenticatedToken(req.body.authAccessToken)
		.then((user)=>{
			req.user = user;
			next();
		})
		.catch((e)=>{
			res.status(400).send(e);
		})
}

module.exports = {Authenticated};