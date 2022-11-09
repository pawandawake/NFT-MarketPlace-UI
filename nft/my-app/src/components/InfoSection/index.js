import React from 'react'
import "./infoSection.css"
import {INFO_ITEMS} from "../data/infoItems"
import InfoItem from "./InfoItem"

const InfoSection = () => {
  return (
    <div className='info-section'>
      <div className='is-heading absolute-center'>
        <span className='heading-gradient'>Create and sell your NFTs</span>
      </div>
      <div className='is-items-container'>
        {INFO_ITEMS.map((_infoIItem)=>
        <InfoItem item={_infoIItem}/>)}
      </div>
    </div>
  )
}

export default InfoSection;