export interface ChevronRightProps {
	variant: "contrast" | "solid" | "stroke";
}

export function ChevronRight({ variant }: ChevronRightProps) {
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
						d="M13.8942 11.7021C12.7713 10.3071 11.4619 9.06206 10 8L10.3044 12L10 16C11.4619 14.9379 12.7713 13.6929 13.8942 12.2979C14.0353 12.1226 14.0353 11.8774 13.8942 11.7021Z"
						fill="currentColor"
					/>
					<path
						d="M13.8942 11.7021C12.7713 10.3071 11.4619 9.06206 10 8C10.2026 10.6628 10.2026 13.3372 10 16C11.4619 14.9379 12.7713 13.6929 13.8942 12.2979C14.0353 12.1226 14.0353 11.8774 13.8942 11.7021Z"
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
						d="M14.6732 12.925C13.4957 14.3879 12.1235 15.6927 10.5927 16.8055C10.4067 16.9425 10.1726 17.0161 9.92417 16.9972C9.37347 16.9553 8.96102 16.4749 9.00293 15.9242C9.20173 13.3119 9.20173 10.6882 9.00293 8.07593C8.96102 7.52524 9.37347 7.04484 9.92417 7.00293C10.1726 6.98403 10.4067 7.05757 10.5927 7.19456C12.1235 8.30737 13.4957 9.61223 14.6732 11.0751C15.109 11.6165 15.109 12.3836 14.6732 12.925Z"
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
						d="M10 8.13916C11.4619 9.20122 12.7713 10.4462 13.8942 11.8413C14.0353 12.0165 14.0353 12.2618 13.8942 12.437C12.7713 13.8321 11.4619 15.0771 10 16.1392"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			);
	}
}