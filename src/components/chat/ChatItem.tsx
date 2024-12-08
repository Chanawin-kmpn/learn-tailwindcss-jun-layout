'use client';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import type { Chat } from './ChatList';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { useEffect, useState } from 'react';

interface ChatItemProps {
	chat: Chat;
	selected?: boolean;
	onClick?: () => void;
}

export function ChatItem({ chat, selected, onClick }: ChatItemProps) {
	const [sidebar, setSidebar] = useState<null | Element>(null);

	useEffect(() => {
		setSidebar(document.querySelector('jun-edgeSidebar'));
	}, []);

	return (
		<Tooltip>
			<TooltipTrigger>
				<button
					onClick={onClick}
					className={cn(
						'jun-sidebarMenuButton jun-sidebarMenuButton-spacing-3',
						'flex items-center gap-3 w-full p-3 rounded-lg text-left',
						'hover:bg-accent',
						selected && 'bg-accent'
					)}
				>
					<div className="relative">
						<Avatar className="jun-sidebarIcon">
							<AvatarImage src={chat.avatar} alt={chat.name} />
							<AvatarFallback>{chat.name.slice(0, 2)}</AvatarFallback>
						</Avatar>
						{chat.isOnline && (
							<span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
						)}
					</div>
					<div className="flex-1 overflow-hidden jun-sidebar-text">
						<div className="flex items-center justify-between">
							<span className="font-medium jun-sidebarText">{chat.name}</span>
							<span className="text-xs text-muted-foreground">
								{chat.timestamp}
							</span>
						</div>
						<div className="flex items-center justify-between">
							<span className="text-sm text-muted-foreground truncate">
								{chat.lastMessage}
							</span>
							{chat.unread && (
								<Badge variant="default" className="ml-auto">
									{chat.unread}
								</Badge>
							)}
						</div>
					</div>
				</button>
			</TooltipTrigger>
			<TooltipContent
				container={sidebar}
				side="right"
				className="jun-sidebarTooltip"
			>
				{chat.name}
			</TooltipContent>
		</Tooltip>
	);
}
