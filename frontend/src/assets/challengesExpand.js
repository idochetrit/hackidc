const challengesPageExpand = {
  data() {
    return {
      buttonText: "See More",
      expanded: false
    };
  },
  methods: {
    expandChallengeWrapper() {
      if (this.expanded) {
        this.buttonText = "See More";
      } else {
        this.buttonText = "See Less";
      }
      this.expanded = !this.expanded;
    }
  }
};

export default challengesPageExpand;
