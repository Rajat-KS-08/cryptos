import React from 'react';
import { Link, Routes, Route } from "react-router-dom";
import { Layout, Typography, Space, Avatar, Divider } from 'antd';
import "./App.css";
//Importing Components
import { Navbar, Homepage, Cryptocurrencies, CryptoDetails, AdditionalStats, News } from './components';
//Importing GIF
import copyrightGIF from "./assets/copyright.gif";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" Component={Homepage} />
              <Route exact path="/additinalstats" Component={AdditionalStats} />
              <Route exact path="/cryptocurrencies" Component={Cryptocurrencies} />
              <Route exact path="/crypto/:coinId" Component={CryptoDetails} />
              <Route exact path="/news" Component={News} />
            </Routes>
          </div>
        </Layout>
        <div className='footer'>
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            CryptoS <br />
            A Platform for Cryptocurrency details and news <br />
            <Avatar src={copyrightGIF} size="large"  /> Copyright 2023
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Divider type='vertical' />
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            <Divider type='vertical' />
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
