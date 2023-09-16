import React from 'react';
import { useGetCryptoDetailsQuery } from '../services/cryptoApi';
import { Typography, Row, Col, Statistic, Avatar } from 'antd';
import millify from 'millify';



const BestCoins = ({uuid}) => {

  const coinId = uuid;
  const {data} = useGetCryptoDetailsQuery(coinId);
  const cryptoData = data?.data?.coin;

  return (
    <div>
      <Typography.Title level={3}><Avatar src={cryptoData?.iconUrl} />{cryptoData?.name}</Typography.Title>
      <Row>
        <Col span={12}><Statistic title="Symbol" value={cryptoData?.symbol} /></Col>
        <Col span={12}><Statistic title="Price (in USD) : " value={`$ ${cryptoData?.price && millify(cryptoData?.price)}`} /></Col>
        <Col span={12}><Statistic title="Number of Markets : " value={millify(cryptoData?.numberOfMarkets)} /></Col>
        <Col span={12}><Statistic title="Market Cap" value={millify(cryptoData?.marketCap)} /></Col>
        <Col span={12}><Statistic title="Rank : " value={millify(cryptoData?.rank)} /></Col>
        <Col span={12}><Statistic title="24H Volume" value={`$ ${cryptoData?.["24hVolume"] && millify(cryptoData?.["24hVolume"])}`} /></Col>
        <p>{cryptoData?.description}</p>
        <br />
      </Row>
    </div>
  )
}

export default BestCoins;
