import { configureStore } from "@reduxjs/toolkit";
import { gqlApi } from "../src/hooks/apiGraphqlRequest";

export const store = configureStore({
  reducer: {
    [gqlApi.reducerPath]: gqlApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gqlApi.middleware),
});
