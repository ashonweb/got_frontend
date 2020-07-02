
import React, { Component } from 'react';
import { Grid, Divider, } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';


class Doth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            status: "",
            alias: "",
            des: "",
            origin: "",
            disfea: "",
            history: "",
            lan: "",
            location: "",
            origin: "",
            power: "",
            ruler: "",
            type: "",
            weak: "",
            whitewalker: "",

        }
    }

    async componentDidMount() {

        console.log("here inside handle characters")
        await fetch('http://localhost:3009/walkers?type=doth', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(data => data.json())
            .then(data => {
                console.log(data, "data_character")

                this.setState({
                    data: data
                }, () => {
                    this.setState({
                        status: this.state.data[0].status,
                        des: this.state.data[0].des,
                        origin: this.state.data[0].origin,
                        
                        history: this.state.data[0].history,
                        lan: this.state.data[0].lan,
                        location: this.state.data[0].location,
                        origin: this.state.data[0].origin,
                        
                        ruler: this.state.data[0].ruler,
                        type: this.state.data[0].type,
                        whitewalker: this.state.data[0].whitewalker
                    })
                })
            })
    }

    render() {
        const {
            status,
            alias,
            des,
            origin,
            disfea,
            history,
            lan,
            location,
            power,
            ruler,
            type,
            weak,
            whitewalker,
        } = this.state
        return (
            <>
                <Grid container spacing={3} className="grid_container_swornhouses">
                    <Grid item xs={9} >
                    <Fade right>
                    <h1 className="header">The Dotharaki</h1>

                                       <p className="walkerhistory">Overview</p>
                                        <p className="char_des_walker">{des}</p>
                                        <p className="char_des_walker">{history}</p>
                                       
                                    </Fade>
                    </Grid>
                    <Grid item xs={3} >
                        <Fade className="react-reveal" left >
                            <img src={"http://localhost:3009/" + whitewalker} alt="no walker" className="beyondimages" />
                        </Fade>

                        <TextField className="inputmargin_walk"
                            id="outlined-read-only-input"
                            label="Status"
                            value={status}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                        <TextField className="inputmargin_walk"
                            id="outlined-read-only-input"
                            label="Founders"
                            value={origin}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        /> <TextField className="inputmargin_walk"
                            id="outlined-read-only-input"
                            label="Location"
                            value={location}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        /> <TextField className="inputmargin_walk"
                            id="outlined-read-only-input"
                            label="Leader"
                            value={ruler}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        /> <TextField className="inputmargin_walk"
                            id="outlined-read-only-input"
                            label="Language"
                            value={lan}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        /> 
                        
                    </Grid>
                </Grid>

            </>
        )
    }
}

export default withRouter(Doth)