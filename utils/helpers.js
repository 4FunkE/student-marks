module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  get_emoji: () => {
    const randomNum = Math.random();

    // Return a random emoji for each page reload.
    if (randomNum > 0.7) {
      return '<span for="img" aria-label="book">📖</span>';
    } else if (randomNum > 0.4) {
      return '<span for="img" aria-label="pencil">✏️</span>';
    } else if (randomNum > 0.1) {
      return '<span for="img" aria-label="school">🏫</span>';
    } else {
      return '<span for="img" aria-label="teacher">🤓</span>';
    }
  },
};
