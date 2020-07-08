
import React, { Component } from 'react';
import { Grid, } from '@material-ui/core';
import Fade from 'react-reveal/Fade';

import Tab from '@material-ui/core/Tab';

import Dialog from '@material-ui/core/Dialog';

import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Characters from './Characters';

const API_URL = process.env.REACT_APP_API_URL;

function Transition(props) {
    return <Slide className="slide"direction="left" {...props} />;
}

class SwornHouse extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // open:false,
            // name :"DashBoard"
            classname: "",
            value: this.props.swornhousedata._id,
            openDialog: false,
            characters: [],

        }
    }
    handleChange = (event, value) => {
        this.setState({ value });
    };
    handleTab = (e) => {
        console.log(this.state.value)
        // fetch('http://localhost:3009/swornhouse/' + this.props.swornhousedata._id, {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //         // 'Content-Type': 'application/json',
        //     }
        // })
        //     .then(data => data.json()
        //     )
        //     .then(data => {
        //         console.log(data, "sa")

        //     })

        console.log(this.props.swornhousedata.house, "this.props.swornhousedata.house")

        // fetch('http://localhost:3009/characters?house=' + this.props.swornhousedata.house, {
            fetch(`${API_URL}characters?house=` + this.props.swornhousedata.house, {

            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                // 'Content-Type': 'application/json',
            }
        })
            .then(data => data.json()
            )
            .then(data => {
                console.log(data, "sasff")
                this.setState({
                    characters: data,
                })

            })

        this.setState({
            openDialog: true,
        })
    }
    handleClose = (e) => {
        this.setState({
            openDialog: false,
        })
    }

    render() {
        const {openDialog } = this.state
        return (
            <>
                <Tab onClick={this.handleTab} className="iconstab" icon={
                    <Fade className="react-reveal" top >
                        <img src={`${API_URL}` + this.props.swornhousedata.logo} alt="no stark" className="swornhouses" />
                        {/* <img src={"http://localhost:3009/" + this.props.swornhousedata.logo} alt="no stark" className="swornhouses" /> */}
                    </Fade>
                } />
                {openDialog && (<>

                    <Dialog
                        fullScreen
                        open={this.state.openDialog}
                        onClose={this.handleClose}
                        aria-labelledby="responsive-dialog-title"
                        TransitionComponent={Transition}
                    >
                        {/* <IconButton className="closedialog" color="inherit" onClick={this.handleClose} aria-label="Close">
                            <CloseIcon />
                        </IconButton> */}
                        <Grid  container spacing={3} className="grid_container_swornhouses_doth">
                            {/* <Fade left> */}
                            <IconButton className="closedialog" color="inherit" onClick={this.handleClose} aria-label="Close">
                                <CloseIcon />
                            </IconButton>

                            <Grid item xs={2} className='bn'>
                                <Fade className="react-reveal" top >
                                <img src={`${API_URL}` + this.props.swornhousedata.logo} alt="no stark" className="swornhouses_des" />

                                    {/* <img src={"http://localhost:3009/" + this.props.swornhousedata.logo} alt="no stark" className="swornhouses_des" /> */}
                                </Fade>
                                <Fade right>
                                    <p className="house_name">House</p>
                                    <p className="shouse_exact_name">{this.props.swornhousedata.house}</p>
                                    <p className="shouses_des">{this.props.swornhousedata.description}</p>
                                </Fade>
                            </Grid>
                            <Grid item xs={5}  className='houses'>
                                <TextField
                                    style={{display:"block"}}
                                    id="outlined-read-only-input"
                                    label="Sigil"
                                    defaultValue={this.props.swornhousedata.sigil}

                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,

                                    }}
                                    variant="outlined"
                                />
                                <TextField
                                                                            style={{display:"block"}}

                                    id="outlined-read-only-input"
                                    label="Lord"
                                    defaultValue={this.props.swornhousedata.lord}

                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,

                                    }}
                                    variant="outlined"
                                />
                                <TextField
                                    style={{display:"block"}}

                                    id="outlined-read-only-input"
                                    label="Seat"
                                    defaultValue={this.props.swornhousedata.seat}

                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,

                                    }}
                                    variant="outlined"
                                />
                                <TextField
                                    style={{display:"block"}}

                                    id="outlined-read-only-input"
                                    label="Region"
                                    defaultValue={this.props.swornhousedata.region}

                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,

                                    }}
                                    variant="outlined"
                                />

                                <TextField
                                                                    style={{display:"block"}}

                                    id="outlined-read-only-input"
                                    label="Title"
                                    defaultValue={this.props.swornhousedata.titles}

                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,

                                    }}
                                    variant="outlined"
                                />
                                <TextField className="inputmargin"

                                    id="outlined-read-only-input"
                                    label="Words"
                                    defaultValue={this.props.swornhousedata.words}

                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,

                                    }}
                                    variant="outlined"
                                />
                                <TextField className="inputmargin"

                                    id="outlined-read-only-input"
                                    label="Alligence"
                                    defaultValue={this.props.swornhousedata.swornto}

                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,

                                    }}
                                    variant="outlined"
                                />

                                <TextField className="inputmargin"

                                    id="outlined-read-only-input"
                                    label="Weapon"
                                    defaultValue={this.props.swornhousedata.weapon}

                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,

                                    }}
                                    variant="outlined"
                                />

                                <TextField className="inputmargin"

                                    id="outlined-read-only-input"
                                    label="Regilion"
                                    defaultValue={this.props.swornhousedata.religion}

                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,

                                    }}
                                    variant="outlined"
                                />


                            </Grid>

                            <Grid item xs={4}>
                                <>
                                <h2 className="famouscharacter">Famous Characters</h2>

                                    <Grid container className="container1" spacing={3}>

                                        {
                                            this.state.characters.map((house, i) => (
                                                <Characters key={i} data={house} />
                                            ))
                                        }
                                    </Grid>

                                </>

                            </Grid>

                        </Grid>

                    </Dialog>

                </>)}
            </>
        )
    }
}

export default (SwornHouse)



