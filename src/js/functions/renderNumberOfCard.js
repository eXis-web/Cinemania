import { refs } from '../list-library';
//====================make arrayCard for every page=================================
function renderNumberOfCard(array, n) {
  return array.slice(9 * n, 9 * n + 9);
}

export { renderNumberOfCard };
