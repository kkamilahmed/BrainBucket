import jwt from "jsonwebtoken";
const JWTSECRET = "LMAOGETGOOD";
export const userMiddleware = (req, res, next) => {
    const token = req.cookies.BrainCoin;
    if (!token) {
        return res.status(401).json({ error: "No token provided" });
    }
    try {
        const decoded = jwt.verify(token, JWTSECRET);
        req.userid = decoded;
        next();
    }
    catch (err) {
        res.status(401).json({ error: "Invalid token", details: err });
    }
};
//# sourceMappingURL=middleware.js.map