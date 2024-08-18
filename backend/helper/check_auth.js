import jwt from "jsonwebtoken";

export const checkAuth = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        const tokenString = token.split(' ')[1];
        console.log(`Token: ${tokenString}`);
        jwt.verify(tokenString, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                console.error(`Error: ${err.message}`);
                res.status(403).send("Forbidden access");
                return;
            } else {
                console.log(`User: ${ JSON.stringify(user)}`);
                req.user = user;
                console.log("Inside checkAuth middleware");
                console.log(`User: ${ JSON.stringify(req.user)}`);
            }
        });

        next();
        return;
    } else {
        res.status(401).send("Unauthorized access");
        return;
    }
}