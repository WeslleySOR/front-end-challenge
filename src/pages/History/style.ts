import { styled } from "@stitches/react";

export const Container = styled("div", {
	display: "flex",
	flexDirection: "column",
	background: "#FFFFFF",
	alignItems: "center",
	width: "100%",
	padding: "36px 16px 20px 16px",
});

export const NavigationBar = styled("div", {
	width: "100%",
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-start",
	gap: "1.2rem",
	paddingInline: "1.6rem",
	marginBottom: "2rem",
	button: {
		background: "none",
		border: "none",
	},
	span: {
		fontSize: "2.4rem",
		color: "#00BCD4",
		span: {
			textTransform: "uppercase",
		},
	},
});

export const Content = styled("div", {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	gap: "1.6rem",
	paddingInline: "1.6rem",
	height: "100%",
	width: "100%",
});

export const DataContent = styled("div", {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	gap: "3rem",
	paddingInline: "1.6rem",
	height: "100%",
	width: "100%",
	">div": {
		display: "flex",
		flexDirection: "column",
		gap: "0.1rem",
		strong: {
			fontSize: "3.8rem",
			fontWeight: "400",
			color: "#00BCD4",
		},
		span: {
			"&:first-of-type": {
				fontSize: "1.2rem",
				color: "#9b9b9b",
			},
			"&:last-of-type": {
				fontSize: "2.4rem",
				color: "#0a261d",
			},
		},
	},
});
