import {
	SelectFilter,
	SelectFilterProps,
} from "@/components/shared/select-filter.tsx";

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
		label: "Populairty",
		value: "popularity",
	},
] satisfies SelectFilterProps["filters"];

export function GamesListFilter() {
	return (
		<section id="filters">
			<div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-4 w-full">
				<SelectFilter
					type="platform"
					label="Platform:"
					defaultValue="all"
					placeholder="All Platforms"
					filters={platformFilters}
				/>
				<SelectFilter
					type="sort-by"
					label="Sort by:"
					defaultValue="relevance"
					placeholder="Relevance"
					filters={sortByFilters}
				/>
			</div>
		</section>
	);
}
