import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

export default function ContactHandler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const transporter = nodemailer.createTransport({
		port: 465,
		host: "smtp.gmail.com",
		auth: {
			user: process.env.EMAIL_SENDER,
			pass: process.env.EMAIL_PASSWORD,
		},
		secure: true,
	})
	const mailData = {
		from: process.env.EMAIL_SENDER,
		to: "hamzachebbah9999@gmail.com",
		subject: `Message From ${req.body.name}`,
		text: `${req.body.message} | Sent from: ${req.body.email}`,
		html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
	}
	transporter.sendMail(mailData, (err, info) => {
		if (err) console.log(err)
		else console.log(info)
	})
	res.status(200)
}
