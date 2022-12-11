import React from 'react'
import '..//HomeProducts/HomeProducts.scss'
import { Grid } from '@mui/material';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';

function HomeProducts() {
    return (
        <div>
            <div className="home-products">
                <div className="home-products-top">
                    <h3>What Happens Here</h3>
                    <h1>COFFEE BUILD YOUR BASE.</h1>
                    <div className="flavours-top-line"></div>
                </div>

                <Grid container spacing={3} className='home-products-details'>

                    <Grid className='home-product' item md={3}>
                        <div className="home-product-img">
                            <img src="https://barista.qodeinteractive.com/wp-content/uploads/2016/03/product-image-1-633x633.jpg" alt="" />
                            <div className="home-product-add-to-cart">
                                <ShoppingBagRoundedIcon className='shopping-icon'/>
                                <h5>ADD TO CART</h5>
                            </div>
                        </div>

                        <h3>PAPER POUCH</h3>
                        <div className="stars">
                            <StarRateRoundedIcon className='star-icon' />
                            <StarRateRoundedIcon className='star-icon' />
                            <StarRateRoundedIcon className='star-icon' />
                            <StarRateRoundedIcon className='star-icon' />
                            <StarRateRoundedIcon className='star-icon' />
                        </div>
                        <span className='home-product-price'>$46.00</span>
                    </Grid>

                    <Grid className='home-product' item md={3}>
                        <div className="home-product-img">
                            <img src="https://barista.qodeinteractive.com/wp-content/uploads/2016/03/product-image-2-633x633.jpg" alt="" />
                            <div className="home-product-add-to-cart">
                                <ShoppingBagRoundedIcon className='shopping-icon'/>
                                <h5>ADD TO CART</h5>
                            </div>
                        </div>

                        <h3>PAPER BAG</h3>
                        <div className="stars">
                            <StarRateRoundedIcon className='star-icon' />
                            <StarRateRoundedIcon className='star-icon' />
                            <StarRateRoundedIcon className='star-icon' />
                            <StarRateRoundedIcon className='star-icon' />
                            <StarRateRoundedIcon className='star-icon' />
                        </div>
                        <span className='home-product-old-price'>$98.00</span> <span className='home-product-price'>$79.00</span> 
                    </Grid>

                    <Grid className='home-product' item md={3}>
                        <div className="home-product-img">
                            <img src="https://barista.qodeinteractive.com/wp-content/uploads/2016/03/product-image-3-633x633.jpg
                            " alt="" />
                            <div className="home-product-add-to-cart">
                                <ShoppingBagRoundedIcon className='shopping-icon'/>
                                <h5>ADD TO CART</h5>
                            </div>
                        </div>

                        <h3>PLASTIC POUCH</h3>
                        <div className="stars">
                            <StarRateRoundedIcon className='star-icon' />
                            <StarRateRoundedIcon className='star-icon' />
                            <StarRateRoundedIcon className='star-icon' />
                            <StarRateRoundedIcon className='star-icon' />
                            <StarRateRoundedIcon className='star-icon' />
                        </div>
                        <span className='home-product-price'>$71.00</span>
                    </Grid>

                    <Grid className='home-product' item md={3}>
                        <div className="home-product-img">
                            <img src="https://barista.qodeinteractive.com/wp-content/uploads/2016/03/product-image-4-633x633.jpg    
                            " alt="" />
                            <div className="home-product-add-to-cart">
                                <ShoppingBagRoundedIcon className='shopping-icon'/>
                                <h5>ADD TO CART</h5>
                            </div>
                        </div>

                        <h3>COFFEE POT</h3>
                        <div className="stars">
                            <StarRateRoundedIcon className='star-icon' />
                            <StarRateRoundedIcon className='star-icon' />
                            <StarRateRoundedIcon className='star-icon' />
                            <StarRateRoundedIcon className='star-icon' />
                            <StarRateRoundedIcon className='star-icon' />
                        </div>
                        <span className='home-product-price'>$27.00</span>
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}

export default HomeProducts