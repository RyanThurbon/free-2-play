import { queryOptions } from "@tanstack/react-query";
import { $getGamesListFn } from "@/server/functions/get-games-list-fn.ts";

export const getGamesListQueryOptions = () => {
	return queryOptions({
		queryKey: ["games-list"],
		queryFn: () => $getGamesListFn(),
	});
};
