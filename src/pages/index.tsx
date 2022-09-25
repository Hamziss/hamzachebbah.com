/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/extensions */

import type { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import hamza from "public/images/about/HamzaMain.png"
import lowerSquare from "public/images/botSquare.png"
import upperSquare from "public/images/upSquare.png"
import AnimatedHead from "src/components/AnimatedHead"
import ContactSection from "src/components/ContactSection"
import ProjectItems from "src/components/ProjectItems"
import { CODING_PASSION } from "src/util/constants/home"
import SphereCanvas from "../components/SphereCanvas"

import classes from "../styles/Home.module.css"

const Home: NextPage = () => (
	<>
		<AnimatedHead />
		<h1 className={classes.hero}>
			Turning your garbage
			<br />
			paper into a paper
			<br />
			plane
		</h1>
		<button type="button" className={`${classes.customBtn} ${classes.heroBtn}`}>
			<Link href="/about">About Me</Link>
		</button>
		<section className={classes.showcase}>
			<div className={classes.videoContainer}>
				<video src="/videos/bg-vid.mp4" autoPlay muted loop />
			</div>
		</section>
		<div className={classes.wrapper}>
			<section id="sectionabout" className={classes.aboutcontainer}>
				<div className={classes.bgtext}>about</div>
				<div className={classes.about}>
					<h1 className={classes["title-aboutme"]}>About Me</h1>
				</div>
				<div className={classes.abouttextcontainer}>
					<div className={classes.abouttext}>
						<p>
							Hi! I’m Hamza and I create things that live in the web&nbsp;.
							&nbsp;My main focus is to make&nbsp;
							<span className={classes.yellowtext}>digital experiences</span>
							&nbsp;that are very quick to load, intuitive with nice graphics —
							things i care about when i code are: code architecture, code
							documentation,unit testing and scalability of the service.
						</p>
						<br />
						<p>{CODING_PASSION}</p>
						<br />

						<br />
					</div>
					<Link href="/about">
						{/* <img
							src="assets/images/undraw_coding_re_iv62.svg"
							style={{ borderRadius: "5px", width: "100%" }}
							alt="id"
						/> */}
						<a className={classes.ImageContainer}>
							<Image
								src={hamza}
								layout="fill"
								className={classes.hamza}
								objectFit="cover"
								placeholder="blur"
							/>
							<div className={classes.bottomSquare}>
								<Image src={lowerSquare} />
							</div>
							<div className={classes.upperSquare}>
								<Image src={upperSquare} />
							</div>
						</a>
					</Link>
				</div>
			</section>
			<section id="skills" className={classes.skillscontainer}>
				<div className={classes.bgtext}>skills</div>
				<div className={classes.skills}>
					<h1 className={classes["title-skills"]}>skills</h1>
				</div>
				<div className={classes.skillstextcontainer}>
					<div className={classes.skilltext}>
						<p>
							As a full-stack developper im great at (&gt; 1 years of
							experience) :{" "}
							<span className={classes.yellowtext}>
								{" "}
								<a
									href="https://fr.reactjs.org/"
									target="_blank"
									rel="noreferrer"
								>
									ReactJS
								</a>
							</span>
							,&nbsp;
							<span className={classes.yellowtext}>
								<a
									href="https://expressjs.com/"
									target="_blank"
									rel="noreferrer"
								>
									ExpressJS
								</a>
							</span>{" "}
							,&nbsp;
							<span className={classes.yellowtext}>
								<a href="https://nextjs.org/" target="_blank" rel="noreferrer">
									NextJS
								</a>
							</span>{" "}
							,&nbsp;
							<span className={classes.yellowtext}>
								<a
									href="https://www.mongodb.com/"
									target="_blank"
									rel="noreferrer"
								>
									MongoDB
								</a>
							</span>
							&nbsp; and{" "}
							<span className={classes.yellowtext}>
								<a
									href="https://www.typescriptlang.org/"
									target="_blank"
									rel="noreferrer"
								>
									Typescript
								</a>
							</span>
							.
						</p>
						<br />
						<p>
							I also use some technologies for side projects / personnal
							time:&nbsp;
							<span className={classes.yellowtext}>
								<a href="https://nestjs.com/" target="_blank" rel="noreferrer">
									NestJS
								</a>
							</span>
							,&nbsp;
							<span className={classes.yellowtext}>
								<a href="https://trpc.io/" target="_blank" rel="noreferrer">
									tRPC
								</a>
							</span>
							,&nbsp;
							<span className={classes.yellowtext}>
								<a
									href="https://www.docker.com/"
									target="_blank"
									rel="noreferrer"
								>
									Docker
								</a>
							</span>
							,&nbsp;
							<span className={classes.yellowtext}>
								<a href="https://redis.io/" target="_blank" rel="noreferrer">
									Redis
								</a>
							</span>
							,&nbsp;{" "}
							<span className={classes.yellowtext}>
								<a href="https://socket.io/" target="_blank" rel="noreferrer">
									Socket.io
								</a>
							</span>
							,&nbsp;
							<span className={classes.yellowtext}>
								<a
									href="https://www.prisma.io/"
									target="_blank"
									rel="noreferrer"
								>
									Prisma
								</a>
							</span>
							.
						</p>
						<br />
					</div>
					<SphereCanvas />
				</div>
			</section>
			<section id="sectionprojects" className={classes.projectscontainer}>
				<div className={classes.bgtext}>projects</div>
				<div className={classes.projects}>
					<h1 className={classes["title-projects"]}>projects</h1>
				</div>
				<ProjectItems />
			</section>
			<ContactSection />
		</div>

		<Script
			src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=61717fd08d472714903446f3"
			type="text/javascript"
			integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
			crossOrigin="anonymous"
		/>
		<Script
			src="https://uploads-ssl.webflow.com/61717fd08d472714903446f3/js/webflow.2672f2286.js"
			type="text/javascript"
		/>
	</>
)

export default Home
