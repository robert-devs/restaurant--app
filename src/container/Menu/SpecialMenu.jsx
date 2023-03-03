import React from 'react'
import { images, data } from '../../constants'
import './SpecialMenu.css'
import { SubHeading, MenuItem } from '../../components'

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headText__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMen-menu_wine flex_center">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              price={wine.price}
              tags={wine.tags}
              title={wine.title}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu" />
      </div>

      <div className=" app__specialMen-menu_cocktails flex_center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktails, index) => (
            <MenuItem
              key={cocktails.title + index}
              price={cocktails.price}
              tags={cocktails.tags}
              title={cocktails.title}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: '15px' }}>
      <button type="button" className=" custom__button">
        View More
      </button>
    </div>
  </div>
)

export default SpecialMenu
