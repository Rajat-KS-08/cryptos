import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar, Switch } from "antd";
import { Link } from "react-router-dom";
import {
  HomeTwoTone,
  MoneyCollectTwoTone,
  SlidersTwoTone,
  FundTwoTone,
  MenuOutlined,
} from "@ant-design/icons";
//Importing Logo Images
import cryptoLogo from "../assets/bitcoin.png";

const Navbar = () => {

  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  //State for Theme of the Navbar Menu
  const [theme, setTheme] = useState('dark');
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={cryptoLogo} size="large" />
        <Typography.Title level={2}>
          <Link to="/">CryptoS</Link>
        </Typography.Title>
        <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
      </div>

      <Switch
        checked={theme === "dark"}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <br />
      <br />
      {activeMenu && (
      <Menu theme={theme}>
        <Menu.Item icon={<HomeTwoTone />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundTwoTone />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectTwoTone />}>
          <Link to="/additinalstats">Additional Stats</Link>
        </Menu.Item>
        <Menu.Item icon={<SlidersTwoTone />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
      )}
    </div>
  );
};

export default Navbar;
