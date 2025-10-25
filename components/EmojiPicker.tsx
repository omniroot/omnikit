import { IconButton, Popover, Portal, useDisclosure } from "@chakra-ui/react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { IconMoodUnamused } from "@tabler/icons-react";
import { type FC, useState } from "react";

// import "./EmojiPicker.css";

export interface IEmoji {
	id: string;
	keywords: string[];
	name: string;
	native: string;
	shortcodes: string;
	unified: string;
}

interface IProps {
	onChange?: (emoji: IEmoji) => void;
}
export const EmojiPicker: FC<IProps> = ({ onChange }) => {
	const [emoji, setEmoji] = useState<IEmoji | null>(null);
	const { open, onToggle } = useDisclosure();
	// const [search, setSearch] = useState("Hearth");

	const onEmojiSelect = (emoji: IEmoji) => {
		setEmoji(emoji);
		onChange?.(emoji);
	};

	// console.log({ emoji });

	return (
		<Popover.Root open={open} onOpenChange={onToggle} positioning={{ strategy: "fixed" }}>
			<Popover.Trigger asChild>
				<IconButton fontSize={"md"}>{emoji?.native || <IconMoodUnamused />}</IconButton>
			</Popover.Trigger>
			<Portal disabled>
				<Popover.Positioner>
					<Popover.Content zIndex={"999999999999999999"}>
						<Popover.Body asChild>
							<Picker data={data} onEmojiSelect={onEmojiSelect} autoFocus />
							{/* <Frimousse.Root onEmojiSelect={(e) => console.log(e.label)}>
								<Frimousse.Search autoFocus />

								<Frimousse.Viewport>
									<Frimousse.Loading>Loading…</Frimousse.Loading>
									<Frimousse.Empty>No emoji found.</Frimousse.Empty>
									<Frimousse.List
										components={{
											CategoryHeader: ({ category, ...props }) => <div {...props}>{category.label}</div>,
											Row: ({ children, ...props }) => <div {...props}>{children}</div>,
											Emoji: ({ emoji, ...props }) => <button {...props}>{emoji.emoji}</button>,
										}}
									/>
								</Frimousse.Viewport>
							</Frimousse.Root> */}
						</Popover.Body>
					</Popover.Content>
				</Popover.Positioner>
			</Portal>
		</Popover.Root>
	);
};
