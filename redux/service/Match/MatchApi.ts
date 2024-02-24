import { ApiFootball } from "../../api/api-football/api-football";
export const authApi = ApiFootball.injectEndpoints({
  endpoints: (builder) => ({
    fixtures: builder.query({
      query: () => ({
        url: `fixtures?include=participants;venue`,
        method: "GET",
      }),
    }),
  }),
});

export const { useFixturesQuery } = authApi;
