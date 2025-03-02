export interface ChevronUpProps {
	variant: "contrast" | "solid" | "stroke";
}

export function ChevronUp({ variant }: ChevronUpProps) {
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
						d="M11.7021 10.1058C10.3071 11.2287 9.06206 12.5381 8 14L12 13.6956L16 14C14.9379 12.5381 13.6929 11.2287 12.2979 10.1058C12.1226 9.96473 11.8774 9.96473 11.7021 10.1058Z"
						fill="currentColor"
					/>
					<path
						d="M11.7021 10.1058C10.3071 11.2287 9.06206 12.5381 8 14C10.6628 13.7974 13.3372 13.7974 16 14C14.9379 12.5381 13.6929 11.2287 12.2979 10.1058C12.1226 9.96473 11.8774 9.96473 11.7021 10.1058Z"
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
						d="M12.925 9.32681C14.3879 10.5043 15.6927 11.8765 16.8055 13.4074C16.9425 13.5934 17.0161 13.8275 16.9972 14.0759C16.9553 14.6266 16.4749 15.039 15.9242 14.9971C13.3119 14.7983 10.6882 14.7983 8.07593 14.9971C7.52524 15.039 7.04484 14.6266 7.00293 14.0759C6.98403 13.8275 7.05757 13.5934 7.19456 13.4074C8.30737 11.8765 9.61223 10.5044 11.0751 9.32681C11.6165 8.89106 12.3836 8.89106 12.925 9.32681Z"
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
						d="M8 14C9.06206 12.5381 10.3071 11.2287 11.7021 10.1058C11.8774 9.96473 12.1226 9.96473 12.2979 10.1058C13.6929 11.2287 14.9379 12.5381 16 14"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			);
	}
}