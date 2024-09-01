import { baseApi } from "../../api/baseApi";

const carsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCars: builder.query({
      query: () => ({
        url: "/cars",
      }),
      providesTags: ["cars"],
    }),
    getSingleCar: builder.query({
      query: (carId) => ({
        url: `/cars/${carId}`,
      }),
    }),
    getFeaturedCars: builder.query({
      query: () => ({
        url: "cars/featured",
      }),
    }),
    createCar: builder.mutation({
      query: (carInfo) => ({
        url: "/cars",
        method: "POST",
        body: carInfo,
      }),
      invalidatesTags: ["cars"],
    }),
    updateCar: builder.mutation({
      query: ({ carId, carInfo }) => ({
        url: `/cars/${carId}`,
        method: "PUT",
        body: carInfo,
      }),
      invalidatesTags: ["cars"],
    }),
    deleteCar: builder.mutation({
      query: (carId) => ({
        url: `/cars/${carId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cars"],
    }),
  }),
});

export const {
  useGetAllCarsQuery,
  useGetSingleCarQuery,
  useGetFeaturedCarsQuery,
  useCreateCarMutation,
  useUpdateCarMutation,
  useDeleteCarMutation,
} = carsApi;
