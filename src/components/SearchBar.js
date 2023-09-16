import React, {useEffect, useState} from 'react';
import Input from 'antd/es/input/Input';

const SearchBar = ({cryptosList, setCryptos}) => {

    const [searchCrypto, setSearchCrypto] = useState('');
    
    useEffect(() => {
        //setCryptos(cryptosList?.data?.coins);
        const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchCrypto));
        setCryptos(filteredData);
    }, [cryptosList, searchCrypto]);
    
  return (
    <div className='search-crypto'>
      <Input placeholder="Search Cryptocurrency" onChange={(e) => setSearchCrypto(e.target.value.toLowerCase())} />
    </div>
  )
}

export default SearchBar;
