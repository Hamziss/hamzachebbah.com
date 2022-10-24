/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from "next/image"
import Link from "next/link"
import ExternalLink from "public/images/Projects/externalLink.svg"
import githubIcon from "public/images/Projects/githubIcon.svg"
import * as uuid from "uuid"
import { Projects } from "./constants"
import ProjectImage from "./ProjectImage"
import classes from "./style.module.css"
import TechStackList from "./TechStackList"
import { IprojectItem } from "./types"

const ProjectItems = () => (
	<div className={classes.wrapper}>
		{Projects.map((item: IprojectItem) => (
			<div
				className={classes.projectContainer}
				key={uuid.v4()}
				style={{
					flexDirection: item.side === "normal" ? "row" : "row-reverse",
				}}
			>
				<div
					className={classes.textContainer}
					style={{
						textAlign: item.side === "normal" ? "left" : "right",
						transform:
							item.side === "normal"
								? "translate(20px, 2vw)"
								: "translate(-17px, 2vw)",
					}}
				>
					<div
						className={classes.headerContainer}
						style={{
							flexDirection: item.side === "normal" ? "row" : "row-reverse",
						}}
					>
						<h3>{item.name}</h3>
						<div className={classes.links}>
							<Link href={item.link!} passHref>
								<a target="_blank" className={classes.link}>
									<Image src={ExternalLink} layout="fill" />
								</a>
							</Link>
							<Link href={item.linkRepo!} passHref>
								<a target="_blank" className={classes.linkRepo}>
									<Image src={githubIcon} layout="fill" objectFit="contain" />
								</a>
							</Link>
						</div>
					</div>
					<div className={classes.pContainer}>
						<p>{item.description}</p>
					</div>
					<TechStackList item={item} />
				</div>
				<ProjectImage item={item} />
				<div
					className={
						item.side === "inverse" ? classes.bgleft : classes.bgContainer
					}
				>
					<Image placeholder="blur" src={item.bg!} layout="fill" />
				</div>
			</div>
		))}
	</div>
)

export default ProjectItems
