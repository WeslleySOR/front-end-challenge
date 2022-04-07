import { styled } from "@stitches/react";

export const Container = styled("div", {
	display: "flex",
	flexDirection: "column",
	gap: "0.7rem",
	span: {
		fontWeight: "400",
		fontSize: "1.6rem",
		color: "#9B9B9B",
	},
	input: {
		padding: "1.7rem 10.3rem",
		border: "1px solid #CCCCCC",
		borderRadius: "0.4rem",
		textAlign: "center",
		textTransform: "uppercase",
		fontSize: "2.4rem",
		background: "#FFFBE6",
		color: "#0A261D",
		"&::placeholder": {
			color: "#9B9B9B",
		},
	},
	".error-box": {
		display: "flex",
		gap: "1.2rem",
		alignItems: "center",
		paddingInline: "1.2rem",
		height: "3.2rem",
		background: "rgba(255, 23, 68, 0.15)",
		borderRadius: "0.4rem",
		"> span": {
			color: "#000",
		},
	},
	variants: {
		error: {
			true: {
				input: {
					color: "#FF0068",
				},
			},
		},
	},
});
