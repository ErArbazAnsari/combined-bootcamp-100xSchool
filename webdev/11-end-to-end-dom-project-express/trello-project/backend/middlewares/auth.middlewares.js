import jwt from "jsonwebtoken";

export function authCheck(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.json({
                msg: "token required",
            });
        }
        const token = authHeader.split(" ")[1];

        // validating token
        const username = jwt.verify(token, process.env.JWT_SIGNATURE);
        if (!username) {
            return res.json({
                msg: "invalid token",
            });
        }
        req.headers.username = username;
        next();
    } catch (err) {
        console.error(err);
        return res.json({
            msg: "invalid token",
        });
    }
}
