import { NextPage } from "next"
import Image from "next/image"
import docker from "public/images/techs/docker.png"
import express from "public/images/techs/express.png"
import nestjs from "public/images/techs/nestjs.png"
import nextjs from "public/images/techs/nextjs.png"
import react from "public/images/techs/react.png"
import tailwind from "public/images/techs/tailwind.png"
import trpc from "public/images/techs/trpc.png"
import ts from "public/images/techs/ts.png"
import { Parallax } from "react-parallax"
import { Cursor, Typewriter } from "react-simple-typewriter"
import ContactSection from "src/components/ContactSection"
import lowerSquare from "../../public/images/about/downSquare.png"
import Hamza from "../../public/images/about/Hamza.png"
import upperSquare from "../../public/images/about/upperSquare.png"
import classes from "../styles/About.module.css"

const words = [
	"who likes semicolon, honestly",
	"it's not a bug it's a feature",
	"A new JS framework just came out",
	"Things aren’t always #000000 and #FFFFFF",
	"tRPC is awesome",
]

const AboutPage: NextPage = () => (
	<div className={classes.wrapper}>
		<section className={classes.sectionHero}>
			<div className={classes.ImageContainer}>
				<Image
					src={Hamza}
					className={classes.hamza}
					layout="fill"
					objectFit="cover"
					placeholder="blur"
				/>
				<div className={classes.bottomSquare}>
					<Image src={lowerSquare} />
				</div>
				<div className={classes.upperSquare}>
					<Image src={upperSquare} />
				</div>
			</div>
			<div className={classes.textSide}>
				<span>About</span>
				<br />
				<strong>
					I am Hamza Chebbah.
					<br />A <span> Full Stack dev</span> that build <br /> stuff on the
					web.
				</strong>
				<div className={classes.typewriter}>
					<Typewriter typeSpeed={40} loop={0} words={words} />
					<Cursor cursorColor="#ffc107" />
				</div>
				<div className={classes.aboutme}>
					<h2>
						4 <span>Fun Facts</span> About Me
					</h2>
					<p>
						1- im a learning abuser, a term i invented that means always seeking
						of knowledge
					</p>
					<p>
						2- My favorite music to listen to while coding is a&nbsp;
						<a
							href="https://open.spotify.com/playlist/0qYcztUEKLdr4mbD2H7Sda"
							target="_blank"
							rel="noreferrer"
						>
							playlist
						</a>
						&nbsp;of minecraft music it gives me the sensation of building
						things
					</p>
					<p>
						3- I consider&nbsp;
						<a
							href="https://www.youtube.com/watch?v=Vmb1tqYqyII&t=8s&ab_channel=TheOffice"
							target="_blank"
							rel="noreferrer"
						>
							this
						</a>
						&nbsp;clip as the funniest scene ever.
					</p>
					<p>
						4- I spend my free time on building side projects , enjoying music,
						and playing games sometimes
					</p>
				</div>
			</div>
		</section>
		<section className={classes.greattech}>
			<h2>Tech im great at :</h2>
			<div className={classes.techContainer}>
				<a
					href="https://www.typescriptlang.org/"
					target="_blank"
					rel="noreferrer"
				>
					<Image width="100" height="100" src={ts} />
				</a>
				<a href="https://reactjs.org/" target="_blank" rel="noreferrer">
					<Image width="115" height="100" src={react} />
				</a>
				<a href="https://nextjs.org/" target="_blank" rel="noreferrer">
					<Image width="100" height="100" src={nextjs} />
				</a>
				<a href="https://expressjs.com/" target="_blank" rel="noreferrer">
					<Image width="100" height="100" src={express} />
				</a>
				<a href="https://www.docker.com/" target="_blank" rel="noreferrer">
					<Image width="110" height="100" src={docker} />
				</a>
			</div>
		</section>
		<section className={classes.goodtech}>
			<h2>Tech i like a lot:</h2>
			<div className={classes.techContainer}>
				<a href="https://nestjs.com/" target="_blank" rel="noreferrer">
					<Image width="100" height="100" src={nestjs} />
				</a>
				<a href="https://trpc.io/" target="_blank" rel="noreferrer">
					<Image width="85" height="100" src={trpc} />
				</a>
				<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
					<Image width="100" height="100" src={tailwind} />
				</a>
			</div>
		</section>
		<section className={classes.musicSection}>
			<Parallax
				bgImage="/images/about/albums.png"
				style={{ height: "590px", padding: "30px 0" }}
				strength={250}
				blur={{ min: 0.5, max: 1.5 }}
			>
				<div className={classes.insideParallax}>
					<span>PLAYLISTS</span>
					<h2>My Favorite Playlists</h2>
					<a
						href="https://open.spotify.com/user/hamzixxx/playlists"
						target="_blank"
						rel="noreferrer"
					>
						Discover Playlists
					</a>
				</div>
			</Parallax>
		</section>
		<ContactSection />
	</div>
)

export default AboutPage
