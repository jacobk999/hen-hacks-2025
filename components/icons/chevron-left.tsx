export interface ChevronLeftProps {
	variant: "contrast" | "solid" | "stroke";
}

export function ChevronLeft({ variant }: ChevronLeftProps) {
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
						d="M10.1058 11.7021C11.2287 10.3071 12.5381 9.06206 14 8L13.6956 12L14 16C12.5381 14.9379 11.2287 13.6929 10.1058 12.2979C9.96473 12.1226 9.96473 11.8774 10.1058 11.7021Z"
						fill="currentColor"
					/>
					<path
						d="M10.1058 11.7021C11.2287 10.3071 12.5381 9.06206 14 8C13.7974 10.6628 13.7974 13.3372 14 16C12.5381 14.9379 11.2287 13.6929 10.1058 12.2979C9.96473 12.1226 9.96473 11.8774 10.1058 11.7021Z"
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
						d="M9.32681 12.925C10.5043 14.3879 11.8765 15.6927 13.4074 16.8055C13.5934 16.9425 13.8275 17.0161 14.0759 16.9972C14.6266 16.9553 15.039 16.4749 14.9971 15.9242C14.7983 13.3119 14.7983 10.6882 14.9971 8.07593C15.039 7.52524 14.6266 7.04484 14.0759 7.00293C13.8275 6.98403 13.5934 7.05757 13.4074 7.19456C11.8765 8.30737 10.5044 9.61223 9.32681 11.0751C8.89106 11.6165 8.89106 12.3836 9.32681 12.925Z"
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
						d="M14.1252 8.13916C12.6634 9.20122 11.354 10.4462 10.231 11.8413C10.09 12.0165 10.09 12.2618 10.231 12.437C11.354 13.8321 12.6634 15.0771 14.1252 16.1392"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			);
	}
}