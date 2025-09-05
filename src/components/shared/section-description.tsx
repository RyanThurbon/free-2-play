import { cn } from "@/lib/utils.ts";
import { ReactNode } from "react";

type SectionDescriptionProps = {
	children: ReactNode;
	className?: string;
};

export function SectionDescription(props: SectionDescriptionProps) {
	return (
		<p className={cn("text-muted-foreground", props.className)}>
			{props.children}
		</p>
	);
}
