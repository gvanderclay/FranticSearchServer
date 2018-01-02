import * as mtg from "mtgsdk";

export default {
  Query: {
    cardSearch: async (obj, args, context) => {
      const cards = await mtg.card.where({ name: args.name });
      return cards;
    }
  }
};
