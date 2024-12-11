import React, { useState } from "react";

/* Interfaces */
import { IValueRangeSelector } from "~/interfaces/ValueRangeSelector";

/**
 * ValueRangeSelector component.
 *
 * This component renders a range slider for value (e.g. price) input.
 * It also provides a reset button which resets the value to the original
 * minimum and maximum.
 *
 * @param {IValueRangeSelector} props - Component props
 * @prop {number} minValue - Minimum value of the range
 * @prop {number} maxValue - Maximum value of the range
 * @prop {function} onChange - Called when the value changes
 * @prop {function} onRemoveFilter - Called when the reset button is clicked
 * @returns {React.ReactNode} A range slider and a reset button
 */
const ValueRangeSelector: React.FC<IValueRangeSelector> = (
  props: IValueRangeSelector
): React.ReactNode => {
  const { minValue, maxValue, onChange, onRemoveFilter } = props;

  const [range, setRange] = useState({
    min: minValue,
    max: maxValue,
  });

  const [showResetFilter, setShowResetFilter] = useState(false);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRange({ ...range, [name]: Number(value) });
    setShowResetFilter(true);
    onChange(e);
  };

  const handleResetValue = () => {
    setRange({
      min: minValue,
      max: maxValue,
    });
    setShowResetFilter(false);
    onRemoveFilter();
  };

  return (
    <div className="flex items-end gap-4">
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
      {!showResetFilter ? (
        <></>
      ) : (
        <button
          onClick={handleResetValue}
          className="bg-slate-300 rounnde- p-2"
          title="Reset Filter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 font-bold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ValueRangeSelector;
