import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {getError} from '../Helpers/general';
import {Config} from '../Config';

const baseQuery = fetchBaseQuery({
  baseUrl: Config.REACT_APP_API_ENDPOINT,
  prepareHeaders: async headers => {
    let token;

    // we add token here if we need use it for sanadak apis
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithInterceptor = async (args, api, extraOptions) => {
  let response = await baseQuery(args, api, extraOptions);
  if (response.error) {
    console.log(api.endpoint + ' - ' + getError(response));
  }
  Debugger(api, args, extraOptions, response);

  return response;
};

const Debugger = (api, args, extraOptions, response) => {
  // we add api log to trace all apis
  console.log('API - request :', api);
  console.log('API - endPoint: ', args);
  extraOptions ? console.log('API - extraOptions : ', extraOptions) : '';
  console.log('API - response  : ', response);
};

export const api = createApi({
  tagTypes: ['Apartment'],
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});
