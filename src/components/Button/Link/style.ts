import { styled } from "@stitches/react";

export const Container = styled("button", {
	textAlign: "center",
	border: "none",
	variants: {
		mode: {
			tab: {
				padding: "1.4rem 5.7rem",
				fontSize: "1.6rem",
				color: "#9B9B9B",
			},
			tab_active: {
				padding: "1.4rem 5.7rem",
				fontSize: "1.6rem",
				color: "#4DD0E1",
				background: "#FFFFFF",
				borderRadius: "4px 4px 0px 0px",
				borderBottom: "3px solid #4DD0E1",
			},
			no_border: {
				fontSize: "1.5rem",
				textAlign: "center",
				fontWeight: "600",
				color: "#00BCD4",
				border: "none",
				background: "none",
			},
		},
	},
});
