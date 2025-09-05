import { ChevronDownIcon, Gamepad2Icon } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Link } from "@tanstack/react-router";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";

export function Navbar() {
	return (
		<section id="navbar">
			<header className="flex items-center justify-between py-4 border-b border-primary">
				<Link to="/" className="flex items-center gap-x-2">
					<Gamepad2Icon className="size-6 text-primary" />
					<h1 className="lexend-bold text-lg uppercase">free2play</h1>
				</Link>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="ghost"
							className="flex items-center gap-x-2"
						>
							Browse Games List
							<ChevronDownIcon className="size-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-[200px]">
						{["Action", "Adventure"].map((item, index) => (
							<DropdownMenuItem key={index}>
								{item}
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
			</header>
		</section>
	);
}
