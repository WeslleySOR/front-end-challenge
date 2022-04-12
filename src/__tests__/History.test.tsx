import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import GlobalContext from "../contexts";

import { History } from "../pages/History/index";

jest.mock("react-router-dom", () => {
	const originalModule = jest.requireActual("react-router-dom");

	return {
		__esModule: true,
		...originalModule,
		useNavigate: jest.fn(),
		useLocate: jest.fn(),
	};
});

describe("History Tests", () => {
	it("Renders correctly", async () => {
		expect(
			render(
				<GlobalContext>
					<MemoryRouter initialEntries={["/history/aaa-2302"]}>
						<History />
					</MemoryRouter>
				</GlobalContext>
			)
		).toBeTruthy();
	});
});
