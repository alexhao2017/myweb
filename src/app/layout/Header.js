import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
class Header extends Component {

  state = {
    isActive: false,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }
  render() {
    return (
      <nav className="navbar"
          aria-label="main navigation"
          
          
          >
        <div className="navbar-brand">
          <NavLink to='/' className="navbar-item" style={{padding:0}} activeClassName='is-active'>
            <img
              style={{
                
                maxHeight:'80px',
                marginRight: 2,
                backgroundColor: 'orange'

              }}
              src="timeline.png"
              alt="hao`s world"  />
            
          </NavLink>
        </div>
        <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start">
            <NavLink className="navbar-item" to='blog' activeClassName='is-active'>
              <span className="icon" style={{ marginRight: 5 }}>
                <i className="fas fa-code"></i>
              </span >
              Code Blog
            </NavLink>
            <NavLink to='/design' className="navbar-item" activeClassName='is-active'>
              <span className="icon" style={{ marginRight: 5 }}>
                <i className="fa fa-desktop"></i>
              </span>
              Design
            </NavLink >
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-item " >
                Projects
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item">
                  Overview
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                  This Site
                </a>
                <a className="navbar-item" >
                  The React Way
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <a className="navbar-item" href="https://github.com/alexhao2017">
              <span className="icon">
                <i className="fab fa-lg fa-github"></i>
              </span>
            </a>
            <a className="navbar-item" href="#">
              <span className="icon has-text-info" style={{ color: '#0084FF' }}>
                <i className="fab fa-lg fa-twitter"></i>
              </span>
            </a>
            <a className="navbar-item" href="#">
              About me
              <span className="icon" style={{marginLeft: 5 }}>
                <i className="fa fa-male"></i>
              </span>
            </a>
          </div>
        </div>
      </nav>
    )
  }
}
export default Header