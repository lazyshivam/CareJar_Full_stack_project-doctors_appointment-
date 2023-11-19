// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const url='http://localhost:8000';
// Define a service using a base URL and expected endpoints
export const fakerApi = createApi({
  reducerPath: 'fakerApi',
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getDoctorsCategory: builder.query({
      query: () => `/categories`,
    }),
    getDoctorsByCategory: builder.query({
        query: (category) => `/doctors/${category}`,
      }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDoctorsCategoryQuery,useGetDoctorsByCategoryQuery } = fakerApi