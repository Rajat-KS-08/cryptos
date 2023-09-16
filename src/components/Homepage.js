import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Avatar, Statistic, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies  from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';

import cryptoStats from "../assets/cryptoStats.gif";
import topTen from "../assets/top10.gif";
import cryptoNews from "../assets/cryptoNews.gif";

const Homepage = () => {

  const {data, isFetching} = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if(isFetching) {
    return <Loader />;
  }

  return (
    <React.Fragment>
      <Typography.Title level={2} className='heading'>
        <Avatar src={cryptoStats} size="large" /> Global Crypto Stats
      </Typography.Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={millify(globalStats.totalCoins)} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap:" value={millify(globalStats.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
      </Row>
      <Divider />
      <div className='home-heading-conatiner'>
        <Typography.Title level={2} className='home-title'><Avatar src={topTen} size="large" />Top 10 Cryptocurrencies in the World</Typography.Title>
        <Typography.Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show more</Link></Typography.Title>
      </div>
      <Cryptocurrencies simplified />
      <Divider />
      <div className='home-heading-conatiner'>
        <Typography.Title level={2} className='home-title'><Avatar src={cryptoNews} size="large" />Latest Crypto News</Typography.Title>
        <Typography.Title level={3} className='show-more'><Link to='/news'>Show more</Link></Typography.Title>
      </div>
      <News simplified />
      <Divider />
    </React.Fragment>
  )
}

export default Homepage;
