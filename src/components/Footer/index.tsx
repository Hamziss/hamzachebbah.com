import Image from "next/image"
import github from "public/images/contact/github.svg"
import linkedin from "public/images/contact/linkedin.svg"
import classes from "./style.module.css"

const Footer = () => (
	<footer className={classes.footer}>
		<div className={classes.socialContainer}>
			<a
				target="_blank"
				href="https://www.linkedin.com/"
				rel="noreferrer"
			>
				<Image src={linkedin} width="30" height="30" />
			</a>
			<a target="_blank" href="https://github.com/Hamziss" rel="noreferrer">
				<Image src={github} width="30" height="30" />
			</a>
		</div>
		<p>&copy; {new Date().getFullYear()} | Chebbah Hamza</p>
	</footer>
)

export default Footer
