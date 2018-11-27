import _ from "lodash";

const f = {
  filters: {
    nameFormatter(v) {
      return _.startCase(_.camelCase(v));
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
