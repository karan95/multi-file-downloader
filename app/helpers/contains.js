import { helper } from '@ember/component/helper';
/**
 * custom helper function to check whether arr contains an item
 * @return true/false
 */
export default helper(function contains(params/*, hash*/) {
  if (params.length > 0 && params[0]) {
    return params[0].includes(parseInt(params[1]));
  }
  return false;
});
