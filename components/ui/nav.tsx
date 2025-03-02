"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function Nav() {
	return (
		<nav>
			<ul className="flex gap-4">
				<NavItem href="/movies">Movies</NavItem>
				<NavItem href="/songs">Songs</NavItem>
				<NavItem href="/books">Books</NavItem>
				<NavItem href="/flashcards">Flashcards</NavItem>
			</ul>
		</nav>
	);
}

function NavItem({ href, children }: { href: string; children: ReactNode }) {
	const pathname = usePathname();

	return (
		<li data-active={pathname === href} className="text-slate-400 hover:text-white hover:underline data-[active=true]:text-white transition-colors">
			<Link href={href}>{children}</Link>
		</li>
	)
}