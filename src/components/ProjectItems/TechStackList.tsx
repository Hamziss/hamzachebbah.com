import * as uuid from "uuid"
import classes from "./style.module.css"
import { IprojectItem, ItechStack } from "./types"

const TechStackList = ({ item }: { item: IprojectItem }) => (
	<ul
		className={classes.techContainer}
		style={{
			justifyContent: item.side === "normal" ? "flex-start" : "flex-end",
		}}
	>
		{item.techStack.map((tech: ItechStack) => (
			<li
				key={uuid.v4()}
				style={{ color: tech.color }}
				className={classes.techItem}
			>
				<a target="_blank" rel="noreferrer" href={tech.docLink}>
					{tech.name}
				</a>
			</li>
		))}
	</ul>
)
export default TechStackList
