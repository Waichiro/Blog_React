import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>

        <div className="sidebarItem">
          <span className='sidebarTitle'>ABOUT ME</span>
          <img src="https://i.pinimg.com/474x/80/60/60/806060f95380b61881949df3532d3f76.jpg" alt="" />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam tenetur porro facere odio expedita veritatis.</p>
        
          <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
              <li className="sidebarListItem">Life</li>
              <li className="sidebarListItem">Music</li>
              <li className="sidebarListItem">Style</li>
              <li className="sidebarListItem">Sport</li>
              <li className="sidebarListItem">Tech</li>
              <li className="sidebarListItem">Cinema</li>

            </ul>
          </div>

          <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW</span>
            <div className="sidebarSocial">
              <i className="sidebarIcon fa-brands fa-facebook"></i>
              <i className="sidebarIcon fa-brands fa-twitter"></i>
              <i className="sidebarIcon fa-brands fa-instagram"></i>
              <i className="sidebarIcon fa-brands fa-github"></i>
            </div>
          </div>

        </div>
        

        
       
    </div>
  )
}
