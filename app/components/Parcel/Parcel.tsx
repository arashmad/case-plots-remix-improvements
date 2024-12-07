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
 * @returns {ReactElement} A single parcel component
 */
const Parcel: React.FC<IParcel> = (props) => {
  const { id, title, description, location, area, value } = props;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{id}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2">
          <p className="text-gray-700">
            <span className="font-medium">Location:</span> {location}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Size:</span> {area} m²
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Value:</span>
            {`$${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Parcel;
