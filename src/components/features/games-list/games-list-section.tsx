import { GamesListFilter } from "@/components/features/games-list/games-list-filter.tsx";
import { ClearFiltersButton } from "@/components/shared/clear-filters-button";
import { ErrorFallback } from "@/components/shared/fallbacks/error-fallback.tsx";
import { GameListDisplayCard } from "@/components/shared/game-list-display-card.tsx";
import { GameListGrid } from "@/components/shared/game-list-grid.tsx";
import { useGamesList } from "@/hooks/use-games-list.ts";

export function GamesListSection() {
	const { data: gamesList, isError, refetch } = useGamesList();

	if (isError) {
		return <ErrorFallback refetch={refetch()} />;
	}

	return gamesList.length > 0 ? (
		<div className="flex flex-col gap-y-4">
			<div className="flex items-center justify-between">
				<GamesListFilter />
				<ClearFiltersButton />
			</div>

			<GameListGrid>
				{gamesList.map((game) => (
					<GameListDisplayCard gameListing={game} key={game.id} />
				))}
			</GameListGrid>
		</div>
	) : (
		<p>No results found</p>
	);
}
