import { RightOutlined } from '@ant-design/icons'
import React, { useContext, useEffect, useState } from 'react'
import { StyledBreadCrumb, StyledContainer } from './style'
import { useLocation, useParams } from 'react-router-dom'
import queryString from "query-string"
import { render } from 'react-dom'
import { FilterContext } from 'App'

interface Props {
}
const BreadCrumb = (props: Props) => {

  const filterContext = useContext(FilterContext)
  
  return (
    <>
      <StyledContainer>
        <StyledBreadCrumb>
          <a href="">
            <span>Trang chủ</span>
          </a>
          <RightOutlined style={{ display: "flex", justifyContent: "center", alignItems: "center", }} />
          <a href="">
            <span className='blackText'>{filterContext?.filters.searchText}</span>
          </a>
        </StyledBreadCrumb>

      </StyledContainer>
    </>
  )
}

export default BreadCrumb
