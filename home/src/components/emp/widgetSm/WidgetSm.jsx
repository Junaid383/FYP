import "./widgetSm.css"
import React from 'react';

import {Visibility} from '@material-ui/icons' 

export default function WidgetSm() {
  return <div className="widgetSm">
      <span className="widgetSmTitle">Most Ordered</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://cartzilla.createx.studio/img/grocery/single/01.jpg" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Dry Fruits</span>
            <span className="widgetSmUserTitle">182 ordered</span>
          </div>
             <button className="widgetSmButton">
               <Visibility className="widgetSmIcon"/>
               Display
               </button>     
        </li>
        <li className="widgetSmListItem">
          <img src="https://cartzilla.createx.studio/img/grocery/single/01.jpg" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Dry Fruits</span>
            <span className="widgetSmUserTitle">182 ordered</span>
          </div>
             <button className="widgetSmButton">
               <Visibility className="widgetSmIcon"/>
               Display
               </button>     
        </li>
        <li className="widgetSmListItem">
          <img src="https://cartzilla.createx.studio/img/grocery/single/01.jpg" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Dry Fruits</span>
            <span className="widgetSmUserTitle">182 ordered</span>
          </div>
             <button className="widgetSmButton">
               <Visibility className="widgetSmIcon"/>
               Display
               </button>     
        </li>
        <li className="widgetSmListItem">
          <img src="https://cartzilla.createx.studio/img/grocery/single/01.jpg" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Dry Fruits</span>
            <span className="widgetSmUserTitle">182 ordered</span>
          </div>
             <button className="widgetSmButton">
               <Visibility className="widgetSmIcon"/>
               Display
               </button>     
        </li>
        <li className="widgetSmListItem">
          <img src="https://cartzilla.createx.studio/img/grocery/single/01.jpg" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Dry Fruits</span>
            <span className="widgetSmUserTitle">182 ordered</span>
          </div>
             <button className="widgetSmButton">
               <Visibility className="widgetSmIcon"/>
               Display
               </button>     
        </li>
      </ul>
  </div>;
}
