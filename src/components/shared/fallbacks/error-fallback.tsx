import {
	Card,
	CardAction,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import { QueryObserverBaseResult } from "@tanstack/react-query";

type ErrorFallbackProps = {
	refetch: Promise<QueryObserverBaseResult>;
};

export function ErrorFallback(props: ErrorFallbackProps) {
	return (
		<Card className="py-4">
			<CardHeader>
				<CardTitle>Something went wrong</CardTitle>
				<CardDescription>
					An unexpected error occured. Please try again
				</CardDescription>
				<CardAction>
					<Button onClick={() => props.refetch}>Try again</Button>
				</CardAction>
			</CardHeader>
		</Card>
	);
}
