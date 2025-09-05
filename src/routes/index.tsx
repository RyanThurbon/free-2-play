import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getGamesListQueryOptions } from "@/queries/get-games-list-query-options.ts";
import { Suspense } from "react";
import { GameListDisplayCard } from "@/components/shared/game-list-display-card.tsx";
import { GameListGrid } from "@/components/shared/game-list-grid.tsx";
import { SectionHeading } from "@/components/shared/section-heading.tsx";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	const { data: gamesList } = useSuspenseQuery(getGamesListQueryOptions());

	return (
		<section className="games-list">
			<div className="py-10 flex flex-col gap-y-6">
				<SectionHeading
					heading="The top free games for PC and browser of 2025!"
					description={`Show ${gamesList.length} free games`}
				/>
				<Suspense>
					<GameListGrid>
						{gamesList.map((game) => (
							<GameListDisplayCard
								gameListing={game}
								key={game.id}
							/>
						))}
					</GameListGrid>
				</Suspense>
			</div>
		</section>
	);
}
