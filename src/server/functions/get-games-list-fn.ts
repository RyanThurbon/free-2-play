import { createServerFn } from "@tanstack/react-start";
import { env } from "@/env.ts";
import { betterFetch } from "@/lib/better-fetch.ts";
import { GameListing } from "@/server/types.ts";

const ENDPOINT = env.FREE_TO_GAME_API_ENDPOINT;

//const gamesListFiltersSchema = z.object({});

export const $getGamesListFn = createServerFn({ method: "GET" }).handler(
	async () => {
		const { data: gamesList, error } = await betterFetch<GameListing[]>(
			`${ENDPOINT}/games`,
		);

		if (error) {
			console.error(error);
			throw new Error(error.message);
		}

		return gamesList;
	},
);
