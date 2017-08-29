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
      const firstDate = a.release_date || a.last_air_date || a.first_air_date || 0;
      const secondDate = b.release_date || b.last_air_date || b.first_air_date || 0;

      return new Date(firstDate) - new Date(secondDate);
    });
  },

  byDescDate(data) {
    return data.sort((a, b) => {
      const firstDate = a.release_date || a.last_air_date || a.first_air_date || 0;
      const secondDate = b.release_date || b.last_air_date || b.first_air_date || 0;

      return new Date(secondDate) - new Date(firstDate);
    });
  }
};
