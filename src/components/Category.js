

// import React,{useState} from 'react';
// import '../App.css';
// import {  Button } from '@material-ui/core';
// import { Link } from 'react-router-dom';
// import { useHistory } from "react-router-dom";

// // class Category extends Component {
// //     constructor(props){
// //         super(props);
// //         this.state = {
// //             wordchange : false,
// //         }
// //     }

// // }

// function Category() {
//     const [wordchange, setword] = useState(false);
//     const [wordname, setwordname] = useState("");

//     const history = useHistory();

//     const handleClick = () => {

//         // setword(!wordchange);
//         // history.push("/houses")
//         // console.log(wordchange,"set")

//         if(setword === true) {
//             setword(false)
//             history.push("/")
//         }
//         else {
//         setword(true)
//         setwordname("DashBoard")
//         history.push("/houses");
//         console.log(wordchange,"fdd")
//         }
//     }

//   return (
//     <div className="categorydivision">
//     {/* <Link to='/houses'class="buttonclass" value="The Great Houses in Westero's" > <b>Great Houses in Westero's</b></Link> */}
//   <button class="buttonclass" value="The Great Houses in Westero's" onClick={handleClick} > <b> 
//   {/* {wordchange === true ?
//              ` ${wordname}` :
//             ""
//           }
//        */}
//       Great Houses in Westero
//       </b></button>

//         {/* <Button component={Link} to ="/houses"class="buttonclass" value="The Great Houses in Westero's" > <b>Great Houses in Westero's</b></Button> */}
//         <button component={Link} to ="/houses" class="buttonclasscast" value="Cast and Crew"><b>Cast and Crew</b></button>
//         <button class="buttonclasscast" value="The Great Houses in Westero's"><b> Trivia</b></button>
//         <button class="buttonclasscast" value="The Great Houses in Westero's"><b>Blog</b></button>
//         <button class="buttonclasscast" value="The Great Houses in Westero's"><b>Technical Specs & Details</b></button>
//         <button class="buttonclasscast" value="The Great Houses in Westero's"><b>Hierarchy</b></button>
//     </div>
//   );
// }


import React, { Component } from 'react';
import '../App.css';
import { withRouter } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import { Button, ListItem, ListItemIcon, ListItemText, List, ClickAwayListener, Divider } from '@material-ui/core';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

class Category extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            name: "DashBoard"

        }
    }

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
    handlecrew = (e) => {

        this.props.history.push('/crewandcast');


        console.log(this.props.history)
    }
    handleModule = (e) => {
        e.preventDefault();
        this.setState({
            openbeyond: !this.state.openbeyond
        })
    }
    handleCloseModules = (e) => {
        e.preventDefault();
        this.setState({
            openbeyond: false
        })
    }
    render() {
        const { open, openbeyond, name } = this.state
        return (
            <div className="categorydivision">
                <NavLink to="/home" className="buttonclasscast" activeStyle={{ color: "#1890ff" }}>DashBoard</NavLink>

                <Divider className="divider_category" orientation="vertical" flexItem />

                {/* <Link to='/houses'class="buttonclass" value="The Great Houses in Westero's" > <b>Great Houses in Westero's</b></Link> */}

                <NavLink to="/Noble_houses" className="buttonclasscast" activeStyle={{ color: "#1890ff" }}>Great Houses Of Westro's</NavLink>

                {/* <button class="buttonclasscast" value="The Great Houses in Westero's" onClick={this.handlehouses} > <b> 
             {open ? name : "Great Houses Of Westro's"}
              </b></button> */}
                <Divider className="divider_category" orientation="vertical" flexItem />

                {/* <Button component={Link} to ="/houses"class="buttonclass" value="The Great Houses in Westero's" > <b>Great Houses in Westero's</b></Button> */}
                {/* <button component={Link} to ="/houses" onClick={this.handlecrew} class="buttonclasscast" value="Cast and Crew">
                    <b> 
                       Cast & Crew
                    </b>

                </button> */}
                <NavLink to="/crewandcast" className="buttonclasscast" activeStyle={{ color: "#1890ff" }}>  Cast & Crew</NavLink>

                <Divider className="divider_category" orientation="vertical" flexItem />


                {/* <button class="buttonclasscast" value="The Great Houses in Westero's"><b> Trivia</b></button> */}
                {/* <button class="buttonclasscast" value="The Great Houses in Westero's"><b>Blog</b></button> */}
                {/* <button class="buttonclasscast" value="The Great Houses in Westero's"><b>Technical Specs & Location</b></button> */}
                <NavLink to="/tandl" className="buttonclasscast" activeStyle={{ color: "#1890ff" }}>Technical Specs & Location</NavLink>
                {/* <button class="buttonclasscast" value="The Great Houses in Westero's"><b>Hierarchy</b></button> */}
                {/* <button class="buttonclasscast" value="The Great Houses in Westero's"><b>Technical Specs & Details</b></button> */}
                <Divider className="divider_category" orientation="vertical" flexItem />
                <div className="buttonclasscast">
                    <List className="list">
                        <ListItem className="list" button onClick={this.handleModule}>
                            <ListItemText className="list" primary="Beyond Houses" />
                            {openbeyond ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>

                    </List>

                    <Collapse in={openbeyond} timeout="auto" unmountOnExit>
                        <ClickAwayListener onClickAway={this.handleCloseModules}>
                            <List className="beyondlistdropdown" component="div" disablePadding>
                                <NavLink className="beyondlink" to="/whitewalkers" >
                                    <ListItem    >
                                        <ListItemText className="listtext"> White Walkers </ListItemText>
                                    </ListItem>
                                </NavLink>
                                <Divider />
                                <NavLink className="beyondlink" to="/unsullied" >
                                    <ListItem   >

                                        <ListItemText> Unsullied </ListItemText>
                                    </ListItem>
                                </NavLink>
                                <Divider />
                                <NavLink className="beyondlink" to="/freefolk"  >
                                    <ListItem   >

                                        <ListItemText> Free Folk </ListItemText>
                                    </ListItem>
                                </NavLink>
                                <Divider />
                                <NavLink className="beyondlink" to="/doth"  >
                                    <ListItem   >

                                        <ListItemText> Dotharki </ListItemText>
                                    </ListItem>
                                </NavLink>




                            </List>
                        </ClickAwayListener>
                    </Collapse>
                </div>
                <Divider className="divider_category" orientation="vertical" flexItem />

                <button class="buttonclasscast" value="The Great Houses in Westero's"><b>Comments</b></button>


            </div>
        )
    }
}

export default withRouter(Category)