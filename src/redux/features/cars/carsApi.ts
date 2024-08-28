import { baseApi } from "../../api/baseApi";

const carsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCars: builder.query({
      query: () => ({
        url: "/cars",
      }),
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
  }),
});

export const {
  useGetAllCarsQuery,
  useGetSingleCarQuery,
  useGetFeaturedCarsQuery,
} = carsApi;
