import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { useAuth } from "../store/useAuthStore";

export const gqlApi = createApi({
  reducerPath: "api",
  baseQuery: graphqlRequestBaseQuery({
    url: "http://localhost:3000/graphql",
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
    getChallenges: builder.query<
      {
        challenges: {
          status: string;
          title: string;
          category: string;
          level: string;
          submission: { status: string }[];
        }[];
      },
      void
    >({
      query: () => ({
        document: `query GetAllChallenges {
            challenges {
            title
            category
            level
            submission {status}
            }
        }
    `,
      }),
    }),
    getOneChallenge: builder.query<
      {
        challenge: {
          title: string;
          level: string;
          description: string;
          category: string;
          code: {
            function_name: string;
            code_text: { language: string; content: string }[];
            inputs: { name: string; type: string }[];
          };
          test: {
            weight: number;
            inputs: { name: string; value: string }[];
            outputs: string;
          }[];
          submission: {
            status: string;
            lang: string;
            code: string;
            challenge_id: string;
            coder_id: string;
          }[];
        };
      },
      string
    >({
      query: (id) => ({
        document: `
      query GetOneChallenge($id: ID!) {
        challenge: oneChallenge(id: $id) {
          title
          level
          description
          category
          code {
            function_name
            code_text {
              language
              content
            }
            inputs {
              name
              type
            }
          }
          test {
            weight
            inputs {
              name
              value
            }
            outputs
          }
          submission {
            status
            lang
            code
            challenge_id
            coder_id
          }
        }
      }
    `,
        variables: { id },
      }),
    }),
  }),
});

export const { useGetCategoriesQuery } = gqlApi;
export const { useGetChallengesQuery } = gqlApi;
export const { useGetOneChallengeQuery } = gqlApi;
