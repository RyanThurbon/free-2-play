import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select.tsx";
import { useNavigate, useSearch } from "@tanstack/react-router";

export type SelectFilterProps = {
	label: string;
	value: string;
	placeholder: string;
	filters: {
		value: string;
		label: string;
	}[];
	type: "platform" | "sort-by";
};

export function SelectFilter(props: SelectFilterProps) {
	const navigate = useNavigate();
	const currentSearch = useSearch({ from: "/" });

	return (
		<div className="flex items-center gap-x-2">
			<span className="text-muted-foreground text-sm hidden md:block">
				{props.label}
			</span>
			<Select
				value={props.value}
				onValueChange={async (value) => {
					await navigate({
						to: "/",
						search: {
							...currentSearch,
							[props.type]: value,
						},
					});
				}}
			>
				<SelectTrigger className="w-fit px-0" value={props.value}>
					<SelectValue placeholder={props.placeholder} />
				</SelectTrigger>
				<SelectContent>
					{props.filters.map((filter, index) => (
						<SelectItem key={index} value={filter.value}>
							{filter.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
}
