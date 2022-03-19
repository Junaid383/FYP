import "./widgetSm.css"
import {Visibility} from '@material-ui/icons'

export default function WidgetSm() {
  return <div className="widgetSm">
      <span className="widgetSmTitle">Recent Clients</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://blogs-images.forbes.com/danschawbel/files/2017/12/Dan-Schawbel_avatar_1512422077-400x400.jpg" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ali Asad</span>
            <span className="widgetSmUserTitle">Customer</span>
          </div>
             <button className="widgetSmButton"> 
               <Visibility className="widgetSmIcon"/>
               Display
               </button>     
        </li>
        <li className="widgetSmListItem">
          <img src="https://blogs-images.forbes.com/danschawbel/files/2017/12/Dan-Schawbel_avatar_1512422077-400x400.jpg" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ali Asad</span>
            <span className="widgetSmUserTitle">Customer</span>
          </div>
             <button className="widgetSmButton">
               <Visibility className="widgetSmIcon"/>
               Display
               </button>     
        </li>
        <li className="widgetSmListItem">
          <img src="https://blogs-images.forbes.com/danschawbel/files/2017/12/Dan-Schawbel_avatar_1512422077-400x400.jpg" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ali Asad</span>
            <span className="widgetSmUserTitle">Customer</span>
          </div>
             <button className="widgetSmButton">
               <Visibility className="widgetSmIcon"/>
               Display
               </button>     
        </li>
        <li className="widgetSmListItem">
          <img src="https://blogs-images.forbes.com/danschawbel/files/2017/12/Dan-Schawbel_avatar_1512422077-400x400.jpg" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ali Asad</span>
            <span className="widgetSmUserTitle">Customer</span>
          </div>
             <button className="widgetSmButton">
               <Visibility className="widgetSmIcon"/>
               Display
               </button>     
        </li>
        <li className="widgetSmListItem">
          <img src="https://blogs-images.forbes.com/danschawbel/files/2017/12/Dan-Schawbel_avatar_1512422077-400x400.jpg" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ali Asad</span>
            <span className="widgetSmUserTitle">Customer</span>
          </div>
             <button className="widgetSmButton">
               <Visibility className="widgetSmIcon"/>
               Display
               </button>     
        </li>
      </ul>
  </div>;
}
