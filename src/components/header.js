import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Header(props) {

  const searchkey = (e) => {
    props.searchkey(e.target.value);
  }
	return (
		<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/todo-list/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/todo-list/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/todo-list/about">About</Link>
        </li>
        </ul>
        { (props.search) &&
      <form className="d-flex">
        <input className="form-control me-2" onChange={searchkey} type="search" placeholder="Search keyword" aria-label="Search"/>
      </form>
    }
    </div>
  </div>
</nav>
</>
		);
}

Header.defaultProps = {
  title: "marchipoyaav ra"
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header;