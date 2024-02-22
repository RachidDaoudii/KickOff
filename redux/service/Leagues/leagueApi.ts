import { ApiFootball } from "../../api/api-football/api-football";
export const authApi = ApiFootball.injectEndpoints({
  endpoints: (builder) => ({
    leagues: builder.query({
      query: () => ({
        url: `leagues`,
        method: "GET",
      }),
    }),
  }),
});

export const { useLeaguesQuery } = authApi;
