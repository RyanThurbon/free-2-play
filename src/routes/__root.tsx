import {
	createRootRouteWithContext,
	HeadContent,
	Scripts,
} from "@tanstack/react-router";
import appCss from "../styles.css?url";
import type { QueryClient } from "@tanstack/react-query";
import { ReactNode } from "react";
import { PageLayout } from "@/components/layouts/page-layout.tsx";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer.tsx";
import { Analytics } from "@vercel/analytics/react";

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
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<head>
				<title>FREE2PLAY</title>
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
