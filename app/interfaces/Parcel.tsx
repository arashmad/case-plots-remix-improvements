/**
 * Interface representing a parcel.
 *
 * @interface IParcel
 */
export interface IParcel {
  /**
   * Unique identifier for the parcel.
   *
   * @type {string}
   */
  id: string;

  /**
   * Title of the parcel.
   *
   * @type {string}
   */
  title: string;

  /**
   * Description of the parcel.
   *
   * @type {string}
   */
  description: string;

  /**
   * Location of the parcel.
   *
   * @type {string}
   */
  location: string;

  /**
   * Area of the parcel.
   *
   * @type {number}
   */
  area: number;

  /**
   * Value of the parcel.
   *
   * @type {number}
   */
  value: number;
}
