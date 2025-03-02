export interface NotebookProps {
	variant: "contrast" | "duoSolid" | "duoStroke" | "solid" | "stroke";
}

export function Notebook({ variant }: NotebookProps) {
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
						d="M2 20.5664V5.06641C4.99481 3.35509 8.9751 3.96646 12 5.06642C15.0249 3.96646 19.0052 3.3551 22 5.06642V20.5664C18.8032 19.1964 14.9369 20.165 12 21.5C9.06309 20.165 5.19684 19.1964 2 20.5664Z"
						fill="currentColor"
					/>
					<path
						d="M12 21.5V5.06642M12 21.5C14.9369 20.165 18.8032 19.1964 22 20.5664V5.06642C19.0052 3.3551 15.0249 3.96646 12 5.06642M12 21.5C9.06309 20.165 5.19684 19.1964 2 20.5664V5.06641C4.99481 3.35509 8.9751 3.96646 12 5.06642"
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
						d="M1.50386 4.19832C4.77214 2.33074 8.92896 2.94983 12 4.0059C15.071 2.94983 19.2279 2.33075 22.4961 4.19833C22.8077 4.37638 23 4.70772 23 5.06658V20.5666C23 20.9027 22.8311 21.2164 22.5505 21.4014C22.2699 21.5865 21.915 21.6182 21.6061 21.4857C18.8115 20.2881 15.2843 21.1057 12.4138 22.4105C12.1509 22.53 11.8491 22.53 11.5862 22.4105C8.71565 21.1057 5.18847 20.2881 2.39392 21.4857C2.08496 21.6181 1.73014 21.5865 1.44951 21.4014C1.16888 21.2164 1 20.9027 1 20.5666V5.06657C1 4.70771 1.19229 4.37637 1.50386 4.19832Z"
						fill="currentColor"
					/>
					<path
						d="M12 21.5039V5"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
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
						d="M12 21.5V5.06641"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M2 20.5664V5.06641C4.99481 3.35509 8.9751 3.96646 12 5.06642C15.0249 3.96646 19.0052 3.3551 22 5.06642V20.5664C18.8032 19.1964 14.9369 20.165 12 21.5C9.06309 20.165 5.19684 19.1964 2 20.5664Z"
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
						d="M11 5.19651C11 4.30471 10.4117 3.50896 9.53792 3.33065C6.91656 2.7957 3.95942 2.79515 1.50386 4.19832C1.19229 4.37637 1 4.70771 1 5.06657V20.5666C1 20.9027 1.16888 21.2164 1.44951 21.4014C1.73014 21.5865 2.08496 21.6181 2.39392 21.4857C5.00099 20.3684 8.24568 21.0051 11 22.1549V5.19651Z"
						fill="currentColor"
					/>
					<path
						d="M13 22.1549C15.7543 21.0051 18.999 20.3684 21.6061 21.4857C21.915 21.6182 22.2699 21.5865 22.5505 21.4014C22.8311 21.2164 23 20.9027 23 20.5666V5.06658C23 4.70772 22.8077 4.37638 22.4961 4.19833C20.0406 2.79516 17.0834 2.79571 14.4621 3.33065C13.5883 3.50897 13 4.30471 13 5.19652V22.1549Z"
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
						d="M12 5.06642V21.5M12 5.06642C15.0249 3.96646 19.0052 3.3551 22 5.06642V20.5664C18.8032 19.1964 14.9369 20.165 12 21.5M12 5.06642C8.9751 3.96646 4.99481 3.35509 2 5.06641V20.5664C5.19684 19.1964 9.06309 20.165 12 21.5"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			);
	}
}