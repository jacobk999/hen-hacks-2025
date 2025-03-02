"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { UnitedStatesFlag, FranceFlag, GermanFlag, SpainFlag, IndianFlag } from "~/components/icons/flags";
import { cn } from "~/lib/utils";

export function LanguagePicker({ language, onLanguageChange, disable, className }: { language: string; disable?: string; onLanguageChange: (language: string) => void; className?: string }) {
	return (
		<Select value={language} onValueChange={onLanguageChange}>
			<SelectTrigger className={cn("w-[160px]", className)}>
				<SelectValue />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="english" disabled={disable === "english"}>
					<UnitedStatesFlag /> English
				</SelectItem>
				<SelectItem value="spanish" disabled={disable === "spanish"}>
					<SpainFlag /> Spanish
				</SelectItem>
				<SelectItem value="french" disabled={disable === "french"}>
					<FranceFlag /> French
				</SelectItem>
				<SelectItem value="german" disabled={disable === "german"}>
					<GermanFlag />
					German
				</SelectItem>
				<SelectItem value="hindi" disabled={disable === "hindi"}>
					<IndianFlag />
					Hindi
				</SelectItem>
			</SelectContent>
		</Select>
	);
}