import { useSearch } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getGamesListQueryOptions } from "@/queries/get-games-list-query-options.ts";
import { gamesListFiltersSchema } from "@/server/types.ts";

export function useGamesList() {
	const searchParams = useSearch({ from: "/" });

	const parsed = gamesListFiltersSchema.safeParse(searchParams);

	if (!parsed.success) {
		return useSuspenseQuery(getGamesListQueryOptions());
	}

	return useSuspenseQuery(getGamesListQueryOptions(parsed.data));
}
