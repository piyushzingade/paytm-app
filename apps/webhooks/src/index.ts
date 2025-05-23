import express from "express";
import db from "@repo/db/client";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(express.json())

app.post("/hdfcWebhook", async (req, res) => {

    const paymentInformation: {
        token: string;
        userId: string;
        amount: string
    } = {
        token: req.body.token,
        userId: req.body.user_id,
        amount: req.body.amount
    };

    try {
        await db.$transaction([
            db.userBalance.updateMany({
                where: {
                    userId: Number(paymentInformation.userId)
                },
                data: {
                    amount: {
                        increment: Number(paymentInformation.amount)
                    }
                }
            }), 
            db.onRampTransaction.updateMany({
                where: {
                    token: paymentInformation.token
                }, 
                data: {
                    status: "Success",
                }
            })
            
        ]);

        res.json({
            message: "Captured"
        })
    } catch(e) {
        console.error(e);
        res.status(411).json({
            message: "Error while processing webhook"
        })
    }

})
app.get("/" , (req ,res) => {
    res.send("Server is running")
})

app.listen(3003);