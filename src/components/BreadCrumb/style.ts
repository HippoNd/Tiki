import styled from "styled-components";

export const StyledBreadCrumb = styled.div`
    display: flex;
    /* justify-content: flex-start;
    align-items: center; */
    & .blackText{
        color: black;
        margin-left: 4px;
    }

    & a{
        text-decoration: none;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        color: rgb(128, 128, 137);
        font-size: 14px;
        line-height: 20px;
        font-weight: 300;
        white-space: nowrap;
        margin-right: 4px;
    }

`
export const StyledContainer = styled.div`
    padding-left: 15px;
    padding-right: 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1270px;
    overflow: hidden;
    width: 100%;
`