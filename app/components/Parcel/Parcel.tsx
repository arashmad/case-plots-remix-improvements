import React from "react";

/* Interfaces */
import { IParcel } from "~/interfaces/Parcel";

/**
 * A single parcel component.
 *
 * @example
 * <Parcel
 *   id="1"
 *   title="Schwarzwald Naturgrundstück"
 *   description="Waldgrundstück mit hoher Artenvielfalt und altem Baumbestand"
 *   location="Schwarzwald, Baden-Württemberg"
 *   area={2500}
 *   value={175000}
 * />
 *
 * @param {IParcel} props
 * @prop {string} id Unique id for parcel
 * @prop {string} title Title of parcel
 * @prop {string} description Description of parcel
 * @prop {string} location Location of parcel
 * @prop {number} area Area of parcel in square meters
 * @prop {number} value Value of parcel in dollars
 * @returns {React.ReactNode} A single parcel component
 */
const Parcel: React.FC<IParcel> = (props: IParcel): React.ReactNode => {
  const { id, title, description, location, area, value } = props;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="mb-3 border-b-2">
          <h2 className="text-l font-semibold text-gray-900 mb-2">{title}</h2>
        </div>
        <h3 className="text-l font-semibold text-gray-900 mb-2">ID: {id}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2">
          <p className="flex gap-2 text-gray-700">
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
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </span>
            <span className="font-medium">{location}</span>
          </p>
          <p className="flex gap-2 text-gray-700">
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
                  d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                />
              </svg>
            </span>
            <span className="font-medium">{area} m²</span>
          </p>
          <p className="flex gap-2 text-gray-700">
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
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
            <span className="font-medium">
              {`$${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Parcel;
