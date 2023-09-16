import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key' : process.env.REACT_APP_CRYPTOAPIKEY,
    'X-RapidAPI-Host' : 'coinranking1.p.rapidapi.com',
};

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

const baseUrl = 'https://coinranking1.p.rapidapi.com';

export const cryptoApi = createApi({
    reducerPath : 'cryptoApi',
    baseQuery : fetchBaseQuery({ baseUrl }),
    endpoints : (builder) => ({
        getCryptos : builder.query({
            query : (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails : builder.query({
            query : (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory : builder.query({
            query : ({coinId, timePeriod}) => createRequest(`coin/${coinId}/history?timePeriod=${timePeriod}`)
        }),
        getCryptoGlobalStats : builder.query({
            query : () => createRequest('/stats')
        }),
    })
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
    useGetCryptoGlobalStatsQuery
} = cryptoApi;

