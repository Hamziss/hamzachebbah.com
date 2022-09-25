/* eslint-disable import/extensions */
import { useEffect } from "react"
import * as uuid from "uuid"
import { optionsCanvas, sphereItem } from "./constants"

import classes from "./style.module.css"

interface ISphereItem {
	title: string
	href: string
}

const SphereCanvas = () => {
	useEffect(() => {
		const fetchSphere = async () => {
			const TagCanvas = await import("tag-canvas")
			TagCanvas.default.Start("Canvas", "QCSTW", optionsCanvas)
		}
		fetchSphere()
	}, [])
	return (
		<>
			<div className={classes.canvaswrapper}>
				<canvas style={{ width: "100%" }} id="Canvas" />
			</div>
			<div id="QCSTW" style={{ display: "none" }}>
				<ul>
					{sphereItem.map((item: ISphereItem) => (
						<li key={uuid.v4()}>
							<a href={item.href} target="_blank" rel="noreferrer">
								{item.title}
							</a>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}

export default SphereCanvas
