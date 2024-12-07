import { useState } from "react";

/**
 * Interface for a value range selector component.
 *
 * @interface IValueRangeSelector
 */
interface IValueRangeSelector {
  /**
   * The minimum value of the range.
   *
   * @type {number | string | undefined}
   */
  minValue: number | string | undefined;

  /**
   * The maximum value of the range.
   *
   * @type {number | string | undefined}
   */
  maxValue: number | string | undefined;

  /**
   * Callback function called when the range changes.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event
   */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * A component that allows the user to select a range of values.
 * The component contains two input fields: one for the minimum value
 * and one for the maximum value.
 *
 * The component uses the `useState` hook to store the current range
 * selected by the user.
 *
 * The component uses the `onChange` callback function to notify the
 * parent component whenever the range is changed.
 *
 * @example
 * <ValueRangeSelector
 *   minValue={0}
 *   maxValue={100}
 *   onChange={(e) => console.log(e.target.value)}
 * />
 *
 * @param {IValueRangeSelector} props
 * @prop {number | string | undefined} minValue The minimum value of the range.
 * @prop {number | string | undefined} maxValue The maximum value of the range.
 * @prop {(e: React.ChangeEvent<HTMLInputElement>) => void} onChange The callback function called when the range changes.
 * @returns {ReactElement} A value range selector component
 */
const ValueRangeSelector: React.FC<IValueRangeSelector> = (props) => {
  const { minValue, maxValue, onChange } = props;

  const [range, setRange] = useState({
    min: minValue,
    max: maxValue,
  });

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRange({ ...range, [name]: Number(value) });
    onChange(e);
  };

  return (
    <div className="flex gap-4">
      {/* Minimum Price Input */}
      <div>
        <label
          htmlFor="minPrice"
          className="block text-sm font-medium text-gray-700"
        >
          Min Price ($)
        </label>
        <input
          id="minPrice"
          name="minPrice"
          type="number"
          placeholder={`$ ${minValue}`}
          min={minValue}
          max={maxValue}
          onChange={handleChangeValue}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      {/* Maximum Price Input */}
      <div>
        <label
          htmlFor="minPrice"
          className="block text-sm font-medium text-gray-700"
        >
          Max Price ($)
        </label>
        <input
          id="maxPrice"
          name="maxPrice"
          type="number"
          placeholder={`$ ${maxValue}`}
          min={minValue}
          max={maxValue}
          onChange={handleChangeValue}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default ValueRangeSelector;
