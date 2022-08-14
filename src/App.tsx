import React, { ChangeEvent, createContext, useEffect, useState } from 'react';
import GlobalStyled from './styles/global';
import Header from './components/Header/index';
import BreadCrumb from './components/BreadCrumb/index'
import Body from 'components/Body';
import Footer from 'components/Footer';
import "antd/dist/antd.css"
import { BrowserRouter as Router, Route, Switch, Link, useLocation, useHistory } from 'react-router-dom';
import { StringLiteral } from 'typescript';
import { paste } from '@testing-library/user-event/dist/paste';

interface FilterContextParams {
  filters: Filters
  handleChangeFilter: (newFilter: Filters) => void
}

interface Filters {
  searchText?: string,
  category?: string,
  stockLocation?:string,
  service?:string,
  price?:string,
  sort?:string,
  rating?:number,
  page?:number
}

export const FilterContext = createContext<FilterContextParams | null>(null);

function App() {
  const [filters, setFilters] = useState<Filters>({})
  const queryString = require('query-string');
  const location = useLocation();
  const history = useHistory();
  const [data,setData] = useState()
  useEffect(() => {
    const parsed = queryString.parse(location.search)
    setFilters({ ...filters, ...parsed })
  }, [])

  useEffect(() => {

    const params = queryString.stringify(filters)
 
    history.push({
			pathname: "/search",
			search: params
		})
  }, [filters])

  const handleChangeFilter = (newFilter: Filters) => {
    setFilters(newFilter)
  }

  return (
    <FilterContext.Provider value={{ filters, handleChangeFilter }}>
      <div className="App">
        <GlobalStyled></GlobalStyled>
        <Header />
        <BreadCrumb />
        <Body />
        <Footer />
      </div>
    </FilterContext.Provider>

  );
}

export default App;
