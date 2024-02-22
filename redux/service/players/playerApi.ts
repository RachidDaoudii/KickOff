import { ApiFootball } from "../../api/api-football/api-football";
export const authApi = ApiFootball.injectEndpoints({
  endpoints: (builder) => ({
    Players: builder.query({
      query: () => ({
        url: `players?include=nationality`,
        method: "GET",
      }),
    }),
  }),
});

export const { usePlayersQuery } = authApi;
