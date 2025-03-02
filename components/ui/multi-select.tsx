// src/components/multi-select.tsx

import { cva, type VariantProps } from "class-variance-authority";
import {
	CheckIcon,
	XCircle,
	XIcon,
} from "lucide-react";

import { cn } from "~/lib/utils";
import { Separator } from "~/components/ui/separator";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "~/components/ui/popover";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from "~/components/ui/command";
import { ComponentType, KeyboardEvent, useState } from "react";
import { MultipleCrossCancelDefault } from "~/components/icons/multiple-cross-cancel-default";
import { ChevronDown } from "~/components/icons/chevron-down";
import { CheckTickSingle } from "~/components/icons/check-tick-single";

/**
 * Variants for the multi-select component to handle different styles.
 * Uses class-variance-authority (cva) to define different styles based on "variant" prop.
 */
const multiSelectVariants = cva(
	"m-1",
	{
		variants: {
			variant: {
				default:
					"border-foreground/10 text-foreground",
				inverted: "inverted",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
);

/**
 * Props for MultiSelect component
 */
interface MultiSelectProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
	VariantProps<typeof multiSelectVariants> {
	/**
	 * An array of option objects to be displayed in the multi-select component.
	 * Each option object has a label, value, and an optional icon.
	 */
	options: {
		/** The text to display for the option. */
		label: string;
		/** The unique value associated with the option. */
		value: string;
		color: string;
		/** Optional icon component to display alongside the option. */
		icon?: ComponentType<{ className?: string }>;
	}[];

	/**
	 * Callback function triggered when the selected values change.
	 * Receives an array of the new selected values.
	 */
	onValueChange: (value: string[]) => void;

	/** The default selected values when the component mounts. */
	defaultValue?: string[];

	/**
	 * Placeholder text to be displayed when no values are selected.
	 * Optional, defaults to "Select options".
	 */
	placeholder?: string;

	/**
	 * Animation duration in seconds for the visual effects (e.g., bouncing badges).
	 * Optional, defaults to 0 (no animation).
	 */
	animation?: number;

	/**
	 * Maximum number of items to display. Extra selected items will be summarized.
	 * Optional, defaults to 3.
	 */
	maxCount?: number;

	/**
	 * The modality of the popover. When set to true, interaction with outside elements
	 * will be disabled and only popover content will be visible to screen readers.
	 * Optional, defaults to false.
	 */
	modalPopover?: boolean;

	/**
	 * If true, renders the multi-select component as a child of another component.
	 * Optional, defaults to false.
	 */
	asChild?: boolean;

	/**
	 * Additional class names to apply custom styles to the multi-select component.
	 * Optional, can be used to add custom styles.
	 */
	className?: string;
}

export function MultiSelect({
	options,
	onValueChange,
	variant,
	defaultValue = [],
	placeholder = "Select options",
	animation = 0,
	maxCount = 3,
	modalPopover = false,
	asChild = false,
	className,
	...props
}: MultiSelectProps) {
	const [selectedValues, setSelectedValues] = useState<string[]>(defaultValue);
	const [isPopoverOpen, setIsPopoverOpen] = useState(false);

	const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			setIsPopoverOpen(true);
		} else if (event.key === "Backspace" && !event.currentTarget.value) {
			const newSelectedValues = [...selectedValues];
			newSelectedValues.pop();
			setSelectedValues(newSelectedValues);
			onValueChange(newSelectedValues);
		}
	};

	const toggleOption = (option: string) => {
		const newSelectedValues = selectedValues.includes(option)
			? selectedValues.filter((value) => value !== option)
			: [...selectedValues, option];
		setSelectedValues(newSelectedValues);
		onValueChange(newSelectedValues);
	};

	const handleClear = () => {
		setSelectedValues([]);
		onValueChange([]);
	};

	const handleTogglePopover = () => {
		setIsPopoverOpen((prev) => !prev);
	};

	const clearExtraOptions = () => {
		const newSelectedValues = selectedValues.slice(0, maxCount);
		setSelectedValues(newSelectedValues);
		onValueChange(newSelectedValues);
	};

	console.log(isPopoverOpen)

	return (
		<Popover
			open={isPopoverOpen}
			onOpenChange={setIsPopoverOpen}
			modal={modalPopover}
		>
			<PopoverTrigger asChild>
				<Button
					{...props}
					onClick={handleTogglePopover}
					className={cn(
						"flex p-1 rounded-xl border min-h-10 h-auto items-center justify-between [&_svg]:pointer-events-auto transition-all bg-slate-900 hover:bg-slate-800",
						className
					)}
				>
					{selectedValues.length > 0 ? (
						<div className="flex justify-between items-center w-full">
							<div className="flex flex-wrap items-center">
								{selectedValues.slice(0, maxCount).map((value) => {
									const option = options.find((o) => o.value === value);
									const IconComponent = option?.icon;

									return (
										<Badge
											key={value}
											className={cn(
												"group",
												multiSelectVariants({ variant }),
												option?.color,
											)}
										>
											{IconComponent && <IconComponent className="h-4 w-4 mr-2" />}
											{option?.label}
											<div
												className="ml-2 h-4 w-4 cursor-pointer"
												onClick={(event) => {
													event.stopPropagation();
													toggleOption(value);
												}}
											>
												<MultipleCrossCancelDefault variant="stroke" />
											</div>
										</Badge>
									);
								})}
								{selectedValues.length > maxCount && (
									<Badge
										className={cn(
											"bg-transparent text-foreground border-foreground/1 hover:bg-transparent",
											multiSelectVariants({ variant })
										)}
									>
										{`+ ${selectedValues.length - maxCount} more`}
										<XCircle
											className="ml-2 h-4 w-4 cursor-pointer"
											onClick={(event) => {
												event.stopPropagation();
												clearExtraOptions();
											}}
										/>
									</Badge>
								)}
							</div>
							<div className="flex items-center justify-between">
								<XIcon
									className="h-4 mx-2 cursor-pointer text-muted-foreground"
									onClick={(event) => {
										event.stopPropagation();
										handleClear();
									}}
								/>
								<Separator
									orientation="vertical"
									className="flex min-h-6 h-full"
								/>
								<div
									data-state={isPopoverOpen ? "open" : "closed"}
									className="cursor-pointer text-muted-foreground mx-2 [&_svg]:size-4 data-[state=open]:[&_svg]:rotate-180 [&_svg]:transition-transform">
									<ChevronDown variant="stroke" />
								</div>
							</div>
						</div>
					) : (
						<div className="flex items-center justify-between w-full mx-auto">
							<span className="text-sm text-muted-foreground mx-3">
								{placeholder}
							</span>
							<div
								data-state={isPopoverOpen ? "open" : "closed"}
								className="cursor-pointer text-muted-foreground mx-2 [&_svg]:size-4 data-[state=open]:[&_svg]:rotate-180 [&_svg]:transition-transform">
								<ChevronDown variant="stroke" />
							</div>
						</div>
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent
				className="w-auto p-0"
				align="start"
				onEscapeKeyDown={() => setIsPopoverOpen(false)}
			>
				<Command className="bg-slate-900">
					<CommandInput
						placeholder="Search..."
						onKeyDown={handleInputKeyDown}
					/>
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup className="max-h-[250px] overflow-y-scroll">
							{options.map((option) => {
								const isSelected = selectedValues.includes(option.value);
								return (
									<CommandItem
										key={option.value}
										onSelect={() => toggleOption(option.value)}
										className="cursor-pointer"
									>
										<div
											className={cn(
												"mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
												isSelected
													? "bg-primary text-primary-foreground"
													: "opacity-50 [&_svg]:invisible"
											)}
										>
											<CheckTickSingle variant="stroke" />
										</div>
										{option.icon && (
											<option.icon className="mr-2 h-4 w-4 text-muted-foreground" />
										)}
										<span>{option.label}</span>
									</CommandItem>
								);
							})}
						</CommandGroup>
						<CommandSeparator />
						<CommandGroup>
							<div className="flex items-center justify-between">
								{selectedValues.length > 0 && (
									<>
										<CommandItem
											onSelect={handleClear}
											className="flex-1 justify-center cursor-pointer"
										>
											Clear
										</CommandItem>
										<Separator
											orientation="vertical"
											className="flex min-h-6 h-full"
										/>
									</>
								)}
								<CommandItem
									onSelect={() => setIsPopoverOpen(false)}
									className="flex-1 justify-center cursor-pointer max-w-full"
								>
									Close
								</CommandItem>
							</div>
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover >
	);
}

