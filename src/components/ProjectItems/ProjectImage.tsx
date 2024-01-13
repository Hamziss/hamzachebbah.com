/* eslint-disable react/jsx-no-useless-fragment */
import Image from "next/image"
import * as uuid from "uuid"
import classes from "./style.module.css"
import { IitemImages, IprojectItem } from "./types"

const ProjectImage = ({ item }: { item: IprojectItem }) => (
	<>
		<div
			style={{
				transform:
					item.side === "normal"
						? "translate(-20px, 0)"
						: "transform: translate(17px, 0)",
			}}
			className={classes.ImageContainer}
		>
			<a target="_blank" rel="noreferrer" href={item.link}>
				<Image
					src={item.image}
					placeholder={item.image.src.includes("gif") ? "empty" : "blur"}
					layout="fill"
					objectFit="cover"
					className={classes.projectImage}
				/>
			</a>
			{item.itemImages?.map((image: IitemImages) => (
				<div key={uuid.v4()} className={classes[`${image.imageTitle}`]}>
					<Image
						placeholder={item.image.src.includes("gif") ? "empty" : "blur"}
						src={image.url}
						layout="fill"
						objectFit="cover"
					/>
				</div>
			))}
		</div>
	</>
)

export default ProjectImage
