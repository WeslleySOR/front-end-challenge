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
	it("Plate Number Label is correctly", async () => {
		render(
			<GlobalContext>
				<Home />
			</GlobalContext>
		);
		expect(screen.getByText("Número da placa:")).toBeInTheDocument();
	});
});
