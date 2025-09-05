import { PropsWithChildren } from "react";

export function PageLayout({ children }: PropsWithChildren) {
	return (
		<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			{children}
		</div>
	);
}
