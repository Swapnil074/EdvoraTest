import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // Create a new API instance

const URL = "https://assessment.api.vweb.app/";

export const EdvoraApi = createApi({
  reducerPath: "edvoraApi", // The path to the reducer
  baseQuery: fetchBaseQuery({ URL }), // The base query to use
  endpoints: (builder) => ({
    // The endpoints to create
    getRides: builder.query({
      query: () => `rides`,
    }),
    getUser: builder.query({
      query: () => `user`,
    }),
  }),
});

export const { useGetRidesQuery, useGetUserQuery } = EdvoraApi;
