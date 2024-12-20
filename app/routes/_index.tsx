/* React */
import { useEffect, useState } from "react";

/* Remix Node Package */
import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";

/* Built-in Components*/
import ValueRangeSelector from "~/components/ValueRangeSelector";
import Parcel from "~/components/Parcel";

/* Data */
import { plots, type Plot } from "~/data/plots";

/**
 * Provides metadata for the current route.
 */
export const meta: MetaFunction = () => {
  return [
    { title: "Land Plots Listing" },
    { name: "description", content: "Browse available plots of land" },
  ];
};

/**
 * Filters the list of plots based on the query parameters in the URL.
 *
 * The query parameters are:
 * - `minPrice`: the minimum price of the plots to show
 * - `maxPrice`: the maximum price of the plots to show
 *
 * If either `minPrice` or `maxPrice` is not provided, the plots are not filtered by that parameter.
 */
export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const minPrice = url.searchParams.get("minPrice");
  const maxPrice = url.searchParams.get("maxPrice");

  let filteredPlots = [...plots];

  if (minPrice) {
    filteredPlots = filteredPlots.filter(
      (plot) => plot.price >= parseInt(minPrice)
    );
  }

  if (maxPrice) {
    filteredPlots = filteredPlots.filter(
      (plot) => plot.price <= parseInt(maxPrice)
    );
  }

  return { plots: filteredPlots };
};

/**
 * Index page component.
 *
 * This component displays a list of all available land plots.
 * The list can be filtered by price range.
 *
 */
export default function Index() {
  const { plots } = useLoaderData<{ plots: Plot[] }>();
  const [searchParams, setSearchParams] = useSearchParams();

  /**
   * States
   */
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  /**
   * Handle the change event of the price filter input field.
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event
   */
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const params = new URLSearchParams(searchParams);
    value ? params.set(name, value) : params.delete(name);
    setSearchParams(params);
  };

  /**
   * Reset the list of land plots to its original state by clearing the search parameters.
   */
  const handleResetList = () => {
    setSearchParams();
  };

  /**
   * Handing states using useEffect hook
   */
  useEffect(() => {
    const prices = plots.map((item) => item.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    setMinPrice(min);
    setMaxPrice(max);
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Available Plots
        </h1>

        {/* Price Filter Section */}
        <div className="mb-6 bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Filter by Price
          </h2>
          <ValueRangeSelector
            minValue={minPrice}
            maxValue={maxPrice}
            onChange={handleValueChange}
            onRemoveFilter={handleResetList}
          />
        </div>

        {/* List of plots */}
        {plots.length ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {plots.map((plot) => (
              <Parcel
                key={plot.id}
                title={plot.title}
                id={plot.id}
                description={plot.description}
                location={plot.location}
                area={plot.size}
                value={plot.price}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 w-full border-2 border-slate-200 rounded-2xl p-8">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                />
              </svg>
            </span>
            <h1 className="text-xl font-bold">Ooops!</h1>
            <p className="text-md">
              There is nothing to show beased on applied filter. Please adjust
              you filter to see the results.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
