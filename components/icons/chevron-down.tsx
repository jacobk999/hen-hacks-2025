export interface ChevronDownProps {
	variant: "contrast" | "solid" | "stroke";
}

export function ChevronDown({ variant }: ChevronDownProps) {
	switch (variant) {
		case "contrast":
			return (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						opacity="0.28"
						d="M11.7021 13.8942C10.3071 12.7713 9.06206 11.4619 8 10L12 10.3044L16 10C14.9379 11.4619 13.6929 12.7713 12.2979 13.8942C12.1226 14.0353 11.8774 14.0353 11.7021 13.8942Z"
						fill="currentColor"
					/>
					<path
						d="M11.7021 13.8942C10.3071 12.7713 9.06206 11.4619 8 10L12 10.3044L16 10C14.9379 11.4619 13.6929 12.7713 12.2979 13.8942C12.1226 14.0353 11.8774 14.0353 11.7021 13.8942Z"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			);

		case "solid":
			return (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12.925 14.6732C14.3879 13.4957 15.6927 12.1235 16.8055 10.5927C16.9425 10.4067 17.0161 10.1726 16.9972 9.92417C16.9553 9.37347 16.4749 8.96102 15.9242 9.00293C13.3119 9.20173 10.6882 9.20173 8.07593 9.00293C7.52524 8.96102 7.04484 9.37347 7.00293 9.92417C6.98403 10.1726 7.05757 10.4067 7.19456 10.5927C8.30737 12.1235 9.61223 13.4957 11.0751 14.6732C11.6165 15.109 12.3836 15.109 12.925 14.6732Z"
						fill="currentColor"
					/>
				</svg>
			);

		case "stroke":
			return (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M8 10.1392C9.06206 11.601 10.3071 12.9104 11.7021 14.0334C11.8774 14.1744 12.1226 14.1744 12.2979 14.0334C13.6929 12.9104 14.9379 11.601 16 10.1392"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			);
	}
}