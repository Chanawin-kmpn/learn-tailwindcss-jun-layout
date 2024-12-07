import { BlogFooter } from '@/components/blog/BlogFooter';
import { Github, Twitter } from 'lucide-react';
import NavTrigger from './NavTrigger';
import Link from 'next/link';

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="jun-layout">
			<header className="jun-header z-[100]">
				<div className="container mx-auto max-w-6xl px-4 py-4">
					<div className="flex items-center">
						<NavTrigger />
						<nav className="flex-1">
							<ul className="flex items-center gap-6">
								<li>
									<Link href="/" className="font-medium hover:text-primary">
										Home
									</Link>
								</li>
								<li>
									<Link href="/blog" className="font-medium hover:text-primary">
										Blog
									</Link>
								</li>
								<li>
									<Link
										href="/about"
										className="font-medium hover:text-primary"
									>
										About
									</Link>
								</li>
							</ul>
						</nav>

						<div className="flex items-center gap-4">
							<a
								href="https://github.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-foreground transition-colors"
							>
								<Github className="h-5 w-5" />
								<span className="sr-only">GitHub</span>
							</a>
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-foreground transition-colors"
							>
								<Twitter className="h-5 w-5" />
								<span className="sr-only">Twitter</span>
							</a>
						</div>
					</div>
				</div>
			</header>
			<aside className="jun-edgeSidebar jun-edgeSidebar-drawer md:jun-edgeSidebar-permanent md:jun-edgeSidebar-permanent-hidden">
				<div className="jun-edgeContent">
					<div className="p-4">navigation</div>
				</div>
			</aside>
			{children}
			<footer className="jun-footer">
				<BlogFooter />
			</footer>
		</div>
	);
}
