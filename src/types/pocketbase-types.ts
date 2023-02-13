/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Artists = "artists",
	Festivals = "festivals",
	Locations = "locations",
	Promoters = "promoters",
	Sets = "sets",
	Shows = "shows",
	Tracks = "tracks",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type ArtistsRecord = {
	name: string
	alias?: RecordIdString[]
	age?: IsoDateString
	profilepicture?: string
}

export type FestivalsRecord = {
	field?: string
}

export type LocationsRecord = {
	field?: string
}

export type PromotersRecord = {
	field?: string
}

export enum SetsMediaOptions {
	"video" = "video",
	"audio" = "audio",
}
export type SetsRecord = {
	views?: number
	likes?: number
	date?: IsoDateString
	artist: RecordIdString[]
	location?: RecordIdString
	show?: RecordIdString
	festival?: RecordIdString
	promoter?: RecordIdString
	media: SetsMediaOptions
	hasCrowd?: boolean
	isCurated?: boolean
	link: string
	thumbnail: string
}

export type ShowsRecord = {
	field?: string
}

export type TracksRecord = {
	tracklist?: RecordIdString
	tracknumber: number
	title: string
	artist: string
	duration: number
}

export type UsersRecord = {
	firstName?: string
	lastName?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type ArtistsResponse<Texpand = unknown> = ArtistsRecord & BaseSystemFields<Texpand>
export type FestivalsResponse = FestivalsRecord & BaseSystemFields
export type LocationsResponse = LocationsRecord & BaseSystemFields
export type PromotersResponse = PromotersRecord & BaseSystemFields
export type SetsResponse<Texpand = unknown> = SetsRecord & BaseSystemFields<Texpand>
export type ShowsResponse = ShowsRecord & BaseSystemFields
export type TracksResponse<Texpand = unknown> = TracksRecord & BaseSystemFields<Texpand>
export type UsersResponse = UsersRecord & AuthSystemFields

export type CollectionRecords = {
	artists: ArtistsRecord
	festivals: FestivalsRecord
	locations: LocationsRecord
	promoters: PromotersRecord
	sets: SetsRecord
	shows: ShowsRecord
	tracks: TracksRecord
	users: UsersRecord
}