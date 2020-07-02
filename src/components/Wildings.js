
import React, { Component } from 'react';
import { Grid, Divider, } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';


class Wildings extends Component {
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
        await fetch('http://localhost:3009/walkers?type=whitewalkers', {
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
                        alias: this.state.data[0].alias,
                        des: this.state.data[0].des,
                        origin: this.state.data[0].origin,
                        disfea: this.state.data[0].disfea,
                        history: this.state.data[0].history,
                        lan: this.state.data[0].lan,
                        location: this.state.data[0].location,
                        origin: this.state.data[0].origin,
                        power: this.state.data[0].power,
                        ruler: this.state.data[0].ruler,
                        type: this.state.data[0].type,
                        weak: this.state.data[0].weak,
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
                        <h1 className="header">The White Walkers</h1>
                                       <p className="walkerhistory">History</p>
                                        <p className="char_des_walker">{history}</p>
                                       <p className="walkerhistory">Overview</p>
                                        <p className="char_des_walker">{des}</p>
                                        <p className="walkerhistory">Power</p>
                                        <p className="char_des_walker">{power}</p>
                                        <p className="walkerhistory">Weakness</p>
                                        <p className="char_des_walker">{weak}</p>
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
                            label="origin"
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
                            label="Ruler"
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
                        /> <TextField className="inputmargin_walk"
                            id="outlined-read-only-input"
                            label="Distinctive features"
                            value={disfea}
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

export default withRouter(Wildings)