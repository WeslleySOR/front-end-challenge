import { render } from "@testing-library/react";
import GlobalContext from "../contexts";

import { Exit } from "../pages/Exit/index";

jest.mock('react-router-dom', () => {
    const originalModule = jest.requireActual('react-router-dom');
  
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
});