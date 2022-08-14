import { FilterContext } from 'App';
import React, { ChangeEvent, ChangeEventHandler, useContext, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { Container, HeaderTop, HeaderBot, MiddleWrap, LeftContainer, LogoMenu, StyleLogo, FormSearchForm, FormSearchRoot, RightContainer, AccountContainer, CartItem, AccountLabel, Item, CartWrapper, ContainerBot, QuickLink, TikiSeller } from './style'
const queryString = require('query-string');

const Header = () => {
	const location = useLocation();

	const history = useHistory()
	const [searchText, setSearchText] = useState<string>(queryString.parse(location.search).searchText)
	const filterContext = useContext(FilterContext)
	
	const getValueInput = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		setSearchText(value)
	}

	const onSearch: () => void = () => {
		if (!filterContext) return;
		const { handleChangeFilter, filters } = filterContext
		
		handleChangeFilter({
			...filters, searchText: searchText
		})
	}

	return (
		<>
			<Container>
				<HeaderTop>
					<MiddleWrap>
						<LeftContainer>
							<LogoMenu>
								<StyleLogo>
									<a>
										<img src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png" alt="tiki-logo" />
									</a>
								</StyleLogo>
							</LogoMenu>

							<FormSearchRoot>
								<FormSearchForm>
									<input
										onChange={getValueInput}
										type="text"
										placeholder='Tìm sản phẩm, danh mục hay thương hiệu mong muốn ...'
										value={searchText||""}
									/>
									<button onClick={onSearch}>
										<img src="https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png" alt="icon-search" />
										Tìm Kiếm
									</button>
								</FormSearchForm>
							</FormSearchRoot>
						</LeftContainer>

						<RightContainer>
							<AccountContainer>
								<img src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png" alt="logo-user" />
								<span>
									<span>Đăng Nhập / Đăng Ký</span>
									<AccountLabel>
										<span>Tài Khoản</span>
										<img src="https://salt.tikicdn.com/ts/upload/d7/d4/a8/34939af2da1ceeeae9f95b7485784233.png" alt="logo-arrow" />
									</AccountLabel>
								</span>
							</AccountContainer>
							<CartItem>
								<a href="">
									<Item>
										<CartWrapper>
											<img src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png" alt="logo-cart" />
											<span>0</span>
										</CartWrapper>
										<span>Giỏ Hàng </span>
									</Item>
								</a>
							</CartItem>
						</RightContainer>
					</MiddleWrap>
				</HeaderTop>
				<HeaderBot>
					<ContainerBot>
						<a href="" className='logoFreeship'>
							<img
								src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png"
								alt="logo-freeship"
								height={12}
								width={83} />
						</a>
						<QuickLink>
							<a href="#">Iphone 11</a>
							<a href="#">Iphone 12</a>
							<a href="#">Iphone 13 Pro</a>
							<a href="#">Iphone 14 Pro Max</a>
							<a href="#">Iphone 15 </a>
							<a href="#">Iphone 16 SE</a>
							<a href="#">Iphone 17</a>
							<a href="#">Iphone 18 Mini</a>
						</QuickLink>
						<TikiSeller>
							<a href="#">
								<img src="https://frontend.tikicdn.com/_desktop-next/static/img/icon-seller.svg" alt="logo-seller" />
								<span>Bán hàng cùng Tiki</span>
							</a>
						</TikiSeller>
					</ContainerBot>
				</HeaderBot>
			</Container>
		</>
	)
}

export default Header
