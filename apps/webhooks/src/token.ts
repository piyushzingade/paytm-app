
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
export const getToken = async (req: Request , res : Response) => {

    const secret = process.env.HDFC_SECRET_KEY;
    if(!secret) {
        return res.status(500).json({
            message: "Secret not found"
        })
    }
    const token = jwt.sign({userId : "hdfc"} , secret, { 
        "expiresIn"  :"1h"
    });
    
    return token;

}   