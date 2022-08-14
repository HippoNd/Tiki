import styled from "styled-components"
export const StyledContainerFooter = styled.div`
& .infomation{
    padding: 16px 0px;
}
& .containerInf{
    display: flex;
    justify-content: space-between;
    max-width: 1270px;
    padding-left: 15px;
    padding-right: 15px;
    margin-right: auto;
    margin-left: auto;
    overflow: hidden;
    width: 100%;
}
 & .small-text{
    display: block;
    margin-bottom: 8px;
    color: rgb(128, 128, 137);
 }
 & .hotline a{
    color: rgb(56, 56, 61);
    font-weight: 500;
 }
 & .hotline{
    margin-bottom: 8px;
 }
 & .footer-heading{
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: rgb(56, 56, 61);
    margin-bottom: 12px;
    margin-top: 0px;
 }
 & .security a{
    color: rgb(128, 128, 137);
    text-decoration: none;
 }
 & .security{
    margin-bottom: 8px;
    color: rgb(128, 128, 137);
    font-size: 12px;
    font-weight: 400;
 }
 & .flex{
    /* width: 226px; */
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
 }
 & .payment span{
    display: inline-block;
    margin-right: 8px;
    margin-bottom: 8px;
    vertical-align: middle;
    width: 32px;
    height: 32px;
 }
 & .downloadApp{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 80px;
 }
 & .addresses{
    padding: 16px 0px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1270px;
    width: 100%;
    overflow: hidden;
 }
`