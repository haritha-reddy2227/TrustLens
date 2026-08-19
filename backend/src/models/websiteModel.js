// Placeholder model for website records; in a real app this would query the DB.
module.exports = {
  create: async (data) => ({ id: Date.now(), ...data }),
};
