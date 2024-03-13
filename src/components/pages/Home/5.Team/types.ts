import { IconDefinition} from "@fortawesome/free-solid-svg-icons"

export type MemberType = {
	img			: string,
	name		: string,
	surname : string,
	post		: string,
	index		: number,
	socials?: SocialType[],
}

export type SocialType = {
	logo : IconDefinition,
	href : string,
	index : number
}