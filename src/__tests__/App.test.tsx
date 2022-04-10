import { render } from "@testing-library/react";
import App from "../App";

describe("App Tests", ()  => {
    test("Renders correctly", async () => {
        expect(render(<App />)).toBeTruthy();
    });
})
