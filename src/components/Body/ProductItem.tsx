import { StyledItem, WrapProductItem } from './style'

interface Props {
  img: string,
  name: string,
  rating: number,
  sold: string,
  price: string,
  discount: string
}

const ProductItem = (props: Props) => {
  const { img, name, rating, sold, price, discount } = props
  return (
    <>
      <WrapProductItem>
        <a href="" className='product-item' style={{ textDecoration: "none" }}>
          <StyledItem>
            <div>
              <div className='thumbnail'>
                <img
                  src="https://salt.tikicdn.com/ts/upload/dc/0d/49/3251737db2de83b74eba8a9ad6d03338.png"
                  alt="logo"
                  width={136}
                  height={24}
                  className='dynamicIcon'
                  style={{ bottom: "0px", left: "0px" }}
                />
                <img
                  src="https://salt.tikicdn.com/ts/upload/b9/1f/4b/557eac9c67a4466ccebfa74cde854215.png"
                  alt="logo"
                  width={74}
                  height={18}
                  className='dynamicIcon'
                  style={{ top: "0px", left: "0px" }}
                />
                <div className='image-wrapper'>
                  <img src={img} alt="img" />
                </div>
              </div>

              <div className='info'>
                <div className="name">
                  <h3>{name}</h3>
                </div>
                <div className="ratingSold">
                  <div className="fullRating">
                    <p>
                      {Array.from(Array(rating).keys()).map((_, index) => {
                        return <span key={index} className="fa fa-star checked"></span>
                      })}
                      {Array.from(Array(5 - rating).keys()).map((_, index) => {
                        return <span key={index} className="fa fa-star "></span>
                      })}
                    </p>
                  </div>
                  <div className="separator"></div>
                  <div className="qtySold">{`Đã bán ${sold} +`}</div>
                </div>
                <div className="price-discount">
                  <div className="price">{`${price} ₫`}</div>
                  <div className="discount">{`-${discount}%`}</div>
                </div>
                <div className="benefit">
                  <div className="item">
                    <img
                      src="https://salt.tikicdn.com/ts/upload/fc/d8/25/e61805952396b6ed4143194298112b0a.png"
                      alt="logo"
                      width={16}
                      height={16}
                    />
                    <span>Trả góp</span>
                  </div>
                </div>
              </div>
            </div>
          </StyledItem>
        </a>
      </WrapProductItem>
    </>
  )
}

export default ProductItem
