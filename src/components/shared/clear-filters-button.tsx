import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { XIcon } from "lucide-react";

export function ClearFiltersButton() {
	const navigate = useNavigate();

	return (
		<Button
			onClick={async () => {
				await navigate({
					to: "/",
					search: {},
				});
			}}
			size="sm"
			variant="ghost"
			className="text-muted-foreground flex items-center gap-x-2"
		>
			Clear
			<XIcon className="size-4" />
		</Button>
	);
}
