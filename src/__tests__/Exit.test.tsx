import { fireEvent, render, screen } from "@testing-library/react";
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
		await user.click(paymentButton);
		expect(
			screen.getByText("Digite uma placa válida. ex: AAA-0000")
		).toBeInTheDocument();
	});
	it("Error will show on click exit button without a valid plate on input", async () => {
		render(
			<GlobalContext>
				<Exit />
			</GlobalContext>
		);
		const paymentButton = await screen.findByText("SAÍDA");
		await user.click(paymentButton);
		expect(
			screen.getByText("Digite uma placa válida. ex: AAA-0000")
		).toBeInTheDocument();
	});
	it("Payment modal is open on click payment button with a valid plate", async () => {
		render(
			<GlobalContext>
				<Exit />
			</GlobalContext>
		);
		const inputPlate = await screen.findByPlaceholderText("AAA-0000");
		fireEvent.change(inputPlate, { target: { value: "AAA-2302" } });
		const paymentButton = await screen.findByText("PAGAMENTO");
		await user.click(paymentButton);
		expect(
			screen.getByText("Confirma o pagamento da placa abaixo?")
		).toBeInTheDocument();
	});
	it("Exit modal is open on click exit button with a valid plate", async () => {
		render(
			<GlobalContext>
				<Exit />
			</GlobalContext>
		);
		const inputPlate = await screen.findByPlaceholderText("AAA-0000");
		fireEvent.change(inputPlate, { target: { value: "AAA-2302" } });
		const exitButton = await screen.findByText("SAÍDA");
		await user.click(exitButton);
		expect(
			screen.getByText("Confirma a saída do veiculo da placa abaixo?")
		).toBeInTheDocument();
	});
});
