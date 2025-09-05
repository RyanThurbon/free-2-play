import { createServerFn } from "@tanstack/react-start";
import { env } from "@/env.ts";
import { betterFetch } from "@/lib/better-fetch.ts";
import { GamesList } from "@/server/types.ts";

const ENDPOINT = env.FREE_TO_GAME_API_ENDPOINT;

export const $getGamesListFn = createServerFn({ method: "GET" }).handler(
	async () => {
		const { data: gamesList, error } = await betterFetch<GamesList[]>(
			`${ENDPOINT}/games`,
		);

		if (error) {
			console.error(error);
			throw new Error(error.message);
		}

		return gamesList;
	},
);
