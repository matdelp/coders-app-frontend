import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { useAuth } from "../store/useAuthStore";

export const gqlApi = createApi({
  reducerPath: "api",
  baseQuery: graphqlRequestBaseQuery({
    url: "http://localhost:3000/graphql/",
    prepareHeaders: (headers) => {
      const token = useAuth.getState().token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<
      { categories: { name: string; count: number }[] },
      void
    >({
      query: () => ({
        document: `
      query GetAllCategories {
        categories {
          name
          count
        }
      }
    `,
      }),
    }),
  }),
});

export const { useGetCategoriesQuery } = gqlApi;
