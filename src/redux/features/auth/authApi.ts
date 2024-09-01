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
    // getProfile: builder.query
    updateProfile: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/update-profile",
        method: "PUT",
        credentials: "include",
        body: userInfo,
      }),
      // invalidatesTags: ["user"],
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: "/auth/users",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["user"],
    }),
    changeStatus: builder.mutation({
      query: (user) => ({
        url: "/auth/user-status-update",
        method: "PUT",
        credentials: "include",
        body: user,
      }),
      invalidatesTags: ["user"],
    }),
    makeAdmin: builder.mutation({
      query: (user) => ({
        url: "/auth/make-admin",
        method: "PUT",
        credentials: "include",
        body: user,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useUpdateProfileMutation,
  useGetAllUsersQuery,
  useChangeStatusMutation,
  useMakeAdminMutation,
} = authApi;
