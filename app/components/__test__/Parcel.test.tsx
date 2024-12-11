import { render, screen } from "@testing-library/react";
import Parcel from "../Parcel";

describe("Parcel Component", () => {
  it("renders correctly with all props", () => {
    const props = {
      id: "1",
      title: "Test Parcel",
      description: "A beautiful plot of land.",
      location: "Berlin, Germany",
      area: 2000,
      value: 500000,
    };

    render(<Parcel {...props} />);

    expect(screen.getByText("Test Parcel")).toBeInTheDocument();
    expect(screen.getByText("A beautiful plot of land.")).toBeInTheDocument();
    expect(screen.getByText("Berlin, Germany")).toBeInTheDocument();
    expect(screen.getByText("2,000 m²")).toBeInTheDocument();
    expect(screen.getByText("$500,000")).toBeInTheDocument();
  });
});
