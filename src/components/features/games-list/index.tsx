import { SectionHeading } from "@/components/shared/section-heading.tsx";
import { Suspense } from "react";
import { PendingFallback } from "@/components/shared/fallbacks/pending-fallback.tsx";
import { GamesListSection } from "@/components/features/games-list/games-list-section.tsx";
import dayjs from "dayjs";

export function GamesList() {
	return (
		<section className="games-list">
			<div className="py-10 flex flex-col gap-y-6">
				<SectionHeading
					heading={`The best free games for PC and browser in ${dayjs().year()}!`}
				/>
				<Suspense fallback={<PendingFallback />}>
					<GamesListSection />
				</Suspense>
			</div>
		</section>
	);
}
