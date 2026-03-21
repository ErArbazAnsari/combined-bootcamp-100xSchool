import express from "express";
import { authCheck } from "../middlewares/auth.middlewares.js";
import { organizations } from "../memory/memory.js";

const router = express.Router();

// create new organization
router.post("/org", authCheck, (req, res) => {
    try {
        const { username } = req.headers;
        const { title, description } = req.body;
        if (!username || !title || !description) {
            return res.json({
                msg: "fill all the information first!",
            });
        }
        // create org now
        const id = crypto.randomUUID();
        organizations.push({
            id,
            title,
            description,
            admin: id,
            members: [id],
        });
        return res.json({
            msg: "org created now",
        });
    } catch (err) {
        console.error(err);
        return res.json({
            msg: "error creating organization",
        });
    }
});

// get all organizations list
router.get("/org", authCheck, (_, res) => {
    try {
        // get all orgs
        return res.json({
            organizations,
        });
    } catch (err) {
        console.error(err);
        return res.json({
            msg: "unable to get organizations",
        });
    }
});
router.post("/add-member", authCheck, (req, res) => {});
router.get("/org-members", authCheck, (req, res) => {});
router.delete("/org-member", authCheck, (req, res) => {});
router.delete("/org", authCheck, (req, res) => {});

export default router;
