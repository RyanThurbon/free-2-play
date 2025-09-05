import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getGamesListQueryOptions } from "@/queries/get-games-list-query-options.ts";
import { Suspense } from "react";
import { Badge } from "@/components/ui/badge.tsx";
import dayjs from "dayjs";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	const { data: gamesList } = useSuspenseQuery(getGamesListQueryOptions());

	return (
		<section className="all-games">
			<div className="py-10 flex flex-col gap-y-6">
				<h2 className="capitalize text-2xl lexend-bold">
					The top free games for PC and browser in 2025!
				</h2>
				<Suspense>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{gamesList.map((game) => (
							<Card key={game.id}>
								<img
									src={game.thumbnail}
									alt={game.title}
									className="rounded-md rounded-b-none"
									loading="lazy"
									decoding="async"
								/>
								<CardContent className="flex flex-col gap-y-3 pb-2">
									<h2 className="lexend-bold line-clamp-1">
										{game.title}
									</h2>
									<div className="flex items-center justify-between">
										<span className="text-muted-foreground text-sm">
											{dayjs(game.release_date).format(
												"YYYY-MM-DD",
											)}
										</span>
										<Badge>{game.genre}</Badge>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</Suspense>
			</div>
		</section>
	);
}
