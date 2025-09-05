import { ChevronDownIcon, Gamepad2Icon } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Link } from "@tanstack/react-router";

export function Navbar() {
	return (
		<section id="navbar">
			<header className="flex items-center justify-between py-4 border-b border-primary">
				<Link to="/" className="flex items-center gap-x-2">
					<Gamepad2Icon className="size-6 text-primary" />
					<h1 className="lexend-bold text-lg uppercase">free2play</h1>
				</Link>
				<Button variant="ghost" className="flex items-center gap-x-2">
					Browse Games List
					<ChevronDownIcon className="size-4" />
				</Button>
			</header>
		</section>
	);
}
