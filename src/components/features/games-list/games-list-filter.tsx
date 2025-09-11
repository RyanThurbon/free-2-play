import {
	SelectFilter,
	type SelectFilterProps,
} from "@/components/shared/select-filter.tsx";
import { useSearch } from "@tanstack/react-router";

const platformFilters = [
	{
		label: "Windows (PC)",
		value: "pc",
	},
	{
		label: "Browser (Web)",
		value: "browser",
	},
	{
		label: "All Platforms",
		value: "all",
	},
] satisfies SelectFilterProps["filters"];

const sortByFilters = [
	{
		label: "Relevance",
		value: "relevance",
	},
	{
		label: "Alphabetical",
		value: "alphabetical",
	},
	{
		label: "Release-date",
		value: "release-date",
	},
	{
		label: "Popularity",
		value: "popularity",
	},
] satisfies SelectFilterProps["filters"];

export function GamesListFilter() {
	const currentSearch = useSearch({ from: "/" });

	return (
		<section id="filters">
			<div className="flex items-center gap-x-4 w-full">
				<SelectFilter
					type="platform"
					label="Platform:"
					value={currentSearch?.platform ?? ""}
					placeholder="All Platforms"
					filters={platformFilters}
				/>
				<SelectFilter
					type="sort-by"
					label="Sort by:"
					value={currentSearch?.["sort-by"] ?? ""}
					placeholder="Relevance"
					filters={sortByFilters}
				/>
			</div>
		</section>
	);
}
