import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import {
	Bell,
	Image as ImageIcon,
	Link,
	MoreVertical,
	UserPlus,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ChatSettingProps {
	participant: {
		name: string;
		avatar?: string;
		status?: string;
	};
	sharedMedia: {
		images: string[];
		files: { name: string; size: string }[];
	};
}

export function ChatSetting({ participant, sharedMedia }: ChatSettingProps) {
	return (
		<ScrollArea className="h-full ">
			<div className="flex flex-col p-6 ">
				<div className="flex flex-col items-center">
					<Avatar className="h-20 w-20">
						<AvatarImage src={participant.avatar} />
						<AvatarFallback>{participant.name.slice(0, 2)}</AvatarFallback>
					</Avatar>
					<h3 className="mt-4 font-semibold">{participant.name}</h3>
					<p className="text-sm text-muted-foreground">{participant.status}</p>
				</div>

				<div className="mt-6 flex justify-around">
					<Button variant="ghost" size="icon">
						<UserPlus className="h-5 w-5" />
					</Button>
					<Button variant="ghost" size="icon">
						<Bell className="h-5 w-5" />
					</Button>
					<Button variant="ghost" size="icon">
						<Link className="h-5 w-5" />
					</Button>
					<Button variant="ghost" size="icon">
						<MoreVertical className="h-5 w-5" />
					</Button>
				</div>

				<Separator className="my-6" />

				<div className="space-y-4">
					<h4 className="text-sm font-semibold">Shared Media</h4>
					<div className="grid grid-cols-3 gap-2">
						{sharedMedia.images.map((image, i) => (
							<div
								key={i}
								className="aspect-square rounded-md overflow-hidden bg-muted"
							>
								<img
									src={image}
									alt=""
									className="h-full w-full object-cover"
								/>
							</div>
						))}
					</div>
				</div>

				<Separator className="my-6" />

				<div className="space-y-4">
					<h4 className="text-sm font-semibold">Shared Files</h4>
					<div className="space-y-2">
						{sharedMedia.files.map((file, i) => (
							<div
								key={i}
								className="flex items-center gap-2 rounded-lg border p-2"
							>
								<ImageIcon className="h-4 w-4" />
								<div className="flex-1">
									<p className="text-sm font-medium">{file.name}</p>
									<p className="text-xs text-muted-foreground">{file.size}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</ScrollArea>
	);
}
