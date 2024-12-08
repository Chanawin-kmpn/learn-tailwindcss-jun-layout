'use client';
import { ChatList } from '@/components/chat/ChatList';
import { Input } from '@/components/chat/Input';
import { createMockChats } from '@/app/chat/_data/mock-chats';
import { createMockMessages } from '@/app/chat/_data/mock-messages';
import { createMockSettings } from '@/app/chat/_data/mock-settings';
import { Conversation } from '@/components/chat/Conversation';
import { ChatSetting } from '@/components/chat/ChatSetting';
import { Button } from '@/components/ui/button';
import {
	UserPlus,
	MoreVertical,
	PanelLeftClose,
	SquareMenu,
	PanelLeftOpen,
	X,
	MenuSquare,
} from 'lucide-react';
import {
	triggerEdgeCollapse,
	triggerEdgeCollapseRight,
	triggerEdgeDrawer,
	triggerEdgeDrawerRight,
} from 'tailwindcss-jun-layout';
import { TooltipProvider } from '@radix-ui/react-tooltip';

// Create mock data once
const mockChats = createMockChats();
const mockMessages = createMockMessages();
const mockSettings = createMockSettings();

export default function ChatPage() {
	return (
		<div className="jun-layout jun-layout-standalone">
			<header className="jun-header flex items-center justify-between px-4 py-2">
				<div className="flex items-center gap-2">
					<Button
						variant="ghost"
						size="icon"
						className="jun-edgeDrawerTrigger"
						onClick={() => triggerEdgeDrawer()}
					>
						<MenuSquare />
					</Button>
					<Button
						variant="ghost"
						size="icon"
						className="jun-edgeCollapseTrigger"
						onClick={(event) => triggerEdgeCollapse({ event })}
					>
						<PanelLeftOpen className="jun-edgeCollapsed-visible" />
						<PanelLeftClose className="jun-edgeUncollapsed-visible" />
					</Button>
					<h1 className="text-lg font-semibold">Messages</h1>
					<span className="text-sm text-muted-foreground">
						{mockChats.length} conversations
					</span>
				</div>
				<div className="flex items-center gap-2">
					<Button variant="ghost" size="icon">
						<UserPlus className="h-5 w-5" />
					</Button>
					<Button
						variant="ghost"
						size="icon"
						className="jun-edgeCollapseTriggerR max-lg:hidden"
						onClick={(event) => triggerEdgeCollapseRight({ event })}
					>
						<MoreVertical className="h-5 w-5 jun-edgeCollapsed-visible" />
						<PanelLeftOpen className="jun-edgeUncollapsed-visible" />
					</Button>
					<Button
						variant="ghost"
						size="icon"
						className="jun-edgeDrawerTriggerR lg:hidden"
						onClick={() => triggerEdgeDrawerRight()}
					>
						<MoreVertical className="h-5 w-5 jun-edgeCollapsed-visible" />
					</Button>
				</div>
			</header>

			<TooltipProvider>
				<aside className="jun-edgeSidebar lg:jun-edgeSidebar-collapsed-w-[80px] lg:jun-edgeSidebar-permanent lg:jun-edgeSidebar-permanent-autoCollapse-lg jun-edgeSidebar-drawer">
					<div className="jun-edgeContent">
						<ChatList
							chats={mockChats}
							onSelect={(id) => console.log('Selected chat:', id)}
						/>
					</div>
					<button
						className="jun-sidebarRail jun-edgeCollapseTrigger"
						onClick={(event) => triggerEdgeCollapseRight({ event })}
					></button>
				</aside>
			</TooltipProvider>

			<main className="jun-content">
				<Conversation messages={mockMessages} />
			</main>

			<aside className="jun-edgeSidebarR jun-edgeSidebarR-drawer lg:jun-edgeSidebarR-permanent lg:jun-edgeSidebar-permanent-autoCollapse-lg jun-edgeSidebarR-drawer-withoutOverlay jun-edgeSidebarR-w-[100vw] lg:jun-edgeSidebarR-w-[256px] xl:jun-edgeSidebarR-w-[300px]">
				<div className="jun-edgeContent">
					<ChatSetting
						participant={mockSettings.participant}
						sharedMedia={mockSettings.sharedMedia}
					/>
				</div>
				<button
					className="jun-sidebarRail jun-edgeDrawerTriggerR"
					onClick={() => triggerEdgeDrawerRight()}
				/>
			</aside>

			<footer className="jun-footer">
				<Input onSend={(message) => console.log('Sent message:', message)} />
			</footer>
		</div>
	);
}
