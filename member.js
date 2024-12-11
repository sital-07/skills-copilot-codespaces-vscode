function skillsMember() {
  return {
    member: {
      skills: {
        get: function() {
          return this.skills;
        },
        set: function(value) {
          this.skills = value;
        }
      }
    }
  };
}
