const f = {
  filters: {
    nameFormatter(v) {
      const firstName = v.split(" ")[0];
      const lastName = v.split(" ")[1];
      return `${firstName.substring(0, 1).toUpperCase() +
        firstName.substring(1)} ${lastName.substring(0, 1).toUpperCase()}${lastName.substring(1)}`;
    },
    fieldFormatter(v) {
      return v.replace("-", " ");
    },
    yearFormatter(v) {
      if (v === 4) return `${v}th`;
      if (v === 3) return `${v}rd`;
      if (v === 2) return `${v}nd`;
      return `${v}st`;
    }
  }
};

export default f;
