import { styled } from "@stitches/react";

export const Container = styled("header", {
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	paddingInline: "0.8rem",
	background: "#4DD0E1",
	minHeight: "6rem",
	zIndex: "999999",
	"img.avatar-logo-mobile": {
		width: "4rem",
		height: "3rem",
		zIndex: "999999",
	},
	"img.avatar-logo-desktop": {
		zIndex: "999999",
		display: "none",
	},
	"@media (min-width: 768px)": {
		"img.avatar-logo-desktop": {
			display: "block",
		},
		"img.avatar-logo-mobile": {
			display: "none",
		},
	},
});

export const MenuButton = styled("button", {
	border: "none",
	background: "none",
	display: "flex",
	flexDirection: "column",
	">img": {
		width: "3.6rem",
		height: "0.3rem",
	},
	"@media (min-width: 768px)": {
		display: "none",
	},
	variants: {
		isOpened: {
			true: {
				gap: "0",
				">img": {
					"&.first-shape": {
						transition: "transform 0.4s",
						transform: "translateY(0.3rem) rotate(-45deg)",
					},
					"&.second-shape": {
						transition: "transform 0.4s",
						transform: "rotate(-45deg)",
					},
					"&.third-shape": {
						transition: "transform 0.4s",
						transform: "translateY(-0.3rem) rotate(45deg)",
					},
				},
			},
			false: {
				transition: "gap 0.5s",
				gap: "0.831rem",
				">img": {
					"&.first-shape": {
						transition: "transform 0.4s",
						transform: "rotate(0deg) translateY(0rem)",
					},
					"&.second-shape": {
						transition: "transform 0.4s",
						transform: "rotate(0)",
					},
					"&.third-shape": {
						transition: "transform 0.4s",
						transform: "rotate(0deg) translateY(0rem)",
					},
				},
			},
		},
	},
});
