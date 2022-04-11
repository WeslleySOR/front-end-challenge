import { render, screen } from "@testing-library/react";
import GlobalContext from "../contexts";

import { Home } from "../pages/Home/index";

describe("Home Tests", () => {
	it("Renders correctly", async () => {
		expect(
			render(
				<GlobalContext>
					<Home />
				</GlobalContext>
			)
		).toBeTruthy();
	});
	describe("Check if home components are on screen", () => {
		it("label with text -> Número da placa:", async () => {
			render(
				<GlobalContext>
					<Home />
				</GlobalContext>
			);
			expect(screen.getByText("Número da placa:")).toBeInTheDocument();
		});
		it("input with placeholder text -> AAA-0000", async () => {
			render(
				<GlobalContext>
					<Home />
				</GlobalContext>
			);
			expect(screen.getByPlaceholderText("AAA-0000")).toBeInTheDocument();
		});
		it("button with text -> CONFIRMAR ENTRADA", async () => {
			render(
				<GlobalContext>
					<Home />
				</GlobalContext>
			);
			expect(screen.getByText("CONFIRMAR ENTRADA")).toBeInTheDocument();
		});
	});
});
