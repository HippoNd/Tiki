import styled from "styled-components";

export const WrapProductItem = styled.div`
    text-decoration: none;
    display: flex;
    position: relative;
    border: 1px solid transparent;
    cursor: pointer;
`

export const StyledContainerBody = styled.div`
    max-width: 1270px;
    padding-left: 15px;
    padding-right: 15px;
    margin-right: auto;
    margin-left: auto;
    overflow: hidden;
    width: 100%;
`

export const CategoryViewstyle = styled.div`
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
    }
    display: flex;
    justify-content: space-between;
    width: 100%;

    & .listCollapse a {
        text-decoration: none;
        font-size: 13px;
        color: rgb(36, 36, 36);
        padding: 0px 0px 8px;
        line-height: 20px;
        display: flex;
        align-items: center;
    }
    & .title{
        margin: 0px;
        line-height: 20px;
        display: block;
        color: rgb(36, 36, 36);
        font-size: 13px;
        padding: 14px 0px;
        font-weight: 500;
        text-transform: uppercase;
    }
    & .block{
        padding: 0px 8px 12px 16px;
        border-bottom: 1px solid rgb(247, 247, 247);
    }
    & .address{
        text-decoration: underline;
        font-size: 13px;
        line-height: 20px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    & .titleLocate{
        margin: 0px;
        line-height: 20px;
        display: block;
        color: rgb(36, 36, 36);
        font-size: 13px;
        padding: 14px 0px;
        font-weight: 500;
        text-transform: uppercase;
    }
    & .addressChange{
        color: rgb(13, 92, 182);
        font-size: 13px;
        line-height: 20px;
        font-weight: 500;
        flex-shrink: 0;
        cursor: pointer;
    }
    & .locationWrapper{
        padding: 0px 8px 12px 16px;
    }
    & .listCollapse label{
        display: flex;
        align-items: center;
        font-size: 13px;
        line-height: 20px;
        text-transform: capitalize;
        margin-bottom: 4px;
    }
    & .serviceWrap{
        display: flex;
        align-items: center;
        height: 24px;
        margin-left: 6px;
    }
    & .toggle{
        text-decoration: none;
        font-size: 13px;
        font-weight: 500;
        display: flex;
        align-items: center;
        line-height: 20px;
        color: rgb(13, 92, 182);
        margin-top: 14px;
        cursor: pointer;
    }
    & .text{
        margin-left: 3px;
        color: rgb(36, 36, 36);
        font-size: 13px;
        font-weight: 400;
    }
    & a{
        text-decoration: none;
    }
    & .checked{
        color: orange;
    }
    & .fullRating p {
        margin-bottom: unset;
    } 
    & .ratingList p {
        font-size: 12px;
        display: inline-block;
    }
    & .ratingList a {
        padding: 5px 0px;
        display: flex;
    }
    & .block button{
        background: rgb(255, 255, 255);
        border: 1px solid rgb(13, 92, 182);
        font-size: 12px;
        color: rgb(13, 92, 182);
        padding: 5px 15px;
        width: 99px;
        margin-top: 8px;
        border-radius: 4px;
    }
    & .input-group input{
        flex: 1 1 0%;
        width: 95px;
        height: 30px;
        padding: 0px 8px;
        background: rgb(255, 255, 255);
        border-radius: 4px;
        text-align: left;
        border: 1px solid rgb(184, 184, 184);
        outline: 0px;
        font-size: 13px;
        
    }
    & .input-group .submit{
        background: rgb(255, 255, 255);
        border: 1px solid rgb(13, 92, 182);
        font-size: 12px;
        color: rgb(13, 92, 182);
        padding: 5px 15px;
        width: 99px;
        margin-top: 8px;
        border-radius: 4px;
        text-align: center;
    }
    & .input-group span{
        width: 7px;
        height: 1px;
        font-size: 0px;
        display: inline-block;
        background: rgb(154, 154, 154);
        margin: 0px 4px;
        vertical-align: middle;
    }
    & .price-small-text{
        color: rgb(133, 133, 133);
        font-size: 13px;
        padding-bottom: 5px;
        margin-top: 4px;
    }
    & .item span{
        background: rgb(238, 238, 238);
        font-size: 13px;
        padding: 2px 12px;
        line-height: 20px;
        display: inline-block;
        position: relative;
        color: rgb(36, 36, 36);
        border-radius: 12px;
        margin-bottom: 4px;
    }
`
export const CategoryViewstyleRight = styled.div`
    & .titleCVR{
        padding: 16px 0px 0px 16px;
    }
    & .titleCVR h1{
        display: inline;
        font-weight: 300;
        font-size: 24px !important;
    }
    & .product-list-wrapper{
        display: grid;
        grid-template-columns: repeat(4 , 1fr);
    }
    & .pagination{
        display: flex;
        justify-content: center;
        list-style: none;
        align-items: center;
        font-size: 1.2rem;
        gap: 5px;
        margin-top: 5rem;    
    }
    & .pagination .page-num{
        padding: 8px 15px;
        cursor: pointer;
        border-radius: 3px;
        font-weight: 400;
    }
    & .pagination .page-num:hover{
        background-color: #5ab1bb;
        color:#fff;
    }
    & .pagination .active{
        background-color: #5ab1bb;
    }
`

export const SorterRoot = styled.div`
    & .sorterBottom{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgb(242, 242, 242);
        padding: 16px 0px 0px;
    }
    & .sorterTabs{
        margin-right: 10px;
    }
    & .sortList{
        display: inline-block;
        list-style: none;
        padding: 0px;
        margin: 0px;
    }
    & .sortList .active{
        color: rgb(13, 92, 182);
        font-weight: 500;
        border-bottom: 4px solid rgb(13, 92, 182);
    }
    & .sortList a{
        text-transform: capitalize;
        cursor: pointer;
        font-weight: 400;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.54;
        letter-spacing: normal;
        color: rgb(36, 36, 36); 
        display: inline-block;
        font-size: 13px;
        margin: 0px 16px;
        padding: 8px;
        text-decoration: none;
    }
    & .sortList a:hover{
        color: rgb(13, 92, 182);
        font-weight: 500;
        border-bottom: 4px solid rgb(13, 92, 182);
    }
    & .itemSticky{
        background: rgb(238, 238, 238);
        cursor: pointer;
        font-size: 13px;
        padding: 2px 12px;
        line-height: 20px;
        position: relative;
        border-radius: 100px;
        display: flex;
        margin-right: 10px;
        height: 24px;
        align-items: center;
    }
    & .selected{
        background: rgba(27, 168, 255, 0.1);
    }
    & .item{
        background: rgba(27, 168, 255, 0.1);
        font-size: 13px;
        padding: 2px 12px;
        line-height: 20px;
        position: relative;
        border-radius: 100px;
        display: flex;
        margin-right: 10px;
        height: 24px;
        align-items: center;
    }
    & .item a {
        display: flex;
    }
    & .item a img{
        width: 20px;
        height: 20px;
        margin-left: 4px;
    }
    & .filterItem{
        padding-top: 20px;
        padding-left: 16px;
        display: flex;
        flex-wrap: wrap;
    }
    & .filterItem .deleteAll{
        background: rgb(255, 255, 255);
        cursor: pointer;
    }
`
export const StyledServiceFilter = styled.div`
    flex-direction: column;
    padding: 0px 8px 12px 16px;
    border-top: 1px solid rgb(247, 247, 247);
    border-bottom: 1px solid rgb(247, 247, 247);
    & label{
        display: flex;
        align-items: center;
        font-size: 13px;
        line-height: 20px;
        text-transform: capitalize;
        margin-bottom: 4px;
    }
    
    & .serviceWrap span{
        position: relative;
        top: 2px;
        cursor: pointer;
    }
    & .filterIcon{
        margin-right: 4px;
    }
`

// Item Product

export const StyledItem = styled.span`
    display: flex;
    padding: 12px 16px;
    color: rgb(36, 36, 36);
    text-decoration: none;
    flex-direction: column;
    justify-content: space-between;
 & .dynamicIcon{
    display: block;
    position: absolute;
    z-index: 2;
 }
 & .thumbnail{
    flex-shrink: 0;
    width: 200px;
    height: 200px;
    margin: 0px 12px 12px;
    text-align: center;
    position: relative;
 }
 & .image-wrapper{
    width: 100%;
    padding-top: 100%;
    position: relative;
 }
 & .image-wrapper img{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: contain;
 }
 & .checked{
        color: orange;
    }
 & .separator{
    width: 1px;
    height: 10px;
    background-color: rgb(199, 199, 199);
    margin-left: 6px;
    margin-right: 6px;
 }   
 & .qtySold{
    max-height: 16px;
    word-break: break-all;
    color: rgb(120, 120, 120);
 }
 & .ratingSold{
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 16px;
 }
 & .name h3{
    font-size: 13px;
    font-weight: 400;
    margin: 0px 0px 4px;
    line-height: 20px;
    word-break: break-word;
    color: black;
 }
 & .price{
    color: red;
 }
 & .discount{
    padding: 0px 2px;
    line-height: 14px;
    font-size: 12px;
    font-weight: 400;
    margin-left: 8px;
    border: 1px solid rgb(255, 66, 78);
    border-radius: 2px;
    background-color: rgb(255, 240, 241);
    color: rgb(255, 66, 78);
 }
 & .price-discount{
    text-align: left;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: rgb(56, 56, 61);
    margin: 0px;
    display: flex;
    align-items: center;
 }
 & .benefit .item span{
    font-size: 11px;
    line-height: 16px;
    margin-left: 4px;
    font-weight: 500;
 }
 & .benefit .item{
    display: flex;
    margin-top: 4px;
 }
 & .benefit{
    margin-top: 8px;
 }
`