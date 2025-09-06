import { createServerFn } from "@tanstack/react-start";
import { env } from "@/env.ts";
import { betterFetch } from "@/lib/better-fetch.ts";
import { GameListing, gamesListFiltersSchema } from "@/server/types.ts";

const BASE_ENDPOINT = env.FREE_TO_GAME_API_ENDPOINT;

export const $getGamesListFn = createServerFn({ method: "GET" })
	.validator(gamesListFiltersSchema)
	.handler(async ({ data }) => {
		const searchParams = new URLSearchParams();

		if (data?.category) {
			searchParams.append("category", data.category.toLowerCase());
		}

		if (data?.platform) {
			searchParams.append("platform", data.platform.toLowerCase());
		}

		if (data?.["sort-by"]) {
			searchParams.append("sort-by", data["sort-by"].toLowerCase());
		}

		const { data: gamesList, error } = await betterFetch<GameListing[]>(
			`${BASE_ENDPOINT}/games${searchParams.toString() ? `?${searchParams.toString()}` : ""}`,
		);

		if (error) {
			if (error.status === 404) {
				return [];
			}

			console.error(error);
			throw new Error(error.message);
		}

		return gamesList;
	});
