import React from 'react'
interface Props {
    rating: number,
    handleClickRating: (number:number,text:string) => void
}

const RatingStar = (props: Props) => {
    const { rating, handleClickRating } = props;
    return (
        <a onClick={() => handleClickRating(rating,`từ ${rating} sao`)}>
            <p>
                {Array.from(Array(rating).keys()).map((_, index) => {
                    return <span key={index} className="fa fa-star checked"></span>
                })}
                {Array.from(Array(5 - rating).keys()).map((_, index) => {
                    return <span key={index} className="fa fa-star "></span>
                })}
            </p>
            <span className='text'>từ {rating} sao</span>
        </a>
    )
}

export default RatingStar
