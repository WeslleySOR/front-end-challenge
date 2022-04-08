import { styled } from "@stitches/react";

export const Container = styled("button", {
	borderRadius: "0.4rem",
	paddingBlock: "2.4rem",
	fontWeight: "bold",
	fontSize: "1.5rem",
	textAlign: "center",
	variants: {
		mode: {
			entrance: {
				border: "none",
				transition: "background 0.2s, color 0.2s",
				background: "#DADADA",
				color: "#9B9B9B",
				cursor: "not-allowed",
			},
			entrance_active: {
				border: "none",
				transition: "background 0.2s, color 0.2s",
				background: "#28DD91",
				color: "#FFFFFF",
				cursor: "pointer",
			},
			exit_primary: {
				border: "none",
				transition: "background 0.2s, color 0.2s",
				background: "#DADADA",
				color: "#9B9B9B",
				cursor: "not-allowed",
			},
			exit_primary_active: {
				border: "none",
				transition: "background 0.2s, color 0.2s",
				background: "#A769B2",
				color: "#FFFFFF",
				cursor: "pointer",
			},
			exit_secondary: {
				background: "transparent",
				transition: "border 0.2s, color 0.2s",
				border: "2px solid #DADADA",
				color: "#9B9B9B",
				cursor: "not-allowed",
			},
			exit_secondary_active: {
				background: "transparent",
				transition: "border 0.2s, color 0.2s",
				border: "2px solid #A769B2",
				color: "#A769B2",
				cursor: "pointer",
			},
		},
	},
});
