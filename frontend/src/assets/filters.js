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
      switch (v) {
        case 4:
          return `${v}th`;
        case 3:
          return `${v}rd`;
        case 2:
          return `${v}nd`;
        case 1:
          return `${v}st`;
      }
    },
    statusFormatter(v) {
      switch (v) {
        case "review":
          return "Under review";
        case "approved":
          return "Approved";
        default:
          return "Rejected";
      }
    }
  }
};

export default f;
