import { Badge } from "@/components/ui/badge.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { useImageOnLoad } from "@/hooks/use-image-on-load.ts";
import type { GameListing } from "@/server/types.ts";
import dayjs from "dayjs";

type GameListDisplayCardProps = {
	gameListing: GameListing;
};

export function GameListDisplayCard({ gameListing }: GameListDisplayCardProps) {
	const { styles, handleImageOnLoad } = useImageOnLoad();

	return (
		<a
			href={gameListing.game_url}
			target="_blank"
			rel="noreferrer"
			className="hover:scale-[1.02] transition-transform duration-300"
		>
			<Card key={gameListing.id} className="gap-2">
				<img
					src={gameListing.thumbnail}
					alt={gameListing.title}
					className="rounded-md rounded-b-none aspect-[16/9]"
					decoding="async"
					loading="lazy"
					onLoad={handleImageOnLoad}
					style={{ ...styles.fadeIn }}
				/>
				<CardContent className="flex flex-col gap-y-2 pb-2">
					<h2 className="lexend-bold line-clamp-1">
						{gameListing.title}
					</h2>
					<div className="flex items-center justify-between">
						<span className="text-muted-foreground text-sm">
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
