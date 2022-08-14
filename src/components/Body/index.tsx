import React, { ChangeEvent, FormEvent, FormEventHandler, Fragment, useContext, useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import { CategoryViewstyle, CategoryViewstyleRight, SorterRoot, StyledContainerBody, StyledServiceFilter } from './style'
import { Pagination } from 'antd'
import { FilterContext } from 'App'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import RatingStar from './RatingStar'
import Item from 'antd/lib/list/Item'
import { mockProduct } from './mockProduct'
import axios from 'axios'
import ReactPaginate from 'react-paginate'

interface Location {
	id: string,
	title: string
}

interface Portfolio {
	id: string,
	title: string
}

interface Service {
	id: string,
	title: string,
	img?: string
}

interface Price {
	id: string,
	title: string
}

interface SortList {
	id: string,
	title: string
}

interface DataProduct {
	name: string,
	price: string,
	category: string,
	service: string,
	sold: string,
	location: string,
	id: string,
	rating: number,
	img: string,
	discount: string
}

const locationVN: Location[] = [
	{
		id: "location_1",
		title: "Hồ Chí Minh"
	},
	{
		id: "location_2",
		title: "Hà Nội"
	},
	{
		id: "location_3",
		title: "Nam Định"
	},
	{
		id: "location_4",
		title: "Thái Bình"
	},
	{
		id: "location_5",
		title: "Ninh Bình"
	},
	{
		id: "location_6",
		title: "Ninh Bình 6"
	},
];

const service: Service[] = [
	{
		id: "service_1",
		title: "Giao siêu tốc 2H",
		img: "https://salt.tikicdn.com/ts/upload/f9/ad/0e/a8a97f5ac7661d637942b42796893662.png"
	},
	{
		id: "service_2",
		title: "Không giới hạn",
		img: "https://salt.tikicdn.com/ts/upload/af/84/fc/2037c3b93a81767aed21358ebf3f8b8e.png"
	},
	{
		id: "service_3",
		title: "Rẻ hơn hoàn tiền"
	},
	{
		id: "service_4",
		title: "Trả góp 100%"
	},
]

const productPortfolio: Portfolio[] = [
	{
		id: "portfolio_1",
		title: "Điện thoại Smartphone"
	},
	{
		id: "portfolio_2",
		title: "Bao Da - Ốp Lưng Điện Thoại iPhone"
	},
	{
		id: "portfolio_3",
		title: "Miếng Dán Màn Hình Điện Thoại"
	},
	{
		id: "portfolio_4",
		title: "Bao Da - Ốp Lưng"
	},
	{
		id: "portfolio_5",
		title: "Túi xách & Balo"
	},
	{
		id: "portfolio_6",
		title: "Bao da - Ốp lưng"
	},
]

const price: Price[] = [
	{
		id: "0,12500000",
		title: "Dưới 12.500.000"
	},
	{
		id: "12500000,19000000",
		title: "Từ 12.500.000 đến 19.000.000"
	},
	{
		id: "19000000,25000000",
		title: "Từ 19.000.000 đến 25.000.000"
	},
	{
		id: "25000000,100000000",
		title: "Trên 25.000.000"
	},
]

const sortList: SortList[] = [
	{
		title: "Phổ Biến",
		id: "default"
	},
	{
		title: "Bán Chạy",
		id: "top_seller"
	},
	{
		title: "Hàng Mới",
		id: "newest"
	},
	{
		title: "Giá Thấp",
		id: "low-price"
	},
	{
		title: "Giá Cao",
		id: "high-price"
	}
]


const Body = () => {
	const queryString = require('query-string');
	const location = useLocation();
	const filterContext = useContext(FilterContext)
	const [checkedLocation, setCheckedLocation] = useState<string[]>([]);
	const [checkedService, setCheckedService] = useState<string[]>([]);
	const [portfolioArray, setPortfolioArray] = useState<string[]>([]);
	const [priceArray, setPriceArray] = useState<string[]>([]);
	const [ratingArray, setRatingArray] = useState<string[]>([]);
	const [activeIndex, setActiveIndex] = useState<string>("")
	const [activeLogo, setActiveLogo] = useState<string[]>([])
	const [dataProduct, setDataProduct] = useState<DataProduct[]>([]);
	const [currentData, setCurrentData] = useState<DataProduct[]>([])
	const [pageCount, setPageCount] = useState(100);
	const [dataOffset, setDataOffset] = useState(0);
	const initialPage = parseInt(queryString.parse(location.search).page)
	const datasPerPage = 12;
	const handleDeleteAll = () => {
		const emptyArray: any[] = []
		setCheckedLocation(emptyArray)
		setCheckedService(emptyArray)
		setPortfolioArray(emptyArray)
		setPriceArray(emptyArray)
		setRatingArray(emptyArray)
		setActiveLogo(emptyArray)
		if (!filterContext) return;
		const { handleChangeFilter, filters } = filterContext
		handleChangeFilter({
			...filters, stockLocation: undefined, service: undefined, category: undefined, price: undefined, rating: undefined
		})

	}

	useEffect(() => {
		axios.get("http://localhost:5000/tiki").then((res) => setDataProduct(res.data))

	}, [])

	useEffect(() => {
		const parsedStock = queryString.parse(location.search)

		const newCheckedLocation = parsedStock.stockLocation ? parsedStock.stockLocation.split(",") : []
		setCheckedLocation(newCheckedLocation)

		const newCheckedService = parsedStock.service ? parsedStock.service.split(",") : []
		setCheckedService(newCheckedService)
		setActiveLogo(newCheckedService)

		const dataPortfolio = productPortfolio.find((item) => item.id === parsedStock.category)
		const newPortfolio = parsedStock.category && dataPortfolio ? [dataPortfolio.title] : []
		setPortfolioArray(newPortfolio)

		const dataPrice = price.find((item) => item.id === parsedStock.price)
		const inputArray = parsedStock.price ? parsedStock.price.split(",") : []
		if (dataPrice) {
			const newPrice = dataPrice ? [dataPrice.title] : []
			setPriceArray(newPrice)
		} else {
			const newPrice = inputArray.length ? [`Từ ${inputArray[0]}đ đến ${inputArray[1]}đ`] : []
			setPriceArray(newPrice)
		}

		const ratingArray = parsedStock.rating ? [`từ ${parsedStock.rating} sao`] : []
		setRatingArray(ratingArray)

		const getSort = parsedStock.sort ? parsedStock.sort : "default"
		setActiveIndex(getSort)

		const getSelected = parsedStock.page ? parsedStock.page : 0
		setDataOffset(getSelected * datasPerPage)

	}, [])

	//Pagination

	useEffect(() => {
		const endOffset = dataOffset + datasPerPage;
		setCurrentData(dataProduct.slice(dataOffset, endOffset))
		setPageCount(Math.ceil(dataProduct.length / datasPerPage))
	}, [dataOffset, datasPerPage, dataProduct])

	const handlePageClick = (event: any) => {
		const newOffset = (event.selected * datasPerPage) % dataProduct.length
		setDataOffset(newOffset)
		if (!filterContext) return;
		const { handleChangeFilter, filters } = filterContext
		handleChangeFilter({
			...filters, page: event.selected
		})
	}

	const renderProduct = currentData.map((item) => {
		return (
			<ProductItem key={item.id} img={item.img} name={item.name} rating={item.rating} sold={item.sold} price={item.price} discount={item.discount} />
		)
	})

	//location
	const handleCheckLocation: (event: ChangeEvent<HTMLInputElement>) => void = (event) => {
		var updatedList = [...checkedLocation];
		if (!filterContext) return;
		const { handleChangeFilter, filters } = filterContext
		if (event.target.checked) {
			updatedList = [...checkedLocation, event.target.value];
		} else {
			updatedList.splice(checkedLocation.indexOf(event.target.value), 1);
		}
		setCheckedLocation(updatedList);
		if (updatedList.length) {
			handleChangeFilter({
				...filters, stockLocation: updatedList.join()
			})
		} else {
			handleChangeFilter({
				...filters, stockLocation: undefined
			})
		}
	};

	const renderLocation = locationVN.map((item) => {
		const stockLocationArray = filterContext?.filters.stockLocation?.split(",")
		const isChecked = stockLocationArray?.some(check => check === item.title) ?? false

		return (
			<label htmlFor={item.id} key={item.id}>
				<input id={item.id} type="checkbox" onChange={handleCheckLocation} value={item.title} checked={isChecked} />
				<div className='serviceWrap'>
					<span>{item.title}</span>
				</div>
			</label>
		)
	})

	const handleDeleteLocation = (text: string) => {
		const newArray = [...checkedLocation]
		newArray.splice(checkedLocation.indexOf(text), 1)
		setCheckedLocation(newArray)
		if (!filterContext) return;
		const { handleChangeFilter, filters } = filterContext
		if (newArray.length) {
			handleChangeFilter({
				...filters, stockLocation: newArray.join()
			})
		} else {
			handleChangeFilter({
				...filters, stockLocation: undefined
			})
		}
	}

	const printLocation = checkedLocation.map((item, index) => {
		return (
			<p className='item' key={index}>
				{item}
				<a onClick={() => handleDeleteLocation(item)}>
					<img src="https://salt.tikicdn.com/ts/upload/09/59/a4/a99bbc2a604f745281eca1aab8c87345.png" alt="logoX" />
				</a>
			</p>
		)
	})

	//service
	const handleCheckService = (event: ChangeEvent<HTMLInputElement>) => {
		var updatedList = [...checkedService];
		if (!filterContext) return;
		const { handleChangeFilter, filters } = filterContext
		if (event.target.checked) {
			updatedList = [...checkedService, event.target.value];
		} else {
			updatedList.splice(checkedService.indexOf(event.target.value), 1);
		}
		setCheckedService(updatedList);
		if (updatedList.length) {
			handleChangeFilter({
				...filters, service: updatedList.join()
			})
		} else {
			handleChangeFilter({
				...filters, service: undefined
			})
		}
	};
	const handleCheckServiceSticky = (event: ChangeEvent<HTMLInputElement>) => {
		var updatedList = [...checkedService];
		if (!filterContext) return;
		const { handleChangeFilter, filters } = filterContext
		if (event.target.checked) {
			updatedList = [...checkedService, event.target.value];
		} else {
			updatedList.splice(checkedService.indexOf(event.target.value), 1);
		}
		setActiveLogo(updatedList)
		setCheckedService(updatedList);
		if (updatedList.length) {
			handleChangeFilter({
				...filters, service: updatedList.join()
			})
		} else {
			handleChangeFilter({
				...filters, service: undefined
			})
		}
	}
	const renderService = service.map((item) => {
		const serviceArray = filterContext?.filters.service?.split(",")
		const isChecked = serviceArray?.some(check => check === item.title) ?? false

		return item.img ? (
			<label htmlFor={item.id} key={item.id}>
				<input id={item.id} type="checkbox" onChange={handleCheckServiceSticky} value={item.title} checked={isChecked} />
				<div className='serviceWrap'>
					<img src={item.img} alt="abc" className='filterIcon' height={24} width={56} />
					<span>{item.title}</span>
				</div>
			</label>
		) : (
			<label htmlFor={item.id} key={item.id}>
				<input id={item.id} type="checkbox" onChange={handleCheckService} value={item.title} checked={isChecked} />
				<div className='serviceWrap'>
					<span>{item.title}</span>
				</div>
			</label>
		)
	})

	const handleDeleteService = (text: string) => {
		const newArray = [...checkedService]
		newArray.splice(checkedService.indexOf(text), 1)
		setCheckedService(newArray)
		if (!filterContext) return;
		const { handleChangeFilter, filters } = filterContext
		if (newArray.length) {
			handleChangeFilter({
				...filters, service: newArray.join()
			})
		} else {
			handleChangeFilter({
				...filters, service: undefined
			})
		}
	}

	const compareArray = ["Giao siêu tốc 2H", "Không giới hạn"]

	const printService = checkedService.map((item, index) => {
		return compareArray.includes(item) ? (
			<Fragment key={index}></Fragment>
		) : (
			<p className='item' key={index}>
				<div>{item}</div>
				<a onClick={() => handleDeleteService(item)}>
					<img src="https://salt.tikicdn.com/ts/upload/09/59/a4/a99bbc2a604f745281eca1aab8c87345.png" alt="logoX" />
				</a>
			</p>
		)
	})

	const handleClickLogo = (text: string) => {
		var updatedList = [...checkedService];
		if (!filterContext) return;
		const { handleChangeFilter, filters } = filterContext
		if (!activeLogo.includes(text)) {
			updatedList = [...checkedService, text];
		} else {
			updatedList.splice(checkedService.indexOf(text), 1);
		}
		setActiveLogo(updatedList)
		setCheckedService(updatedList);
		if (updatedList.length) {
			handleChangeFilter({
				...filters, service: updatedList.join()
			})
		} else {
			handleChangeFilter({
				...filters, service: undefined
			})
		}
	}

	const printServiceSticky = service.map((item, index) => {
		return item.img ? (
			<p key={index} className={activeLogo.includes(item.title) ? 'itemSticky selected' : 'itemSticky'} onClick={() => handleClickLogo(item.title)}>
				<img src={item.img} alt="logo-tiki" height={24} width={56} />
			</p>
		) : (<Fragment key={index}></Fragment>)
	})

	//rating
	const handleClickRating = (number: number, text: string) => {
		setRatingArray([text])
		if (!filterContext) return;
		const { handleChangeFilter, filters } = filterContext
		handleChangeFilter({
			...filters, rating: number
		})
	}

	const handleDeleteRating = () => {
		setRatingArray([])
		if (!filterContext) return;
		const { handleChangeFilter, filters } = filterContext
		handleChangeFilter({
			...filters, rating: undefined
		})
	}

	const printRating = ratingArray.map((item, index) => {
		return (
			<p className='item' key={index}>
				{item}
				<a onClick={handleDeleteRating}>
					<img src="https://salt.tikicdn.com/ts/upload/09/59/a4/a99bbc2a604f745281eca1aab8c87345.png" alt="logoX" />
				</a>
			</p>
		)
	})

	//portfolio

	const handleClickPortfolio: (id: string, text: string) => void = (id, text) => {

		setPortfolioArray([text])
		if (!filterContext) return;
		const { handleChangeFilter, filters } = filterContext
		handleChangeFilter({
			...filters, category: id
		})
	}

	const renderPortfolio = productPortfolio.map((item) => {
		return (
			<a key={item.id} onClick={() => handleClickPortfolio(item.id, item.title)}>{item.title}</a>
		)
	})

	const handleDeletePortfolio = () => {
		setPortfolioArray([])
		if (!filterContext) return;
		const { handleChangeFilter, filters } = filterContext
		handleChangeFilter({
			...filters, category: undefined
		})
	}

	const printPortfolio = portfolioArray.map((item, index) => {
		return (
			<p className='item' key={index}>
				{item}
				<a onClick={handleDeletePortfolio}>
					<img src="https://salt.tikicdn.com/ts/upload/09/59/a4/a99bbc2a604f745281eca1aab8c87345.png" alt="logoX" />
				</a>
			</p>
		)
	})

	//price

	const handleClickPrice: (id: string, text: string) => void = (id, text) => {
		setPriceArray([text])
		if (!filterContext) return;
		const { handleChangeFilter, filters } = filterContext
		handleChangeFilter({
			...filters, price: id
		})
	}

	const renderPrice = price.map((price) => {
		return (
			<div className="item" key={price.id}>
				<span onClick={() => handleClickPrice(price.id, price.title)}>{price.title}</span>
			</div>
		)
	})

	const handleDeletePrice = () => {
		setPriceArray([])
		if (!filterContext) return;
		const { handleChangeFilter, filters } = filterContext
		handleChangeFilter({
			...filters, price: undefined
		})
	}

	const printPrice = priceArray.map((item, index) => {
		return (
			<p className='item' key={index}>
				{item}
				<a onClick={handleDeletePrice}>
					<img src="https://salt.tikicdn.com/ts/upload/09/59/a4/a99bbc2a604f745281eca1aab8c87345.png" alt="logoX" />
				</a>
			</p>
		)
	})

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!valueInput.to) {
			const text = `Từ 0đ đến ${valueInput.from}đ`
			setPriceArray([text])
			if (!filterContext) return;
			const { handleChangeFilter, filters } = filterContext
			handleChangeFilter({
				...filters, price: `0,${valueInput.from}`
			})
		}
		if (!valueInput.from) {
			const text = `Từ 0đ đến ${valueInput.to}đ`
			setPriceArray([text])
			if (!filterContext) return;
			const { handleChangeFilter, filters } = filterContext
			handleChangeFilter({
				...filters, price: `0,${valueInput.to}`
			})
		}
		if (!valueInput.to && !valueInput.from) {
			const text = `Từ 0đ đến 0đ`
			setPriceArray([text])
			if (!filterContext) return;
			const { handleChangeFilter, filters } = filterContext
			handleChangeFilter({
				...filters, price: "0,0"
			})
		}
		if (valueInput.to && valueInput.from) {
			const text = `Từ ${valueInput.from}đ đến ${valueInput.to}đ`
			setPriceArray([text])
			if (!filterContext) return;
			const { handleChangeFilter, filters } = filterContext
			handleChangeFilter({
				...filters, price: Object.values(valueInput).join()
			})
		}
	}

	const [valueInput, setValueInput] = useState<any>({})
	const handleChange = (event: any) => {
		setValueInput({
			...valueInput, [event.target.name]: Number(event.target.value)
		})
	}

	//sortList

	const handleClickSortList = (id: string) => {
		setActiveIndex(id)
		if (!filterContext) return;
		const { handleChangeFilter, filters } = filterContext
		handleChangeFilter({
			...filters, sort: id
		})
	}


	const renderSortList = sortList.map((item, index) => {
		return (
			<a key={index} className={item.id === activeIndex ? "active" : ""} onClick={() => handleClickSortList(item.id)}>{item.title}</a>
		)
	})

	return (
		<>
			<StyledContainerBody>
				<CategoryViewstyle>
					<div className='SidebarRoot'>
						<div>
							<div className='block'>
								<h4 className='title'>Danh mục sản phẩm</h4>
								<div className='listCollapse'>
									{renderPortfolio}
								</div>
							</div>

							<div className='locationWrapper'>
								<div className='deliveryZone'>
									<h4 className='titleLocate'>ĐỊA CHỈ NHẬN HÀNG</h4>
									<div className='address'>Q.Hoàn Kiếm, P.Hàng Trống, Tp.Hà Nội</div>
									<div className='addressChange'>ĐỔI ĐỊA CHỈ</div>
								</div>
							</div>
						</div>
						<StyledServiceFilter>
							<h4 className='title'>DỊCH VỤ</h4>
							{renderService}
						</StyledServiceFilter>
						<div className='block'>
							<h4 className='title'>Nơi bán</h4>
							<div className='listCollapse'>
								{renderLocation}
							</div>
							<a href="" className='toggle'>
								Xem thêm
							</a>
						</div>
						<div className='block'>
							<h4 className='title'>Đánh giá</h4>
							<div className='ratingList'>
								<RatingStar rating={5} handleClickRating={handleClickRating} />
								<RatingStar rating={4} handleClickRating={handleClickRating} />
								<RatingStar rating={3} handleClickRating={handleClickRating} />
							</div>
						</div>
						<div className='block'>
							<h4 className='title'>Giá</h4>
							<div className='fast-price-filter'>
								{renderPrice}
							</div>
							<div className="price-small-text">Chọn khoảng giá</div>
							<div className="input-group">
								<form onSubmit={handleSubmit}>
									<label onChange={handleChange}>
										<input type="number" name="from" placeholder='0' />
									</label>
									<span>-</span>
									<label onChange={handleChange}>
										<input type="number" name="to" placeholder='0' />
									</label>
									<input type="submit" value="Áp dụng" className='submit' />
								</form>
							</div>

						</div>
						<div className="block">
							<h4 className="title">Camera trước</h4>
							<div className='listCollapse'>
								<label htmlFor="">
									<input type="checkbox" />
									<div className='serviceWrap'>
										<span>Dưới 8MP</span>
									</div>
								</label>
								<label htmlFor="">
									<input type="checkbox" />
									<div className='serviceWrap'>
										<span>Từ 8MP đến 12MP</span>
									</div>
								</label>
							</div>
						</div>
						<div className="block">
							<h4 className="title">Thương hiệu</h4>
							<div className='listCollapse'>
								<label htmlFor="">
									<input type="checkbox" />
									<div className='serviceWrap'>
										<span>Apple</span>
									</div>
								</label>
							</div>
						</div>
						<div className="block">
							<h4 className="title">RAM</h4>
							<div className='listCollapse'>
								<label htmlFor="">
									<input type="checkbox" />
									<div className='serviceWrap'>
										<span>1GB</span>
									</div>
								</label>
								<label htmlFor="">
									<input type="checkbox" />
									<div className='serviceWrap'>
										<span>2GB</span>
									</div>
								</label>
								<label htmlFor="">
									<input type="checkbox" />
									<div className='serviceWrap'>
										<span>4GB</span>
									</div>
								</label>
							</div>
						</div>
						<div className="block">
							<h4 className="title">Kích thước màn hình</h4>
							<div className='listCollapse'>
								<label htmlFor="">
									<input type="checkbox" />
									<div className='serviceWrap'>
										<span>Dưới 4.5 inch</span>
									</div>
								</label>
								<label htmlFor="">
									<input type="checkbox" />
									<div className='serviceWrap'>
										<span>Trên 4.5 inch</span>
									</div>
								</label>
							</div>
						</div>
						<div className="block">
							<h4 className="title">dung lượng pin</h4>
							<div className='listCollapse'>
								<label htmlFor="">
									<input type="checkbox" />
									<div className='serviceWrap'>
										<span>Dưới 2.500 mAh</span>
									</div>
								</label>
								<label htmlFor="">
									<input type="checkbox" />
									<div className='serviceWrap'>
										<span>Từ 3.500 mAh đến 5.000 mAh</span>
									</div>
								</label>
							</div>
						</div>
						<div className='block'>
							<h4 className='title'>màu sắc</h4>
							<div className='listCollapse'>
								<label htmlFor="">
									<input type="checkbox" />
									<div className='serviceWrap'>
										<span>Đen</span>
									</div>
								</label>
								<label htmlFor="">
									<input type="checkbox" />
									<div className='serviceWrap'>
										<span>Xanh</span>
									</div>
								</label>
								<label htmlFor="">
									<input type="checkbox" />
									<div className='serviceWrap'>
										<span>Hồng</span>
									</div>
								</label>
								<label htmlFor="">
									<input type="checkbox" />
									<div className='serviceWrap'>
										<span>Xám</span>
									</div>
								</label>
								<label htmlFor="">
									<input type="checkbox" />
									<div className='serviceWrap'>
										<span>Bạc</span>
									</div>
								</label>
							</div>
							<a href="" className='toggle'>
								Xem thêm
							</a>
						</div>
						<div className="block">
							<h4 className="title">nhà cung cấp</h4>
							<div className='listCollapse'>
								<label htmlFor="">
									<input type="checkbox" />
									<div className='serviceWrap'>
										<span>Tiki Trading</span>
									</div>
								</label>
								<label htmlFor="">
									<input type="checkbox" />
									<div className='serviceWrap'>
										<span>MediaMart Official Store</span>
									</div>
								</label>
							</div>
						</div>
						<div className="block">
							<h4 className="title">giao hàng</h4>
							<div className='listCollapse'>
								<label htmlFor="domestic">
									<input type="radio" id="domestic" />
									<div className='serviceWrap'>
										<span>Hàng nội địa</span>
									</div>
								</label>
								<label htmlFor="international">
									<input type="radio" id="international" />
									<div className='serviceWrap'>
										<span>Hàng quốc tế</span>
									</div>
								</label>
							</div>
						</div>
					</div>
					<CategoryViewstyleRight>
						<div className='inner'>
							<div className='searchSumary'>
								<div className='titleCVR'>
									<h1>Kết quả tìm kiếm cho {filterContext?.filters.searchText}</h1>
								</div>
								<SorterRoot>
									<div className='sorterBottom'>
										<div className='sorterTabs'>
											<div className='sortList'>
												{renderSortList}
											</div>
										</div>
									</div>
									<div className='filterItem'>
										{printServiceSticky}
										{printLocation}
										{printService}
										{printPortfolio}
										{printPrice}
										{printRating}
										{printLocation.length || printRating.length || printService.length || printPortfolio.length || printPrice.length ? <p className='item deleteAll' onClick={handleDeleteAll}>
											Xoá tất cả
										</p> : ""}
									</div>
								</SorterRoot>
							</div>
							<div className='product-list-wrapper'>
								{renderProduct}
							</div>
							<div>
								<ReactPaginate
									breakLabel="..."
									nextLabel="next >"
									onPageChange={handlePageClick}
									pageRangeDisplayed={5}
									pageCount={pageCount}
									previousLabel="< previous"
									renderOnZeroPageCount={() => null}
									containerClassName="pagination"
									pageLinkClassName='page-num'
									previousLinkClassName='page-num'
									nextLinkClassName='page-num'
									activeLinkClassName='active'
									disableInitialCallback={true}
									initialPage={initialPage}
								/>
							</div>
						</div>
					</CategoryViewstyleRight>
				</CategoryViewstyle>
			</StyledContainerBody>
		</>
	)
}

export default Body
