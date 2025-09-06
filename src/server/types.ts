import { z } from "zod";

const gameListingSchema = z.object({
	id: z.number(),
	title: z.string(),
	thumbnail: z.url(),
	short_description: z.string(),
	game_url: z.url(),
	genre: z.string(),
	platform: z.enum(["Web Browser", "PC (Windows)"]),
	publisher: z.string(),
	developer: z.string(),
	release_date: z.string(),
	freetogame_profile_url: z.url(),
});

export type GameListing = z.infer<typeof gameListingSchema>;
