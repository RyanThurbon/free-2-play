import { useSuspenseQuery } from "@tanstack/react-query";
import { getGamesListQueryOptions } from "@/queries/get-games-list-query-options.ts";
import { GameListDisplayCard } from "@/components/shared/game-list-display-card.tsx";
import { GameListGrid } from "@/components/shared/game-list-grid.tsx";
import { SectionDescription } from "@/components/shared/section-description.tsx";

export function GamesListSection() {
	const { data: gamesList } = useSuspenseQuery(getGamesListQueryOptions());

	return (
		<div className="flex flex-col gap-y-4">
			<SectionDescription>
				Showing {gamesList.length} games
			</SectionDescription>
			<GameListGrid>
				{gamesList.map((game) => (
					<GameListDisplayCard gameListing={game} key={game.id} />
				))}
			</GameListGrid>
		</div>
	);
}
