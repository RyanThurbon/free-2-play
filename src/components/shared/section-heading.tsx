type SectionHeadingProps = {
	heading: string;
};

export function SectionHeading(props: SectionHeadingProps) {
	return <h2 className="capitalize text-2xl lexend-bold">{props.heading}</h2>;
}
