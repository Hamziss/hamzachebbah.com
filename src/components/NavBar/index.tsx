/* eslint-disable jsx-a11y/anchor-is-valid */
import cx from "classnames"
import Image from "next/image"
import Link from "next/link"
import Logo from "public/images/favicon.svg"
import { useEffect, useState } from "react"
import classes from "./style.module.css"

const NavBar = () => {
	const [isActive, setIsActive] = useState(false)
	const [show, setShow] = useState(false)
	const [lastScrollY, setLastScrollY] = useState(0)

	const handleToggle = () => {
		setIsActive(!isActive)
	}

	const controlNavbar = () => {
		if (typeof window !== "undefined") {
			if (window.scrollY > lastScrollY) {
				setShow(true)
			} else {
				setShow(false)
			}

			setLastScrollY(window.scrollY)
		}
	}

	// eslint-disable-next-line consistent-return
	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", controlNavbar)

			return () => {
				window.removeEventListener("scroll", controlNavbar)
			}
		}
		console.log("fdsfsdq")
	}, [lastScrollY])

	return (
		<div
			className={`${classes["nav-container"]} ${show && classes.hidden} ${
				isActive ? classes.active : ""
			}`}
		>
			<nav className={classes.btn}>
				<ul className={classes["mobile-nav"]}>
					<li>
						<button
							className={classes["menu-icon-container"]}
							onClick={handleToggle}
							type="submit"
						>
							<div className={classes["menu-icon"]}>
								<span className={classes["line-1"]} />
								<span className={classes["line-2"]} />
							</div>
						</button>
					</li>
					<li>
						<Link href="/" className={classes["link-logo"]}>
							<a>
								<Image src={Logo} alt="logo" />
							</a>
						</Link>
					</li>
				</ul>

				<ul className={classes["desktop-nav"]}>
					<li>
						<Link href="/">
							<a className={classes["link-logo"]}>
								<Image src={Logo} alt="logo" />
							</a>
						</Link>
					</li>
					<li>
						<Link href="/projects">
							<a
								data-menu-name="Projects"
								className={cx(
									classes.scroll,
									classes.hovereffect,
									classes.first
								)}
							>
								Projects
							</a>
						</Link>
					</li>
					<li>
						<Link href="/about">
							<a
								data-menu-name="About"
								className={cx(classes.hovereffect, classes.scroll)}
							>
								About
							</a>
						</Link>
					</li>

					<li>
						<Link href="/#skills">
							<a
								data-menu-name="Skills"
								className={cx(classes.hovereffect, classes.scroll)}
							>
								Skills
							</a>
						</Link>
					</li>
					<li>
						<Link href="/">
							<a
								data-menu-name="Contact"
								className={cx(classes.hovereffect, classes.scroll)}
							>
								Contact
							</a>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default NavBar
