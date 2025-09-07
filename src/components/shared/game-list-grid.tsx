import { PropsWithChildren } from "react";

export function GameListGrid({ children }: PropsWithChildren) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{children}
		</div>
	);
}
