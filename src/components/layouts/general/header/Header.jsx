import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import menus from "../../menu";

const Header = () => {
  return (
    <div id="header" className="header bg-color">
      <div className="container">
        <div className="row">
          <div className="header-wrap">
            <div className="col-md-2">
              <div id="logo" className="logo">
                <Link to="/">
                  <img
                    src="/images/logo.png"
                    alt="east-africa"
                    width={157}
                    height={29}
                  />
                </Link>
              </div>
              {/* logo*/}
            </div>
            {/* .col-md-2  */}
            <div className="col-md-10">
              <div className="flat-show-search">
                <div className="show-search">
                  <Link to="#">
                    <i className="fa fa-search"></i>
                  </Link>
                </div>
                <div className="top-search">
                  <form action="#" id="searchform-all" method="get">
                    <div>
                      <input
                        type="text"
                        id="s"
                        className="sss"
                        placeholder="Search..."
                      />
                      <input type="submit" value="" id="searchsubmit" />
                    </div>
                  </form>
                </div>
                {/* <!-- /.top-search --> */}
              </div>
              {/* <!-- /.flat-show-search -->*/}
              <div className="nav-wrap">
                <div className="btn-menu">
                  <span></span>
                </div>
                {/* <!-- //mobile menu button -->*/}
                <nav id="mainnav" className="mainnav">
                  <ul className="menu">
                    {menus.map((data) => (
                      <li
                        className={
                          data.name === this.props.data.names ? "active" : ""
                        }
                        key={data.id}
                      >
                        <Link
                          to={data.linkmenu}
                          onClick={() => {
                            window.location.href = data.linkmenu;
                          }}
                        >
                          {data.name}{" "}
                          <i
                            className="fa fa-angle-down"
                            aria-hidden="true"
                          ></i>
                        </Link>
                        {data.namesub === undefined ? (
                          ""
                        ) : (
                          <ul className="sub-menu">
                            {data.namesub.map((submenus) => (
                              <li key={submenus.id}>
                                <Link
                                  to={submenus.links}
                                  onClick={() => {
                                    window.location.href = submenus.links;
                                  }}
                                >
                                  {submenus.sub}
                                </Link>
                                {submenus.submenu === undefined ? (
                                  ""
                                ) : (
                                  <ul className="sub-menu">
                                    {submenus.submenu.map((menusub) => (
                                      <li key={menusub.id}>
                                        <Link
                                          to={menusub.linksub}
                                          onClick={() => {
                                            window.location.href =
                                              menusub.linksub;
                                          }}
                                        >
                                          {menusub.titlesub}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                  {/* <!-- /.menu -->*/}
                </nav>
                {/* <!-- /#mainnav -->*/}
              </div>
              {/* <!-- /.nav-wrap --> */}
            </div>
            {/* <!-- /.col-md-9 --> */}
          </div>
          {/* <!-- /.header-wrap --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </div>
  );
};

export default Header;
