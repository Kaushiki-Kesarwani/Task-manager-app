const jwt = require('jsonwebtoken');

const protect = (req,res,next) => {
    let token;

    //check if token exist in header
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
            token = req.headers.authorization.split(" ")[1];

            //verify token
            const decoded = jwt.verify(token,process.env.JWT_SECRET);

            req.user = decoded.id;

            next();
        }catch(error){
            res.status(401).json({msg:"Not authorized token failed"});
        }
    }

    if(!token){
        return res.status(401).json({
            msg:"Not authorized no token"
        });
    }
};

module.exports = protect;
