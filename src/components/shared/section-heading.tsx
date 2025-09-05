type SectionHeadingProps = {
	heading: string;
	description?: string;
};

export function SectionHeading(props: SectionHeadingProps) {
	return (
		<div className="flex flex-col gap-y-3">
			<h2 className="capitalize text-2xl lexend-bold">{props.heading}</h2>
			{props.description && (
				<p className="text-muted-foreground">{props.description}</p>
			)}
		</div>
	);
}
