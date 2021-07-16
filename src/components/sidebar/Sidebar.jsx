import "./sidebar.css";
import {ReportOutlined,BusinessCenterOutlined,ChatBubbleOutlineOutlined,DynamicFeedOutlined,MailOutlineOutlined,LineStyle,InsertChartOutlinedRounded, Timeline, TrendingUp, PermIdentity,Apps,MonetizationOn} from "@material-ui/icons"
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dahsboard</h3>
          <ul className="sidebarList">
          <li className="sidebarListItem active">
          <LineStyle className="sidebarIcon"/>
            Home
          </li>
          <li className="sidebarListItem">
          <Timeline className="sidebarIcon"/>
            Analytics
          </li>
          <li className="sidebarListItem">
          <TrendingUp className="sidebarIcon"/>
            Sales
          </li>
        
          </ul>
          
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
          <li className="sidebarListItem active">
          <PermIdentity className="sidebarIcon"/>
            Users
          </li>
          <li className="sidebarListItem">
          <Apps className="sidebarIcon"/>
            Products
          </li>
          <li className="sidebarListItem">
          <MonetizationOn className="sidebarIcon"/>
            Transactions
          </li>
          <li className="sidebarListItem">
          <InsertChartOutlinedRounded className="sidebarIcon"/>
            Reports
          </li>
        
          </ul>
          
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
          <li className="sidebarListItem active">
          <MailOutlineOutlined className="sidebarIcon"/>
            Mail
          </li>
          <li className="sidebarListItem">
          <DynamicFeedOutlined className="sidebarIcon"/>
            Feedback
          </li>
          <li className="sidebarListItem">
          <ChatBubbleOutlineOutlined className="sidebarIcon"/>
            Messages
          </li>
        
          </ul>
          
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
          <li className="sidebarListItem active">
          <BusinessCenterOutlined className="sidebarIcon"/>
            Manage
          </li>
          <li className="sidebarListItem">
          <Timeline className="sidebarIcon"/>
            Analytics
          </li>
          <li className="sidebarListItem">
          <ReportOutlined className="sidebarIcon"/>
            Reports
          </li>
        
          </ul>
          
        </div>
      </div>
      
      
    </div>
  );
}
