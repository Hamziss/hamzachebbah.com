import { StaticImageData } from "next/image"

export interface ItechStack {
	name: string
	color: string
	docLink?: string
}
export interface IitemImages {
	url: StaticImageData
	imageTitle: string
}
export interface IprojectItem {
	side: string
	name: string
	description: string
	techStack: ItechStack[]
	image: StaticImageData
	link?: string
	linkRepo?: string
	itemImages?: IitemImages[]
	bg?: StaticImageData
}
