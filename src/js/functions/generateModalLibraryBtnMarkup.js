/**
 *
 * @param {Object} classes Classes to add to button
 * @param {String} movieId Movie ID
 * @returns {String} Button markup
 */

function generateModalLibraryBtnMarkup(classes, movieId) {
  const filmsInLibrary = localStorage.getItem('library');

  if (!filmsInLibrary) {
    return `<button type="button" data-add-to-library-btn-modal class="${classes}">Add to library</button>`;
  } else {
    const parsedFilmsInLibrary = JSON.parse(filmsInLibrary);
    const isInLibrary = parsedFilmsInLibrary.find(
      object => object.id === +movieId
    );
    return isInLibrary
      ? `<button type="button" data-remove-from-library-btn-modal class="${classes}">Remove from library</button>`
      : `<button type="button" data-add-to-library-btn-modal class="${classes}">Add to library</button>`;
  }
}

export { generateModalLibraryBtnMarkup };
