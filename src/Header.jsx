function Header () {
    return (<header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-4"> <img src="./svg/youtube.svg" style={{width:"50px"}} alt="" /> YouTube 🎃 👻 🥶 🏜️ R e a c t</span>
    </a>

    <ul className="nav nav-pills">
      <li className="nav-item"  style={{margin:"2px"}}><button type="button" className="btn btn-light"><a href="#" className="nav-link" ariaCurrent="page">Home</a></button></li>
      <li className="nav-item" style={{margin:"2px"}}><button type="button" className="btn btn-light"><a href="#" className="nav-link" ariaCurrent="page">Features</a></button></li>
      <li className="nav-item" style={{margin:"2px"}}><button type="button" className="btn btn-light"><a href="#" className="nav-link" ariaCurrent="page">Pricing</a></button></li>
      <li className="nav-item" style={{margin:"2px"}}><button type="button" className="btn btn-light"><a href="#" className="nav-link" ariaCurrent="page">About</a></button></li>
      <li className="nav-item" style={{margin:"2px"}}><button type="button" className="btn btn-light"><a href="#" className="nav-link" ariaCurrent="page">Contact</a></button></li>
    </ul>
  </header>
      
    );
}

export default Header;
