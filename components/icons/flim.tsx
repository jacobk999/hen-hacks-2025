export interface FilmProps {
	variant: "contrast" | "duoSolid" | "duoStroke" | "solid" | "stroke";
}

export function Film({ variant }: FilmProps) {
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
						d="M3 11C3 8.19974 3 6.79961 3.54497 5.73005C4.02433 4.78924 4.78924 4.02433 5.73005 3.54497C6.79961 3 8.19974 3 11 3H13C15.8003 3 17.2004 3 18.27 3.54497C19.2108 4.02433 19.9757 4.78924 20.455 5.73005C21 6.79961 21 8.19974 21 11V13C21 15.8003 21 17.2004 20.455 18.27C19.9757 19.2108 19.2108 19.9757 18.27 20.455C17.2004 21 15.8003 21 13 21H11C8.19974 21 6.79961 21 5.73005 20.455C4.78924 19.9757 4.02433 19.2108 3.54497 18.27C3 17.2004 3 15.8003 3 13V11Z"
						fill="currentColor"
					/>
					<path
						d="M21 12V11C21 9.75432 21 8.7857 20.952 8M21 12V13C21 14.2457 21 15.2143 20.952 16M21 12H16M3 12V13C3 14.2457 3 15.2143 3.04797 16M3 12V11C3 9.75432 3 8.7857 3.04797 8M3 12H8M8 20.952C8.7857 21 9.75431 21 11 21H13C14.2457 21 15.2143 21 16 20.952M8 20.952C7.01947 20.8922 6.32382 20.7576 5.73005 20.455C4.78924 19.9757 4.02433 19.2108 3.54497 18.27C3.24243 17.6762 3.10784 16.9805 3.04797 16M8 20.952V16M3.04797 16H8M20.952 16C20.8922 16.9805 20.7576 17.6762 20.455 18.27C19.9757 19.2108 19.2108 19.9757 18.27 20.455C17.6762 20.7576 16.9805 20.8922 16 20.952M20.952 16H16M16 20.952L16 16M16 3.04797C15.2143 3 14.2457 3 13 3H11C9.75431 3 8.7857 3 8 3.04797M16 3.04797C16.9805 3.10784 17.6762 3.24243 18.27 3.54497C19.2108 4.02433 19.9757 4.78924 20.455 5.73005C20.7576 6.32382 20.8922 7.01947 20.952 8M16 3.04797L16 8M20.952 8H16M8 3.04797C7.01947 3.10784 6.32382 3.24243 5.73005 3.54497C4.78924 4.02433 4.02433 4.78924 3.54497 5.73005C3.24243 6.32382 3.10784 7.01947 3.04797 8M8 3.04797L8 8M3.04797 8H8M8 8L8 12M8 12V16M8 12H16M16 8L16 12M16 12L16 16"
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
					<g opacity="0.28">
						<path
							d="M7 2.14136C6.3692 2.23173 5.80425 2.3849 5.27606 2.65403C4.14709 3.22927 3.2292 4.14715 2.65396 5.27612C2.29768 5.97537 2.14462 6.73904 2.07144 7.63464C2.06369 7.72954 2.05678 7.82691 2.05062 7.92683L2.04922 7.94969C1.99999 8.76617 1.99999 9.75237 2 10.9562V13.0438C1.99999 14.2477 1.99999 15.234 2.04922 16.0504L2.05062 16.0733C2.05678 16.1732 2.06369 16.2706 2.07144 16.3655C2.14462 17.2611 2.29768 18.0248 2.65396 18.724C3.2292 19.853 4.14709 20.7709 5.27606 21.3461C5.80425 21.6152 6.3692 21.7684 7 21.8588L7 19.8312C6.66334 19.7651 6.40563 19.677 6.18404 19.5641C5.43139 19.1806 4.81947 18.5687 4.43598 17.816C4.32307 17.5944 4.23496 17.3367 4.16889 17.0001H7V15.0001H4.01122C4.00024 14.4377 4 13.782 4 13.0001H7V11.0001H4C4 10.2181 4.00024 9.56244 4.01122 9.00007H7V7.00007H4.16889C4.23496 6.66341 4.32307 6.4057 4.43598 6.1841C4.81947 5.43146 5.43139 4.81953 6.18404 4.43604C6.40563 4.32313 6.66334 4.23503 7 4.16895L7 2.14136Z"
							fill="currentColor"
						/>
						<path
							d="M17 21.8588C17.6308 21.7684 18.1958 21.6152 18.7239 21.3461C19.8529 20.7709 20.7708 19.853 21.346 18.724C21.7023 18.0248 21.8554 17.2611 21.9286 16.3655C21.9363 16.2706 21.9432 16.1732 21.9494 16.0732L21.9508 16.0505C22 15.234 22 14.2478 22 13.0438V10.9563C22 9.75236 22 8.76612 21.9508 7.9496L21.9494 7.92692C21.9432 7.82697 21.9363 7.72957 21.9286 7.63464C21.8554 6.73904 21.7023 5.97537 21.346 5.27612C20.7708 4.14715 19.8529 3.22927 18.7239 2.65403C18.1958 2.3849 17.6308 2.23173 17 2.14136V4.16895C17.3367 4.23503 17.5944 4.32313 17.816 4.43604C18.5686 4.81953 19.1805 5.43146 19.564 6.1841C19.6769 6.4057 19.765 6.66341 19.8311 7.00007H17V9.00007H19.9888C19.9998 9.56244 20 10.2181 20 11.0001H17V13.0001H20C20 13.782 19.9998 14.4377 19.9888 15.0001H17V17.0001H19.8311C19.765 17.3367 19.6769 17.5944 19.564 17.816C19.1805 18.5687 18.5686 19.1806 17.816 19.5641C17.5944 19.677 17.3367 19.7651 17 19.8312V21.8588Z"
							fill="currentColor"
						/>
					</g>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M7 21.8587C7.20429 21.888 7.41549 21.9107 7.63458 21.9286C7.72951 21.9363 7.8269 21.9432 7.92685 21.9494L7.94954 21.9508C8.76606 22 9.7523 22 10.9562 22H13.0438C14.2477 22 15.234 22 16.0505 21.9508L16.0731 21.9494C16.1731 21.9432 16.2705 21.9363 16.3654 21.9286C16.5845 21.9107 16.7957 21.888 17 21.8587V2.14129C16.7957 2.11202 16.5845 2.08934 16.3654 2.07144C16.2705 2.06369 16.1732 2.05678 16.0732 2.05061L16.0504 2.04922C15.2339 1.99999 14.2477 1.99999 13.0438 2H10.9562C9.75236 1.99999 8.76612 1.99999 7.94963 2.04922L7.92677 2.05061C7.82685 2.05678 7.72948 2.06369 7.63458 2.07144C7.41549 2.08934 7.20429 2.11202 7 2.14129V21.8587ZM7.9 12C7.9 11.4477 8.34772 11 8.9 11H15.1C15.6523 11 16.1 11.4477 16.1 12C16.1 12.5523 15.6523 13 15.1 13H8.9C8.34772 13 7.9 12.5523 7.9 12Z"
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
						d="M20.952 8H16M8 8H3.04797M20.952 16H16M8 16H3.04797M21 12H3"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M13 3H11C8.19974 3 6.79961 3 5.73005 3.54497C4.78924 4.02433 4.02433 4.78924 3.54497 5.73005C3 6.79961 3 8.19974 3 11V13C3 15.8003 3 17.2004 3.54497 18.27C4.02433 19.2108 4.78924 19.9757 5.73005 20.455C6.79961 21 8.19974 21 11 21H13C15.8003 21 17.2004 21 18.27 20.455C19.2108 19.9757 19.9757 19.2108 20.455 18.27C21 17.2004 21 15.8003 21 13V11C21 8.19974 21 6.79961 20.455 5.73005C19.9757 4.78924 19.2108 4.02433 18.27 3.54497C17.2004 3 15.8003 3 13 3Z"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M8 3.04797V20.952M16 3.04797V20.952"
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
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M10.9562 2C9.75236 1.99999 8.76613 1.99999 7.94962 2.04922L7.92677 2.05061C7.82684 2.05678 7.72948 2.06369 7.63458 2.07144C6.73898 2.14462 5.9753 2.29768 5.27606 2.65396C4.14708 3.2292 3.2292 4.14708 2.65396 5.27606C2.29768 5.9753 2.14462 6.73898 2.07144 7.63458C2.06369 7.72948 2.05678 7.82685 2.05061 7.92677L2.04922 7.94963C1.99999 8.76613 1.99999 9.75236 2 10.9562V13.0438C1.99999 14.2476 1.99999 15.2339 2.04922 16.0504L2.05061 16.0732C2.05678 16.1732 2.06369 16.2705 2.07144 16.3654C2.14462 17.261 2.29768 18.0247 2.65396 18.7239C3.2292 19.8529 4.14709 20.7708 5.27606 21.346C5.9753 21.7023 6.73898 21.8554 7.63458 21.9286C7.72951 21.9363 7.8269 21.9432 7.92685 21.9494L7.94954 21.9508C8.76605 22 9.7523 22 10.9562 22H13.0438C14.2477 22 15.234 22 16.0505 21.9508L16.0731 21.9494C16.1731 21.9432 16.2705 21.9363 16.3654 21.9286C17.261 21.8554 18.0247 21.7023 18.7239 21.346C19.8529 20.7708 20.7708 19.8529 21.346 18.7239C21.7023 18.0247 21.8554 17.261 21.9286 16.3654C21.9363 16.2705 21.9432 16.1731 21.9494 16.0731L21.9508 16.0505C22 15.2339 22 14.2477 22 13.0438V10.9562C22 9.7523 22 8.76605 21.9508 7.94954L21.9494 7.92686C21.9432 7.8269 21.9363 7.72951 21.9286 7.63458C21.8554 6.73898 21.7023 5.9753 21.346 5.27606C20.7708 4.14709 19.8529 3.2292 18.7239 2.65396C18.0247 2.29768 17.261 2.14462 16.3654 2.07144C16.2705 2.06369 16.1732 2.05678 16.0732 2.05061L16.0504 2.04922C15.2339 1.99999 14.2476 1.99999 13.0438 2H10.9562ZM6.18404 4.43597C6.40563 4.32307 6.66334 4.23496 7 4.16889V7H4.16889C4.23496 6.66334 4.32307 6.40563 4.43597 6.18404C4.81947 5.43139 5.43139 4.81947 6.18404 4.43597ZM4.01122 9H7V11H4C4 10.2181 4.00024 9.56237 4.01122 9ZM4 13H7V15H4.01122C4.00024 14.4376 4 13.7819 4 13ZM4.16889 17H7V19.8311C6.66334 19.765 6.40563 19.6769 6.18404 19.564C5.43139 19.1805 4.81947 18.5686 4.43597 17.816C4.32307 17.5944 4.23496 17.3367 4.16889 17ZM17.816 19.564C17.5944 19.6769 17.3367 19.765 17 19.8311V17H19.8311C19.765 17.3367 19.6769 17.5944 19.564 17.816C19.1805 18.5686 18.5686 19.1805 17.816 19.564ZM19.9888 15H17V13H20C20 13.7819 19.9998 14.4376 19.9888 15ZM20 11H17V9H19.9888C19.9998 9.56237 20 10.2181 20 11ZM19.8311 7H17V4.16889C17.3367 4.23496 17.5944 4.32307 17.816 4.43597C18.5686 4.81947 19.1805 5.43139 19.564 6.18404C19.6769 6.40563 19.765 6.66334 19.8311 7ZM8.9 11C8.34772 11 7.9 11.4477 7.9 12C7.9 12.5523 8.34772 13 8.9 13H15.1C15.6523 13 16.1 12.5523 16.1 12C16.1 11.4477 15.6523 11 15.1 11H8.9Z"
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
						d="M8 3.04797V20.952M16 3.04797V20.952M21 12H3M20.952 8H16M8 8H3.04797M20.952 16H16M8 16H3.04797M11 21H13C15.8003 21 17.2004 21 18.27 20.455C19.2108 19.9757 19.9757 19.2108 20.455 18.27C21 17.2004 21 15.8003 21 13V11C21 8.19974 21 6.79961 20.455 5.73005C19.9757 4.78924 19.2108 4.02433 18.27 3.54497C17.2004 3 15.8003 3 13 3H11C8.19974 3 6.79961 3 5.73005 3.54497C4.78924 4.02433 4.02433 4.78924 3.54497 5.73005C3 6.79961 3 8.19974 3 11V13C3 15.8003 3 17.2004 3.54497 18.27C4.02433 19.2108 4.78924 19.9757 5.73005 20.455C6.79961 21 8.19974 21 11 21Z"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			);
	}
}