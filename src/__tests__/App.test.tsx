import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "../App";

test("Renders main page correctly", async() => {
	render(<App />);
	expect(screen.getByText('Número da placa:')).toBeInTheDocument();
});
