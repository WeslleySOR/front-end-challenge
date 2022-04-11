import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
	"*": {
		margin: 0,
		padding: 0,
		boxSizing: "border-box",
	},
	body: {
		maxHeight: "100vh",
		background: "#F2F2F2",
	},
	html: {
		fontSize: "62.5%",
		scrollBehavior: "smooth",
		fontFamily: "Open Sans, sans-serif",
	},
	button: {
		fontFamily: "Open Sans, sans-serif",
		cursor: "pointer",
	},
	".react-modal-overlay": {
		background: "rgba(0, 0, 0, 0.5)",
		position: "fixed",
		top: "0",
		bottom: "0",
		right: "0",
		left: "0",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		paddingInline: "1rem",
	},
	".exit-modal-container": {
		width: "100%",
		background: "rgba(255,255,255,255.95)",
		padding: "2.8rem 3rem",
		position: "relative",
		borderRadius: "0.4rem",
		display: "flex",
		flexDirection: "column",
		gap: "2.4rem",
		".box-info": {
			display: "flex",
			flexDirection: "column",
			gap: "0.3rem",
			span: {
				"&:first-of-type": {
					color: "#4A4A4A",
					fontSize: "1.6rem",
					textAlign: "center",
				},
				"&:last-of-type": {
					color: "#00BCD4",
					fontSize: "3.8rem",
					textAlign: "center",
					lineHeight: "4.5rem",
					textTransform: "uppercase",
				},
			},
		},
		button: {
			width: "100%",
		},
		"@media (min-width: 768px)": {
			width: "60%",
		},
	},
	".payment-modal-container": {
		width: "100%",
		background: "rgba(255,255,255,255.95)",
		padding: "2.8rem 3rem",
		position: "relative",
		borderRadius: "0.4rem",
		display: "flex",
		flexDirection: "column",
		gap: "2.4rem",
		".box-info": {
			display: "flex",
			flexDirection: "column",
			gap: "0.3rem",
			span: {
				"&:first-of-type": {
					color: "#4A4A4A",
					fontSize: "1.6rem",
					textAlign: "center",
				},
				"&:last-of-type": {
					color: "#00BCD4",
					fontSize: "3.8rem",
					textAlign: "center",
					lineHeight: "4.5rem",
					textTransform: "uppercase",
				},
			},
		},
		button: {
			width: "100%",
		},
		"@media (min-width: 768px)": {
			width: "60%",
		},
	}
});
