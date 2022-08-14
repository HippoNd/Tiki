import { AlipayOutlined, CodepenCircleOutlined, CodepenOutlined, FacebookOutlined, TwitterOutlined, YoutubeOutlined, YuqueOutlined } from '@ant-design/icons'
import React from 'react'
import { StyledContainerFooter } from './style'

const Footer = () => {
  return (
    <>
      <StyledContainerFooter>
        <div className="infomation">
          <div className="containerInf">
            <div className="block" style={{width:"268px"}}>
              <h4 className="footer-heading">Hỗ trợ khách hàng</h4>
              <p className="hotline">
                Hotline:
                <a href="">1900-6035</a>
                <span className="small-text">(1000 đ/phút, 8-21h kể cả T7, CN)</span>
              </p>
              <a href="" className="small-text">Các câu hỏi thường gặp</a>
              <a href="" className="small-text">Gửi yêu cầu hỗ trợ</a>
              <a href="" className="small-text">Hướng dẫn đặt hàng</a>
              <a href="" className="small-text">Phương thức vận chuyển</a>
              <a href="" className="small-text">Chính sách đổi trả</a>
              <a href="" className="small-text">Hướng dẫn trả góp</a>
              <a href="" className="small-text">Chính sách hàng nhập khẩu</a>
              <p className="security">
                Hỗ trợ khách hàng:
                <a href="">hotro@tiki.vn</a>
              </p>
              <p className="security">
                Bảo lỗi bảo mật:
                <a href="">security@tiki.vn</a>
              </p>
            </div>
            <div className="block">
              <h4 className="footer-heading">Về Tiki</h4>
              <a href="" className="small-text">Giới thiệu Tiki</a>
              <a href="" className="small-text">Tuyển dụng</a>
              <a href="" className="small-text">Chính sách bảo mật thanh toán</a>
              <a href="" className="small-text">Chính sách bảo mật thông tin cá nhân</a>
              <a href="" className="small-text">Chính sách giải quyết khiếu nại</a>
              <a href="" className="small-text">Điều khoản sử dụng</a>
              <a href="" className="small-text">Giới thiệu Tiki Xu</a>
              <a href="" className="small-text">SEP - Mua sắm có lời</a>
              <a href="" className="small-text">Tiếp thị liên kết cùng Tiki</a>
              <a href="" className="small-text">Bán hàng doanh nghiệp</a>
              <a href="" className="small-text">Điều kiện vận chuyển</a>
            </div>
            <div className="block">
              <h4 className="footer-heading">Hợp tác và liên kết</h4>
              <a href="" className="small-text">Quy chế hoạt động Sàn GDTMĐT</a>
              <a href="" className="small-text">Bán hàng cùng Tiki</a>
              <h4 className='footer-heading'>Chứng nhận bởi</h4>
              <div className="flex">
                <a href="" style={{ height: "32px" }}>
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png"
                    alt="logo"
                    height={32}
                    width={32}
                  />
                </a>
                <a href="" style={{ height: "32px" }}>
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg"
                    alt="logo"
                    height={32}
                    width={83}
                  />
                </a>
              </div>
            </div>
            <div className="block">
              <h4 className="footer-heading">Phương thức và thanh toán</h4>
              <p className='payment'>
                <span>
                  <YuqueOutlined />
                </span>
                <span>
                  <CodepenCircleOutlined />
                </span>
                <span>
                  <AlipayOutlined />
                </span>
                <span>
                  <CodepenOutlined />
                </span>
              </p>
            </div>
            <div className="block">
              <h4 className="footer-heading">Kết nối với chúng tôi</h4>
              <p className='payment'>
                <span>
                  <YoutubeOutlined />
                </span>
                <span>
                  <TwitterOutlined />
                </span>
                <span>
                  <FacebookOutlined />
                </span>
              </p>
              <h4 className="footer-heading">Tải ứng dụng trên điện thoại</h4>
              <div className="flex">
                <img
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/qrcode.png"
                  alt="qr"
                  width={80}
                  height={80}
                />
                <div className='downloadApp'>
                  <a href="" style={{height:"36"}}>
                    <img 
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png" 
                    alt="apple" 
                    width={122}
                    />
                  </a>
                  <a href="" style={{height:"36"}}>
                    <img 
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png" 
                    alt="apple" 
                    width={122}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="separator"></div>

        <div className="addresses">
          <div style={{padding:"0px 15px"}}>
            <p className='small-text'>Trụ sở chính: Tòa nhà Viettel, Số 285, đường Cách Mạng Tháng 8, phường 12, quận 10, Thành phố Hồ Chí Minh</p>
            <p className="small-text">Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ mua và nhận hàng trực tiếp tại văn phòng hoặc trung tâm xử lý đơn hàng</p>
            <p className="small-text">Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp lần đầu ngày 06/01/2010 và sửa đổi lần thứ 23 ngày 14/02/2022</p>
            <p className="small-text">© 2022 - Bản quyền của Công ty TNHH Ti Ki</p>
          </div>
        </div>
      </StyledContainerFooter>
    </>
  )
}

export default Footer
