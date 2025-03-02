export interface MusicBeamNoteProps {
	variant: "contrast" | "duoSolid" | "duoStroke" | "solid" | "stroke";
}

export function MusicBeamNote({ variant }: MusicBeamNoteProps) {
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
					<g opacity="0.28">
						<path
							d="M9.2687 6.0016L19.9515 1.80478C20.9356 1.4182 22 2.14366 22 3.20091V6.50002L8 12V7.86311C8 7.04079 8.50333 6.30228 9.2687 6.0016Z"
							fill="currentColor"
						/>
						<path
							d="M19 13C17.3431 13 16 14.3431 16 16C16 17.6569 17.3431 19 19 19C20.6569 19 22 17.6569 22 16C22 14.3431 20.6569 13 19 13Z"
							fill="currentColor"
						/>
						<path
							d="M5 16C3.34315 16 2 17.3431 2 19C2 20.6569 3.34315 22 5 22C6.65685 22 8 20.6569 8 19C8 17.3431 6.65685 16 5 16Z"
							fill="currentColor"
						/>
					</g>
					<path
						d="M8 12V7.86311C8 7.04079 8.50333 6.30228 9.2687 6.0016L19.9515 1.80478C20.9356 1.4182 22 2.14366 22 3.20091V6.50002M8 12V19M8 12L22 6.50002M8 19C8 20.6569 6.65685 22 5 22C3.34315 22 2 20.6569 2 19C2 17.3432 3.34315 16 5 16C6.65685 16 8 17.3432 8 19ZM22 6.50002V16M22 16C22 17.6569 20.6569 19 19 19C17.3431 19 16 17.6569 16 16C16 14.3432 17.3431 13 19 13C20.6569 13 22 14.3432 22 16Z"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			);

		case "duoSolid":
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
						d="M21 16V7.96726L9 12.6816V19C9 19.5523 8.55228 20 8 20C7.44772 20 7 19.5523 7 19V7.86309C7 6.62962 7.75499 5.52186 8.90304 5.07084L19.5859 0.874015C21.2259 0.229709 23 1.43882 23 3.20089V16C23 16.5523 22.5523 17 22 17C21.4477 17 21 16.5523 21 16Z"
						fill="currentColor"
					/>
					<path
						d="M19 12C16.7909 12 15 13.7909 15 16C15 18.2091 16.7909 20 19 20C21.2091 20 23 18.2091 23 16C23 13.7909 21.2091 12 19 12Z"
						fill="currentColor"
					/>
					<path
						d="M5 15C2.79086 15 1 16.7909 1 19C1 21.2091 2.79086 23 5 23C7.20914 23 9 21.2091 9 19C9 16.7909 7.20914 15 5 15Z"
						fill="currentColor"
					/>
				</svg>
			);

		case "duoStroke":
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
						d="M8 12V7.86311C8 7.04079 8.50333 6.30228 9.2687 6.0016L19.9515 1.80478C20.9356 1.4182 22 2.14366 22 3.20091V6.50002M8 12V19M8 12L22 6.50002M22 6.50002V16"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M2 19C2 17.3431 3.34315 16 5 16C6.65685 16 8 17.3431 8 19C8 20.6569 6.65685 22 5 22C3.34315 22 2 20.6569 2 19Z"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M16 16C16 14.3431 17.3431 13 19 13C20.6569 13 22 14.3431 22 16C22 17.6569 20.6569 19 19 19C17.3431 19 16 17.6569 16 16Z"
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
						d="M21 7.96726L9 12.6816V19C9 21.2091 7.20914 23 5 23C2.79086 23 1 21.2091 1 19C1 16.7909 2.79086 15 5 15C5.72857 15 6.41165 15.1948 7 15.5351V7.86309C7 6.62962 7.75499 5.52186 8.90304 5.07084L19.5859 0.874015C21.2259 0.229709 23 1.43882 23 3.20089V16C23 18.2091 21.2091 20 19 20C16.7909 20 15 18.2091 15 16C15 13.7909 16.7909 12 19 12C19.7286 12 20.4117 12.1948 21 12.5351V7.96726Z"
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
						d="M8 12V7.86311C8 7.04079 8.50333 6.30228 9.2687 6.0016L19.9515 1.80478C20.9356 1.4182 22 2.14366 22 3.20091V6.50002M8 12V19M8 12L22 6.50002M8 19C8 20.6569 6.65685 22 5 22C3.34315 22 2 20.6569 2 19C2 17.3432 3.34315 16 5 16C6.65685 16 8 17.3432 8 19ZM22 6.50002V16M22 16C22 17.6569 20.6569 19 19 19C17.3431 19 16 17.6569 16 16C16 14.3432 17.3431 13 19 13C20.6569 13 22 14.3432 22 16Z"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			);
	}
}