import { queryOptions } from "@tanstack/react-query";
import { $getGamesListFn } from "@/server/functions/get-games-list-fn.ts";
import { GameListFilters } from "@/server/types.ts";

export const getGamesListQueryOptions = (filters?: GameListFilters) => {
	return queryOptions({
		queryKey: ["games-list", filters],
		queryFn: () => $getGamesListFn({ data: filters }),
	});
};
