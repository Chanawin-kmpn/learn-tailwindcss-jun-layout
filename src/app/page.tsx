import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardFooter,
} from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
	return (
		<div className="min-h-screen p-8 lg:grid lg:place-items-center">
			<main className="container mx-auto max-w-5xl">
				<h1 className="text-4xl font-bold mb-8 lg:text-center">Layout Demos</h1>

				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					<Card className="relative h-full group">
						<Link
							href="/dashboard"
							className="after:absolute after:inset-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
						>
							<CardHeader>
								<CardTitle>Dashboard</CardTitle>
							</CardHeader>
						</Link>
						<CardDescription className="px-6 pb-4">
							A comprehensive overview of your system metrics, key performance
							indicators, and real-time analytics. Monitor activities, track
							progress, and make data-driven decisions from a centralized
							control center.
						</CardDescription>
						<CardFooter>
							<span className="text-sm text-muted-foreground flex items-center gap-2 group-hover:text-primary transition-colors">
								View Dashboard
								<ArrowRight className="h-4 w-4" />
							</span>
						</CardFooter>
					</Card>

					<Card className="relative h-full group">
						<Link
							href="/chat"
							className="after:absolute after:inset-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
						>
							<CardHeader>
								<CardTitle>Chat</CardTitle>
							</CardHeader>
						</Link>
						<CardDescription className="px-6 pb-4">
							Real-time messaging platform with a modern interface. Connect with
							users, share files, and collaborate effectively through individual
							and group conversations.
						</CardDescription>
						<CardFooter>
							<span className="text-sm text-muted-foreground flex items-center gap-2 group-hover:text-primary transition-colors">
								Open Chat
								<ArrowRight className="h-4 w-4" />
							</span>
						</CardFooter>
					</Card>

					<Card className="relative h-full group">
						<Link
							href="/blog"
							className="after:absolute after:inset-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
						>
							<CardHeader>
								<CardTitle>Blog</CardTitle>
							</CardHeader>
						</Link>
						<CardDescription className="px-6 pb-4">
							A personal blog showcasing thoughts, tutorials, and insights about
							web development, programming best practices, and the latest
							technology trends.
						</CardDescription>
						<CardFooter>
							<span className="text-sm text-muted-foreground flex items-center gap-2 group-hover:text-primary transition-colors">
								Read Blog
								<ArrowRight className="h-4 w-4" />
							</span>
						</CardFooter>
					</Card>
				</div>
			</main>
		</div>
	);
}
