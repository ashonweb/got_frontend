import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import { withRouter } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
import lannister from '../assests/houses.jpg';
import crew from '../assests/crew.jpeg';
import trivia from '../assests/tri.jpg'
import blog from '../assests/blog.png'
import details from '../assests/de.jpeg'
import heir from '../assests/hierr.jpeg'



class TemporaryDrawer extends React.Component {
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
        open: false,
        name : "DashBoard"
    };

    handlehouses = (e) => {
        e.preventDefault();
        this.setState({
            open: !this.state.open
        }, () => {
            if (this.state.open === true) {
                this.props.history.push('/houses');

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

    render() {
        const { open, name } = this.state


        const sideList = (
            <div className="categorydivision_d">

                <div className="mdrawer">
                <img src={lannister} alt="no stark"  className="houses_image_d" />
                    {/* <Link to='/houses'class="buttonclass" value="The Great Houses in Westero's" > <b>Great Houses in Westero's</b></Link> */}
                    <button class="buttonclasscast" value="The Great Houses in Westero's" onClick={this.handlehouses} > <b>
                        {open ? name : "Great Houses Of Westro's"}
                    </b></button>
                </div>
                <Divider />
                {/* <Button component={Link} to ="/houses"class="buttonclass" value="The Great Houses in Westero's" > <b>Great Houses in Westero's</b></Button> */}

                <div className="mdrawer">
                <img src={crew} alt="no stark"  className="houses_image_d" />
                    <button to="/houses" class="buttonclasscast" value="Cast and Crew"><b> Cast and Crew</b></button>
                </div>
                <Divider />
                <div className="mdrawer">
                <img src={trivia} alt="no stark"  className="houses_image_d" />
                    <button class="buttonclasscast" value="The Great Houses in Westero's"><b> Trivia</b></button>
                </div>
                <Divider />
                <div className="mdrawer">
                <img src={blog} alt="no stark"  className="houses_image_d" />
                    <button class="buttonclasscast" value="The Great Houses in Westero's"><b>Blog</b></button>
                </div>
                <Divider />
                <div className="mdrawer">
                <img src={details} alt="no stark"  className="houses_image_d" />
                    <button class="buttonclasscast" value="The Great Houses in Westero's"><b>Technical Specs & Details</b></button></div>
                <Divider />
                <div className="mdrawer">
                <img src={heir} alt="no stark"  className="houses_image_d" />
                    <button class="buttonclasscast" value="The Great Houses in Westero's"><b>Hierarchy</b></button></div>
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