import { PageLayout } from "@/components/layouts/page-layout.tsx";
import { Footer } from "@/components/shared/footer.tsx";
import { Navbar } from "@/components/shared/navbar";
import type { QueryClient } from "@tanstack/react-query";
import {
	HeadContent,
	Scripts,
	createRootRouteWithContext,
} from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";
import type { ReactNode } from "react";
import appCss from "../styles.css?url";

interface IRootRouteContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<IRootRouteContext>()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com",
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap",
			},
			{ rel: "dns-prefetch", href: "https://www.freetogame.com/api" },
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<head>
				<title>Free2Play</title>
				<HeadContent />
			</head>
			<body>
				<PageLayout>
					<main className="flex flex-col min-h-screen">
						<div className="flex flex-col gap-y-10 flex-1">
							<Navbar />
							{children}
						</div>
						<Footer />
					</main>
				</PageLayout>
				<Analytics />
				<Scripts />
			</body>
		</html>
	);
}
