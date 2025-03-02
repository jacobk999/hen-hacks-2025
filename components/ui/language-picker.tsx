"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { UnitedStatesFlag, FranceFlag, GermanFlag, SpainFlag, VietnamFlag } from "~/components/icons/flags";

export function LanguagePicker({ language, onLanguageChange }: { language: string; onLanguageChange: (language: string) => void }) {
	return (
		<Select value={language} onValueChange={onLanguageChange}>
			<SelectTrigger className="w-[160px]">
				<SelectValue />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="english">
					<UnitedStatesFlag /> English
				</SelectItem>
				<SelectItem value="spanish">
					<SpainFlag /> Spanish
				</SelectItem>
				<SelectItem value="french">
					<FranceFlag /> French
				</SelectItem>
				<SelectItem value="german">
					<GermanFlag />
					German
				</SelectItem>
				<SelectItem value="vietnamese">
					<VietnamFlag />
					Vietnamese
				</SelectItem>
			</SelectContent>
		</Select>
	);
}