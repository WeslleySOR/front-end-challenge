import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import GlobalContext from "../contexts";

import { Exit } from "../pages/Exit/index";

jest.mock("react-router-dom", () => {
	const originalModule = jest.requireActual("react-router-dom");

	return {
		__esModule: true,
		...originalModule,
		useNavigate: jest.fn(),
		useLocate: jest.fn(),
	};
});

describe("Exit Tests", () => {
	it("Renders correctly", async () => {
		expect(
			render(
				<GlobalContext>
					<Exit />
				</GlobalContext>
			)
		).toBeTruthy();
	});
	it("Error will show on click payment button without a valid plate on input", async () => {
		render(
			<GlobalContext>
				<Exit />
			</GlobalContext>
		);
		const paymentButton = await screen.findByText("PAGAMENTO");
		await user.click(paymentButton)
		expect(screen.getByText("Digite uma placa válida. ex: AAA-0000")).toBeInTheDocument()
	});
	it("Error will show on click exit button without a valid plate on input", async () => {
		render(
			<GlobalContext>
				<Exit />
			</GlobalContext>
		);
		const paymentButton = await screen.findByText("SAÍDA");
		await user.click(paymentButton)
		expect(screen.getByText("Digite uma placa válida. ex: AAA-0000")).toBeInTheDocument()
	});
});
