import express from 'express';
import jwt from "jsonwebtoken";

export const checkAuth = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        const tokenString = token.split(' ')[1];
        jwt.verify(tokenString, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                res.status(403).send("Forbidden access");
                return;
            } else {
                req.user = user;
            }
        });
        next();
    } else {
        res.status(401).send("Unauthorized access");
    }
}