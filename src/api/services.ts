import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';
import { EndPoints } from '@/enums/endPoints';
import { PatientsData } from '@/types/api';

export const patientsApi = createApi({
  reducerPath: 'patientsApi',
  baseQuery: fetchBaseQuery({ baseUrl: Config.BASE_URL }),
  endpoints: builder => ({
    getPatients: builder.query<PatientsData, void>({
      query: () => ({
        url: EndPoints.users,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetPatientsQuery } = patientsApi;
