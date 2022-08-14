import styled from "styled-components";


export const Container = styled.div`
     background: rgb(26, 148, 255);
     width: 100%;
     overflow: hidden;
`;
export const HeaderTop = styled.div`
    padding-left: 15px;
    padding-right: 15px;
    margin-right: auto;
    margin-left: auto;
    width: 1270px;

`;
export const HeaderBot = styled.div`
    position: relative;
    z-index: 1;
`;
export const MiddleWrap = styled.div`
    display: flex;
    padding: 16px 0px 10px;
    height: auto;
    position: relative;
    z-index: 2;
    align-items: center;
`;
export const LeftContainer = styled.div`
    display: flex;
    flex: 1 1 0%;
    align-items: center;
`;
export const LogoMenu = styled.div`
    display: flex;
    align-items: flex-start;
    flex-basis: 190px;
    flex-shrink: 0;
    margin-right: 16px
`;
export const StyleLogo = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    flex: 1 1 0%;
    & a{
        width: 60px;
        height: 40px;
        display: block;
    }
    & a img{
        width: 100%;
        height: 100%;
    }
`;
export const FormSearchRoot = styled.div`
    flex: 1 1 0%;
`;
export const FormSearchForm = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    box-shadow: rgb(98 98 98 / 50%) 0px 1px 2px 0px;
    & input{
        border: 0px;
        padding: 0px 12px;
        font-size: 13px;
        border-radius: 2px 0px 0px 2px;
        flex: 1 1 0%;
        outline: none;
    }
    & button{
        cursor: pointer;
        border: 0px;
        width: 120px;
        background: rgb(13, 92, 182);
        height: 40px;
        border-radius: 0px 2px 2px 0px;
        color: white;
        font-size: 13px;
        font-weight: 500;
        outline: none;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
    }
    & button img{
        width: 20px;
        height: 20px;
        margin-right: 8px;
    }
`;
export const RightContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
export const AccountContainer = styled.div`
    display: flex;
    margin-left: 16px;
    cursor: pointer;
    & span{
        display: flex;
        flex-direction: column;
        color: rgb(255, 255, 255);
        font-weight: 400;
        white-space: nowrap;
        font-size: 11px;
        overflow: hidden;
    }
    & img{
        width: 32px;
        height: 32px;
        margin-right: 8px;
        border-radius: 2px;
    }
`;
export const CartItem = styled.div`
    & a{
        text-decoration: none;
    }
`;
export const Item = styled.div`
    cursor: pointer;
    margin-left: 16px;
    display: flex;
    align-items: flex-end;
    font-size: 12px;
    color: rgb(255, 255, 255);
    position: relative;
    width: 94px;
    & span{
        overflow: hidden;
    }
`;
export const CartWrapper = styled.div`
    margin-right: 8px;
    display: flex;
    position: relative;
    & img{
        width: 32px;
        height: 32px;
    }
    & span{
        padding: 0px 7px;
        color: #242424;
        font-size: 13px;
        background-color: #FDD835;
        border-radius: 40px;
        font-weight: 500;
        line-height: 20px;
        text-align: center;
        display: inline-block;
        position: absolute;
        left: 20px;
        top: -2px;
        text-decoration: none;
    }
`;
export const AccountLabel = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center; 
    line-height: 20px;
    min-width: 120px;
    & img{
        width: 16px;
        height: 16px;
    }
    & span{
        font-size: 13px;
    }
`;
export const ContainerBot = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 15px;
    margin-right: auto;
    margin-left: auto;
    width: 1270px;
    & .logoFreeship{
        position: absolute;
        top: 0;
    }
`;
export const QuickLink = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 206px;
    & a{
        text-decoration: none;
        color: white;
        font-size: 11px;
        margin-right: 12px;
    };
`;
export const TikiSeller = styled.div`
    margin-bottom: 12px;
    height: 22px;
    border-radius: 10px;
    padding: 0px 8px;
    display: flex;
    background-color: rgba(255, 255, 255, 0.25);
    align-items: center;
    & a{
        text-decoration: none;
        color: white;
    }
    & span{
        line-height: 16px;
        margin-top: 1px;
        font-size: 12px;
        margin-left: 4px;
    }
`;

