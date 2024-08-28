import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/signin",
        method: "POST",
        credentials: "include",
        body: userInfo,
      }),
    }),
    signup: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/signup",
        method: "POST",
        credentials: "include",
        body: userInfo,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
