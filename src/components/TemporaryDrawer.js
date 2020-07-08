import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withRouter } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import lannister from '../assests/houses.jpg';
import crew from '../assests/crew.jpeg';
import trivia from '../assests/tri.jpg'
import blog from '../assests/blog.png'
import whitewalkers from '../assests/walker.jpg'
import doth from '../assests/doth2.jpg'
import free from '../assests/freefolk.jpg'
import loca from '../assests/loca.jpg'

import gotlogo from '../assests/gotlogo.jpg'

import unsully from '../assests/unsully.jpg'

import details from '../assests/de.jpeg'
import heir from '../assests/hierr.jpeg'
import PlaceIcon from '@material-ui/icons/Place';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';



class TemporaryDrawer extends React.Component {
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
        open: false,
        name : "DashBoard",
        open:false,
        bsites:false,
    };

    handlehouses = (e) => {
        e.preventDefault();
        this.setState({
            open: !this.state.open
        }, () => {
            if (this.state.open === true) {
                this.props.history.push('/Noble_houses');

            }
            else {
                this.props.history.push('/');

            }
        })
        console.log(this.props.history)

    }
    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };
    handleSites=()=>{
        this.setState({
            open:true,
        })
    }
    handleBangaloreSites = () =>{
        this.setState({
                bsites:true,
           
        })
    }
    render() {
        const { open, name } = this.state
        const { classes, theme } = this.props;


        const sideList = (
            <div className="categorydivision_d">
               <div className="mdrawer">
                <img src={gotlogo} alt="no stark"  className="houses_image_d" />
                <NavLink to="/home" className="buttonclasscast" activeStyle={{ color: "#1890ff" }}>The DashBoard</NavLink>
                    </div>
                <Divider />

                <div className="mdrawer">
                <img src={lannister} alt="no stark"  className="houses_image_d" />
                    {/* <Link to='/houses'class="buttonclass" value="The Great Houses in Westero's" > <b>Great Houses in Westero's</b></Link> */}
                    {/* <button class="buttonclasscast" value="The Great Houses in Westero's" onClick={this.handlehouses} > <b>
                        {open ? name : "Great Houses Of Westro's"}
                    </b></button> */}
                    <NavLink to="/Noble_houses" className="buttonclasscast" activeStyle={{ color: "#1890ff" }}>Great Houses Of Westro's</NavLink>

                </div>
                <Divider />
                {/* <Button component={Link} to ="/houses"class="buttonclass" value="The Great Houses in Westero's" > <b>Great Houses in Westero's</b></Button> */}

                <div className="mdrawer">
                <img src={crew} alt="no stark"  className="houses_image_d" />
                <NavLink to="/crewandcast" className="buttonclasscast" activeStyle={{ color: "#1890ff" }}>  Cast & Crew</NavLink>
                </div>
                <Divider />
                <div className="mdrawer">
                <img src={loca} alt="no stark"  className="houses_image_d" />
                <NavLink to="/tandl" className="buttonclasscast" activeStyle={{ color: "#1890ff" }}>Technical Specs & Location</NavLink>
                </div>
                <Divider />
                <div className="mdrawer">
                <img src={whitewalkers} alt="no stark"  className="houses_image_d" />
                <NavLink to="/whitewalkers" className="buttonclasscast" activeStyle={{ color: "#1890ff" }}>The White Walker</NavLink>
            
                 </div>
                <Divider />
                <div className="mdrawer">
                <img src={unsully} alt="no stark"  className="houses_image_d" />
                <NavLink to="/unsullied" className="buttonclasscast" activeStyle={{ color: "#1890ff" }}>The Unsullied</NavLink>
                    </div>
                <Divider />
                <div className="mdrawer">
                <img src={free} alt="no stark"  className="houses_image_d" />
                <NavLink to="/freefolk" className="buttonclasscast" activeStyle={{ color: "#1890ff" }}>The Free Folk</NavLink>
                    </div>
                <Divider />
                <div className="mdrawer">
                <img src={doth} alt="no stark"  className="houses_image_d" />
                <NavLink to="/doth" className="buttonclasscast" activeStyle={{ color: "#1890ff" }}>The Dotharki</NavLink>
                    </div>
                <Divider />
               

            </div>
        );



        return (
            <div className="drawer">
                <Button onClick={this.toggleDrawer('right', true)}><MenuIcon className="iconmenu" /></Button>

                <Drawer className="main_drawer"anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('right', false)}
                        onKeyDown={this.toggleDrawer('right', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>



            </div>
        );
    }
}

TemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(TemporaryDrawer);