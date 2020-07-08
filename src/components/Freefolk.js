
import React, { Component } from 'react';
import { Grid, Divider, } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

const API_URL = process.env.REACT_APP_API_URL;

class Freefolk extends Component {
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
        // await fetch('http://localhost:3009/walkers?type=wild', {
            await fetch(`${API_URL}walkers?type=wild`, {

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
                        alias: this.state.data[0].Alias,
                        des: this.state.data[0].des,
                        origin: this.state.data[0].origin,
                        disfea: this.state.data[0].disfea,
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
                <Grid container spacing={3} className="grid_container_swornhouses_beyoond">
                    <Grid item xs={9} className="grid_container_swornhouses_beyond_item">
                    <Fade right>
                    <h1 className="header">The Free Folk</h1>

                        <p className="walkerhistory">History</p>
                        <p className="char_des_walker">{history}</p>
                        <p className="walkerhistory">Overview</p>
                        <p className="char_des_walker">{des}</p>
                        <p className="walkerhistory">Clans</p>
                        <p className="char_des_walker">
                            At the time of the War of the Five Kings the Free Folk are divided
                            into about 90 different clans or tribes, some of which have long been
                            bitter enemies with each other.Normally they are politically divided, but were united under King-Beyond-the-Wall Mance Rayder for the common goal of forcing their way south of the Wall
                             before the next winter comes, which will bring the White Walkers with it <br/>
                             Some of these groups are socially and culturally very different. While many do understand the Common Tongue of the Andals south of the Wall, according to Mance the clans in his army speak seven different languages (including the Common Tongue; 
                             otherwise they speak the Old Tongue of the First Men, and its several variants)
                        </p>
                        <p className="char_des_walker">
                        Some of these clans or groups include:
                        <ul>
                            <li>Numerous clans from the vast Haunted Forest, immediately north of the Wall but east of the Frostfang Mountains. 
                                These tend to be semi-nomadic hunters and 
                                homesteaders, though some of them form villages of their own.
                                <ul>
                                    <li>
                                    White Tree - a community of wildlings
                                    </li>
                                    <li>
                                    Craster's Keep - a small homestead maintained by Craster and his many daughter-wives.
                                    </li>
                                </ul>
                            </li>
                            <li>
                            The Thenn, who dwell in a valley north of the Frostfangs, who know how to forge bronze and engage in ritual
                             cannibalism and self-scarification.
                            </li>
                            <li>
                            The communities of the Frozen Shore, known for riding sleds and chariots made of walrus bone pulled by dogs.
                            </li>
                            <li>
                            Hornfoots, who dwell on the Frostfangs, known for the blackened and hardened soles of their feet due to not wearing anything on them
                            </li>
                            <li>
                            Ice-river clans
                            </li>
                            <li>
                            Cave people
                            </li>
                        </ul>
                        </p>
                                       
                    </Fade>
                    </Grid>
                    <Grid item xs={3} className="grid_container_swornhouses_beyond_item" >
                        <Fade className="react-reveal" left >
                        
                        <img src={`${API_URL}` + whitewalker} alt="no walker" className="beyondimages" />

                            {/* <img src={"http://localhost:3009/" + whitewalker} alt="no walker" className="beyondimages" /> */}
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
                        /> 
                        <TextField className="inputmargin_walk"
                            id="outlined-read-only-input"
                            label="Alias"
                            value={alias}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                        <TextField className="inputmargin_walk"
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

export default withRouter(Freefolk)