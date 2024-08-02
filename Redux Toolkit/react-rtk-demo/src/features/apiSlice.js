import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users",
    }),
    getOneUser: builder.query({
        query: (user=> `users/search?q=${user}`)
    })
  }),
});

export const { useGetUsersQuery, useGetOneUserQuery } = usersApi