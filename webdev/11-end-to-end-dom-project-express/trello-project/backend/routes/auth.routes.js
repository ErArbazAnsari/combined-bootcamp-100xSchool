import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import express from "express";
const router = express.Router();

import { users } from "../memory/memory.js";
import { authCheck } from "../middlewares/auth.middlewares.js";

// get all users list
router.get("/users", authCheck, (_, res) => {
    try {
        // get all users
        return res.json({
            users,
        });
    } catch (err) {
        console.error(err);
        return res.json({
            msg: "unable to get users list",
        });
    }
});

// create new user
router.post("/signup", async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.json({
                msg: "fill all the information first!",
            });
        }
        // check user is exist or not
        const user = users.find((u) => u.username == username);
        if (user) {
            return res.json({
                msg: "user already exist",
            });
        }
        // create token
        const token = jwt.sign({ username }, process.env.JWT_SIGNATURE);
        if (!token) {
            return res.json({
                msg: "something is working",
            });
        }
        const hashedPassword = await bcrypt.hash(password, 12);

        // registering user
        users.push({
            id: crypto.randomUUID(),
            username,
            password: hashedPassword,
        });

        return res.json({
            msg: "user successfully registered",
            token,
        });
    } catch (err) {
        console.error(err);
        return res.json({
            msg: "error registering user",
        });
    }
});

// login
router.post("/signin", async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.json({
                msg: "fill all the information first!",
            });
        }

        // validating user
        const user = users.find((u) => u.username == username);
        if (!user) {
            return res.json({
                msg: "user not found",
            });
        }

        // validating password
        const isValidPass = await bcrypt.compare(password, user.password);
        if (!isValidPass) {
            return res.json({
                msg: "credential is invalid",
            });
        }

        // create token
        const token = jwt.sign(
            { username: user.username },
            process.env.JWT_SIGNATURE,
        );
        if (!token) {
            return res.json({
                msg: "something is working",
            });
        }
        return res.json({
            msg: "successfully logged in",
            token,
        });
    } catch (err) {
        console.error(err);
        return res.json({
            msg: "error logging in",
        });
    }
});

export default router;
