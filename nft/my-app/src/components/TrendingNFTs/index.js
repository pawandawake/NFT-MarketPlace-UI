import React from 'react'
import Slider from 'react-slick'
import "./trendingNFTs.css"
import {trendingNfts} from "../data/trendingNfts";
import TrendingCard from './TrendingCard';
import Button from "../../common/button";
import { NavLink } from "react-router-dom";

const settings={slidesToShow:3,slidesToScroll:1,
  autoPlay:true,speed:500,arrows:false};

const TrendingNFTs = () => {
  return (
    <div className='trending-nfts'>
      <div className='tn-title absolute-center'>
        <span className='heading-gradient '>TRENDING NFTs</span>
      </div>
      <div className='tn-bg-blob'></div>
      <Slider {...settings}>
        {trendingNfts.map((_nft)=>(<TrendingCard nft={_nft}/>))}
      </Slider>
      <div className='tn-btn absolute-center'>
      <NavLink to="/explore">
        <Button btnText='SEE MORE' type='Secondary' customClass="seemore-btn" btnOnClick="/explore" />
        </NavLink>
      </div>
    </div>
  )
}

export default TrendingNFTs