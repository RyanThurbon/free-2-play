import { GamesListSection } from "@/components/features/games-list/games-list-section.tsx";
import { PendingGridFallback } from "@/components/shared/fallbacks/pending-grid-fallback";
import { SectionHeading } from "@/components/shared/section-heading.tsx";
import dayjs from "dayjs";
import { Suspense } from "react";

export function GamesList() {
	return (
		<section className="games-list">
			<div className="flex flex-col gap-y-6">
				<SectionHeading
					heading={`The best free games for PC and browser in ${dayjs().year()}!`}
				/>
				<Suspense fallback={<PendingGridFallback />}>
					<GamesListSection />
				</Suspense>
			</div>
		</section>
	);
}
