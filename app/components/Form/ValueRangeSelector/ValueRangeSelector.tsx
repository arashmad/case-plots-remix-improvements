import { useState } from "react";

interface IValueRangeSelector {
  minValue: number | string | undefined;
  maxValue: number | string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ValueRangeSelector: React.FC<IValueRangeSelector> = (props) => {
  const { minValue, maxValue, onChange } = props;

  const [range, setRange] = useState({
    min: minValue,
    max: maxValue,
  });

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
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
