import React from 'react';
import { useGetCryptoGlobalStatsQuery } from '../services/cryptoApi';
import BestCoins from './BestCoins';
import Loader from './Loader';
import { Typography, Avatar, Divider } from 'antd';
import cryptoStatsLogo from "../assets/cryptodetails.gif";
import cryptoGIF from "../assets/cryptocurrencies.gif";
import newCrypto from "../assets/newCrypto.gif";

const AdditionalStats = () => {

  const {data, isFetching} = useGetCryptoGlobalStatsQuery();
  const bestCoins = data?.data?.bestCoins;
  const newestCoins = data?.data?.newestCoins;

  if(isFetching) {
    return <Loader />
  }

  return (
    <div>
      <Typography.Title level={2} className='heading' style={{ textAlign: 'center' }}>
        <Avatar src={cryptoStatsLogo} size="large" /> Additional Stats
      </Typography.Title>
      <Divider />
      <Typography.Title level={3} className='heading'>
        <Avatar src={cryptoGIF} size="large" /> Best Cryptocurrencies in the World and their Stats
      </Typography.Title>
      {
        bestCoins?.map((coin) => <BestCoins key={coin.uuid} uuid={coin.uuid} />)
      }
      <Divider />
      <Typography.Title level={3} className='heading'>
        <Avatar src={newCrypto} size="large" /> Newest Cryptocurrencies in the World and their Stats
      </Typography.Title>
      {
        newestCoins?.map((coin) => <BestCoins key={coin.uuid} uuid={coin.uuid} />)
      }

    </div>
  )
}

export default AdditionalStats;
