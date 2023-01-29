import {api} from '../../Services/api';

export const apartmentApi = api.injectEndpoints({
  endpoints: builder => ({
    getApartments: builder.query({
      query: () => '/listings/v1/071553e2-cecd-4ede-b795-083b0df91d5e',
      method: 'GET',
      credentials: 'include',
      providesTags: ['Apartment'],
    }),
  }),
  overrideExisting: false, // true in live
});

export const {useGetApartmentsQuery, useLazyGetApartmentsQuery} = apartmentApi;

// to use apis https://redux-toolkit.js.org/rtk-query/api/created-api/endpoints
