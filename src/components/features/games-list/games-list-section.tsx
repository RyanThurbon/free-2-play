import { GameListDisplayCard } from "@/components/shared/game-list-display-card.tsx";
import { GameListGrid } from "@/components/shared/game-list-grid.tsx";
import { SectionDescription } from "@/components/shared/section-description.tsx";
import { useGamesList } from "@/hooks/use-games-list.ts";
import { ErrorFallback } from "@/components/shared/fallbacks/error-fallback.tsx";

export function GamesListSection() {
	const { data: gamesList, isError, refetch } = useGamesList();

	if (isError) {
		return <ErrorFallback refetch={refetch()} />;
	}

	return gamesList.length > 0 ? (
		<div className="flex flex-col gap-y-4">
			<SectionDescription className="text-sm">
				Showing {gamesList.length} games
			</SectionDescription>
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
