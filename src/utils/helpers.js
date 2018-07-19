import { MILLISECONDS_IN_ONE_DAY, DAYS_IN_WEEK } from "utils/constants";

/* 
 It's needed to create a variable 'result' because the 'setDate' function overrides it's initial value.
 Meaning that it will override the value of the 'date' variable that is passed to this function.
 In this case, the function would change the value of the input parameter, and it's not good to do that.
*/
export const getInitialDate = date => {
  let result = new Date(date);
  return new Date(result.setDate(result.getDate() - result.getDay()));
};

export const getFinalDate = date => {
  let result = new Date(date);
  return new Date(result.setDate(result.getDate() + (6 - result.getDay())));
};

export const getCurrentDate = (initDate, days) => {
  let result = new Date(initDate);
  return new Date(result.setDate(result.getDate() + days));
};

export const getNumberOfDays = (init, end) =>
  Math.ceil((end - init) / MILLISECONDS_IN_ONE_DAY) + 1;

export const getNumberOfWeeks = (init, end) =>
  getNumberOfDays(init, end) / DAYS_IN_WEEK;

export const getRange = count => Array.from({ length: count }, (_, i) => i);

/* Divide the highest 'count' in 4 sectors.
	Choose color intensity dependent on the sector the current count is in
	<25% -> really light green
	25-50% -> light green
	50-75% -> normal green
	>75% -> dark green
	Ex: maxCount = 100, so if the current count value is 40 (40% of 100), 
	the square color will be the 'light green'
	 */
export const getCountColor = (count, maxCount) => {
  let sector = maxCount / 4;
  let color = 0;
  if (count > maxCount - sector) {
    color = 4;
  } else if (count > maxCount - 2 * sector) {
    color = 3;
  } else if (count > maxCount - 3 * sector) {
    color = 2;
  } else if (count !== 0) {
    color = 1;
  }
  return color;
};
