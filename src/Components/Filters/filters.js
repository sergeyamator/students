export default {
  byAscPopularity(data) {
    return data.sort((a, b) => {
      return a.popularity - b.popularity;
    });
  },

  byDescPopularity(data) {
    return data.sort((a, b) => {
      return b.popularity - a.popularity;
    });
  },

  byAscDate(data) {
    return data.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
  },

  byDescDate(data) {
    return data.sort((a, b) => {
      return new Date(b.date) -new Date(a.date);
    });
  }
};
