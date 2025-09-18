import { GamesListFilter } from "@/components/features/games-list/games-list-filter";
import { ClearFiltersButton } from "@/components/shared/clear-filters-button";
import { GameListGrid } from "@/components/shared/game-list-grid";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function PendingGridFallback() {
	return (
		<div className="flex flex-col gap-y-4">
			<div className="flex items-center justify-between">
				<GamesListFilter />
				<ClearFiltersButton />
			</div>
			<GameListGrid>
				{Array.from({ length: 12 }).map((_, index) => (
					<Card key={index}>
						<div className="aspect-[16/9] w-full">
							<Skeleton className="h-full w-full rounded-md rounded-b-none" />
						</div>
						<CardContent className="flex flex-col gap-y-3 pb-2">
							<Skeleton className="h-5 w-3/4 rounded-sm" />
							<div className="flex items-center justify-between">
								<Skeleton className="h-4 w-24 rounded-sm" />
								<Skeleton className="h-5 w-16 rounded-full" />
							</div>
						</CardContent>
					</Card>
				))}
			</GameListGrid>
		</div>
	);
}
