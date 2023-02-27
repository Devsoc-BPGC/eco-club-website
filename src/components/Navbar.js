import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.png";

const Navbar = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            navBarActiveClass: "",
        };
    }

    toggleHamburger() {
        // toggle the active boolean in the state
        this.setState(
            {
                active: !this.state.active,
            },
            // after state has been updated,
            () => {
                // set the class in state for the navbar accordingly
                this.state.active
                    ? this.setState({
                          navBarActiveClass: "is-active",
                      })
                    : this.setState({
                          navBarActiveClass: "",
                      });
            }
        );
    }

    render() {
        return (
            <nav
                className="navbar is-transparent"
                role="navigation"
                aria-label="main-navigation"
                style={{
                    position: "sticky",
                    top: "0",
                    backgroundColor: "#D9D9D9",
                }}
            >
                <div className="container">
                    <div className="navbar-brand">
                        {/* Hamburger menu */}
                        <div
                            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                            data-target="navMenu"
                            role="menuitem"
                            tabIndex={0}
                            onClick={() => this.toggleHamburger()}
                            onKeyDown={() => this.toggleHamburger()}
                            style={{ marginLeft: "unset" }}
                        >
                            <span />
                            <span />
                            <span />
                        </div>
                        <Link to="/" className="navbar-item" title="Logo">
                            <img
                                src={logo}
                                alt="Kaldi"
                                style={{ scale: '2.5', margin: "0 50px" }}
                            />
                        </Link>
                    </div>
                    <div
                        id="navMenu"
                        className={`navbar-menu ${this.state.navBarActiveClass}`}
                    >
                        <div className="navbar-start has-text-centered">
                            <Link className="navbar-item" to="/resources">
                                Resources & Information
                            </Link>
                            <Link className="navbar-item" to="/volunteer">
                                Volunteering
                            </Link>
                            <Link className="navbar-item" to="/upcoming">
                                Upcoming Events
                            </Link>
                            <Link className="navbar-item" to="/news">
                                News and Updates
                            </Link>
                            <Link className="navbar-item" to="/contact">
                                Contact
                            </Link>
                            <Link className="navbar-item" to="/about">
                                About
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
};

export default Navbar;
