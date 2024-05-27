const jwt = require("jsonwebtoken");

const verifyToken = (request, response, next) => {
    const authHeader = request.headers.token;
    if ( authHeader )
    {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_KEY, (error, user) => {
            if ( error )
            {
                response.status(403).json("Token is not valid!");
            }
            else
            {
                request.user = user;
                next();
                console.log("Successful");
            }
        })
    }
    else
    {
        return response.status(401).json("You are not authenticated");
    }
}


const verifyTokenAndAuthorization = (request, response, next) => {
     verifyToken(request, response, () => {
        if ( request.user.id === request.params.id || request.user.isAdmin )
        {
            next();
            console.log("Successful");
        }
        else
        {
            response.status(403).json("You are not alowed to do that!");
        }
     })
}

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not alowed to do that!");
      }
    });
  };


module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin };