import { createFileRoute } from "@tanstack/react-router";
import { GamesList } from "@/components/features/games-list";
import { gamesListFiltersSchema } from "@/server/types.ts";

export const Route = createFileRoute("/")({
	validateSearch: gamesListFiltersSchema,
	component: App,
});

function App() {
	return <GamesList />;
}
