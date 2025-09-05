import { createFileRoute } from "@tanstack/react-router";
import { GamesList } from "@/components/features/games-list";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return <GamesList />;
}
