import { Card, CardContent } from "@/components/ui/card.tsx";
import dayjs from "dayjs";
import { Badge } from "@/components/ui/badge.tsx";
import { GameListing } from "@/server/types.ts";
import { useImageOnLoad } from "@/hooks/use-image-on-load.ts";

type GameListDisplayCardProps = {
	gameListing: GameListing;
};

export function GameListDisplayCard({ gameListing }: GameListDisplayCardProps) {
	const { styles, handleImageOnLoad } = useImageOnLoad();

	return (
		<a href={gameListing.game_url} target="_blank">
			<Card key={gameListing.id}>
				<img
					src={gameListing.thumbnail}
					alt={gameListing.title}
					className="rounded-md rounded-b-none aspect-[16/9]"
					decoding="async"
					onLoad={handleImageOnLoad}
					style={{ ...styles.fadeIn }}
				/>
				<CardContent className="flex flex-col gap-y-3 pb-2">
					<h2 className="lexend-bold line-clamp-1">
						{gameListing.title}
					</h2>
					<div className="flex items-center justify-between">
						<span className="text-muted-foreground text-sm hidden md:flex">
							{dayjs(gameListing.release_date).format(
								"YYYY-MM-DD",
							)}
						</span>
						<Badge>{gameListing.genre}</Badge>
					</div>
				</CardContent>
			</Card>
		</a>
	);
}
