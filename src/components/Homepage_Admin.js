import React, { useContext } from 'react';
import { Navbar, Container, NavLink, Nav } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';
import { UserContext } from './Authentication/UserContext'
function HomePageAdmin() {
    const { username } = useContext(UserContext);
    let history = useHistory()
    const style = () => {
        return (
          <style jsx>{`
            .myTitle {
                padding: 15px 0px;
                color:#dffffd;
                font-size:2rem;
                font-weight: bold;  
            }
            .nav {
                margin-left: 20%;
                width: 50%;
                display: flex;
            }
            .navlink {
                color: #FFF;
                margin: 0% 5%;
                text-decoration: none;
            }
            .logout {
                color: #FFF;
                margin-left: 200px;
            }
          `}</style>
        )
      }
    return (
        <div className="sample">
        {style()}
            <Navbar bg="myBg" expand="sm" variant="dark">
                <Container>
                    <Navbar.Brand className="myTitle" href="/homepage">Obstacle Crossed</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <div className="nav">
                        <Link className="navlink" to="/shopadmin">Shop</Link>
                        <Link className="navlink" to="/rankadmin">Ranking</Link>
                        <Link className="navlink" to="/manageusers">Users</Link>
                    </div>
                    <NavLink className="logout" href="/_admin" onClick={() => history.push("/_admin")}>Logout</NavLink>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="home-picture-container">
                <div className="pic">
                    <img src="#" alt="avatar" />
                </div>
                <Link to="/userprofile" className="username-tag">{username}</Link>
            </div>
            <div className="play-background">
                <button className="button-container">
                    <Link to="/playadmin" className="play-text">PLAY</Link>
                </button>
            </div>
        </div> 
    )
}
export default HomePageAdmin;