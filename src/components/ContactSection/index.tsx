import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import MuiAlert, { AlertProps } from "@mui/material/Alert"
import Button from "@mui/material/Button"
import Snackbar from "@mui/material/Snackbar"
import dynamic from "next/dynamic"
import Image from "next/image"
import email from "public/images/contact/Email.png"
import { forwardRef, SyntheticEvent, useEffect, useState } from "react"

import { CONTACT_PARAGRAPH } from "./constants"
import classes from "./style.module.css"

const Confetti = dynamic(() => import("react-canvas-confetti"), { ssr: false })

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
	<MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
))

let velocity = 0
const ContactSection = () => {
	const [open, setOpen] = useState(false)
	const [fireConfetti, setFireConfetti] = useState(false)

	useEffect(() => {
		window.innerWidth > 768 ? (velocity = 35) : (velocity = 20)
	}, [])

	const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
		if (reason === "clickaway") {
			return
		}
		setOpen(false)
	}
	const CopyToClipboard = () => {
		navigator.clipboard.writeText("hamzachebbah9999@gmail.com")
		setFireConfetti(true)
		setOpen(true)
	}
	return (
		<section className={classes.wrapper}>
			<div className={classes.titleContainer}>
				<Image src={email} width="55" height="50" />
				<h2>Let&apos;s Build Stuff!</h2>
			</div>
			<div className={classes.textContainer}>
				<p>{CONTACT_PARAGRAPH}</p>
			</div>
			<div className={classes.confettiContainer}>
				<Confetti
					zIndex={1}
					width="100%"
					height="50%"
					startVelocity={velocity}
					style={{ maxHeight: "700px" }}
					spread={120}
					onDecay={() => setFireConfetti(false)}
					fire={fireConfetti}
				/>
			</div>
			<Button
				variant="outlined"
				className={classes.button}
				onClick={() => CopyToClipboard()}
				startIcon={<ContentCopyIcon />}
			>
				Copy My Email
			</Button>
			<Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
				<Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
					Congrats! You have copied my email.
				</Alert>
			</Snackbar>
		</section>
	)
}

export default ContactSection
