/**
 * Interface for a value range selector component.
 *
 * @interface IValueRangeSelector
 */
export interface IValueRangeSelector {
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

  /**
   * Callback function called when the range is reset.
   */
  onRemoveFilter: () => void;
}
