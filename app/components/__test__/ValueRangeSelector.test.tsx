import { render, screen, fireEvent } from "@testing-library/react";
import ValueRangeSelector from "../ValueRangeSelector";

describe("ValueRangeSelector Component", () => {
  it("renders correctly with min and max values", () => {
    const handleChange = jest.fn();
    render(
      <ValueRangeSelector minValue={0} maxValue={100} onChange={handleChange} />
    );

    expect(screen.getByLabelText(/Min Price/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Max Price/i)).toBeInTheDocument();
  });

  it("calls onChange when input values are changed", () => {
    const handleChange = jest.fn();
    render(
      <ValueRangeSelector minValue={0} maxValue={100} onChange={handleChange} />
    );

    const minInput = screen.getByLabelText(/Min Price/i);
    fireEvent.change(minInput, { target: { value: "10" } });
    expect(handleChange).toHaveBeenCalled();
  });
});
