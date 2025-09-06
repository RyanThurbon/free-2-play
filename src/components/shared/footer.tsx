import dayjs from "dayjs";

export function Footer() {
	return (
		<section id="footer">
			<footer className="flex flex-col gap-y-4 sm:flex-row items-center lg:justify-between mt-20 py-10 border-t text-sm ">
				<div className="text-sm">data provided by freetogame.com</div>
				<p className="text-muted-foreground">
					&copy; <span>{dayjs().year()}</span> Ryan Thurbon. All
					rights reserved.
				</p>
			</footer>
		</section>
	);
}
