import React, {useState} from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'antd';
import SearchBar from './SearchBar';
import Loader from './Loader';
import { useGetCryptosQuery } from '../services/cryptoApi';


const Cryptocurrencies = ({simplified}) => {

  const count = simplified ? 10 : 100;
  const {data : cryptosList, isFetching} = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  //console.log(cryptos);
  if (isFetching) {
    return <Loader />;
  }

  return (
    <React.Fragment>
      { !simplified && <SearchBar cryptosList={cryptosList} setCryptos={setCryptos} /> }
      <Row gutter={[32, 32]} className='crypto-card-container'>
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} key={currency.uuid} className='crypto-card'>
            <Link to={`/crypto/${currency.uuid}`}>
              <Card 
              title={`${currency.rank}. ${currency.name}`} 
              extra={<img className='crypto-image' src={currency.iconUrl} />} 
              hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  )
}

export default Cryptocurrencies;
