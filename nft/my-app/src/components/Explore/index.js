import React from 'react'
import "./trendingNFTs.css"
import {trendingNfts} from "../data/trendingNfts";
import TrendingCard from './TrendingCard';

const Explore = () => {
  return (
    <div class="ex">
      {trendingNfts.map((_nft)=>(<TrendingCard nft={_nft}/>))}
    </div>
  )
}

export default Explore