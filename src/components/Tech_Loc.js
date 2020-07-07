
import React, { Component } from 'react';
import { Grid, Divider } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import { withRouter } from 'react-router-dom';
import Locdetails from './Locdetails';

const API_URL = process.env.REACT_APP_API_URL;

class Tech_Loc extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:[],
            loc:"",
            name:"",
            realname:""
        }
    }

    async componentDidMount() {

        console.log("here inside handle characters")
        // await fetch('http://localhost:3009/walkers?type=loc', {
            await fetch(`${API_URL}walkers?type=loc`, {

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
                  
                })
            })
    }
    render() {
        const{data} = this.state
        return (
            <>
                <Grid container spacing={3} className="grid_container_swornhouses">
                    <Grid className="directed" item xs={1}>
                        Directed By
                    </Grid>
                    <Grid item xs={11} >
                        <Fade right>
                        <Grid container spacing={3} className="grid_container_swornhouses">
                            <Grid className="directedby" item xs={2}>
                                David Nutter</Grid>
                            <Grid className="directedby" item xs={2}>
                                Alan Taylor                            </Grid>
                            <Grid className="directedby" item xs={2}>
                                Alex Graves
                            </Grid> <Grid className="directedby" item xs={2}>
                                Miguel Sapochnik
                            </Grid>
                            <Grid className="directedby" item xs={2}>
                                Mark Mylod                            </Grid>
                            <Grid className="directedby" item xs={2}>
                                Jeremy Podeswa
                            </Grid> <Grid className="directeditem" item xs={2}>
                                Daniel Minahan
                            </Grid> <Grid className="directeditem" item xs={2}>
                                Alik Sakharov
                            </Grid>
                            <Grid className="directeditem" item xs={2}>
                                Michelle MacLaren
                            </Grid>
                            <Grid className="directeditem" item xs={2}>
                                Brian Kirk
                            </Grid> <Grid className="directeditem" item xs={2}>
                                David Benioff
                            </Grid> <Grid className="directeditem" item xs={2}>
                                D.B. Weiss
                            </Grid> <Grid className="directeditem" item xs={2}>
                                Timothy Van Patten
                            </Grid> <Grid className="directeditem" item xs={2}>
                                Michelle MacLaren
                            </Grid> <Grid className="directeditem" item xs={2}>
                                Neil Marshall
                            </Grid>
                            <Grid className="directeditem" item xs={2}>
                                David Petrarca
                            </Grid> <Grid className="directeditem" item xs={2}>
                                Michael Slovis
                            </Grid> <Grid className="directeditem" item xs={2}>
                                Jack Bender
                            </Grid> <Grid className="directeditem" item xs={2}>
                                Daniel Sackheim
                            </Grid> <Grid className="directeditem" item xs={2}>
                                Matt Shakman
                            </Grid>

                        </Grid>
                        </Fade>
                    </Grid>
                </Grid>
                <Grid container spacing={3} className="grid_container_swornhouses">
                    <Grid className="directed" item xs={1}>
                        Written By
                    </Grid>
                    <Grid item xs={11} >
                    <Fade right>
                        <Grid container spacing={3} className="grid_container_swornhouses">
                            <Grid className="directedby" item xs={2}>
                                David Benioff</Grid>
                            <Grid className="directedby" item xs={2}>
                                George R.R. Martin,                            </Grid>
                            <Grid className="directedby" item xs={2}>
                                D.B. Weiss                            </Grid> <Grid className="directedby" item xs={2}>
                                Bryan Cogman                            </Grid>
                            <Grid className="directedby" item xs={2}>
                                Dave Hill                          </Grid>
                            <Grid className="directedby" item xs={2}>
                                Ethan J Antonucci,
                            </Grid> <Grid className="directeditem" item xs={2}>
                                Gursimran Sandhu
                            </Grid> <Grid className="directeditem" item xs={2}>
                                Vanessa Taylor
                            </Grid>
                            <Grid className="directeditem" item xs={2}>
                                Jane Espenson
                            </Grid>

                        </Grid>
                        </Fade>
                    </Grid>
                </Grid>
                <Grid container spacing={3} className="grid_container_swornhouses">
                    <Grid className="directed" item xs={1}>
                        Run time
                    </Grid>
                    <Grid className="directed" item xs={10}>
                        <Fade right>
                        <Grid container spacing={3} className="grid_container_swornhouses">
                            <Grid className="directedby" item xs={12}>
                                57 min</Grid>
                        </Grid>
                        </Fade>
                    </Grid>
                </Grid>
                <Grid container spacing={3} className="grid_container_swornhouses">
                    <Grid className="directed" item xs={1}>
                        Camera
                    </Grid>
                    <Grid className="directed" item xs={10}>
                    <Fade right>
                        <Grid container spacing={3} className="grid_container_swornhouses">
                            <Grid className="directedby" item xs={12}>
                                ARRI ALEXA Mini ,
                                Arri Alexa, Cooke S4 and Angenieux Optimo Lenses ,
                                Red Epic Dragon
                            </Grid>
                        </Grid>
                        </Fade>
                    </Grid>
                </Grid> <Grid container spacing={3} className="grid_container_swornhouses">
                    <Grid className="directed" item xs={1}>
                        Cinematographic Process                    </Grid>
                    <Grid className="directed" item xs={10}>
                    <Fade right>
                        <Grid container spacing={3} className="grid_container_swornhouses">
                            <Grid className="directedby" item xs={12}>
                                Codex (season2-) , Digital Intermediate (master format)
                                , Dolby Vision (season 1)
                                , HDCAM SR (season 1)
                                , HDR10 (season 1)
                                , ProRes (season 2-)
                                , Redcode RAW (some shots) (Season 5-)
</Grid>
                        </Grid>
                        </Fade>
                    </Grid>
                </Grid> <Grid container spacing={3} className="grid_container_swornhouses">
                    <Grid className="directed" item xs={1}>
                        Sound Mix
                    </Grid>
                    <Grid className="directed" item xs={10}>
                    <Fade right>
                        <Grid container spacing={3} className="grid_container_swornhouses">
                            <Grid className="directedby" item xs={12}>
                                Dolby Digital | Dolby Atmos (Blu-ray release)</Grid>
                        </Grid>
                        </Fade>
                    </Grid>
                </Grid> <Grid container spacing={3} className="grid_container_swornhouses">
                    <Grid className="directed" item xs={1}>
                        Location
                    </Grid>
                    <Grid className="directed" item xs={10}>
                    <Fade right>
                        <Grid container spacing={3} className="grid_container_swornhouses">
                            <Grid className="directedby" item xs={12}>
                                Croatia
                                Europe
                                Malta
                                Monaco
                                Morocco
                                Northern Ireland
                                Scotland
                                Spain
                            </Grid>
                        </Grid>
                        </Fade>
                    </Grid>
                </Grid> <Grid container spacing={3} className="grid_container_swornhouses">
                    <Grid className="directed" item xs={2}>
                        Country | Language | Genres
                    </Grid>
                    <Grid className="directed" item xs={10}>
                    <Fade right>
                        <Grid container spacing={3} className="grid_container_swornhouses">
                            <Grid className="directedby" item xs={12}>
                                USA, UK | English |  Action, Adventure, Drama, Fantasy, Romance</Grid>
                        </Grid>
                        </Fade>
                    </Grid>
                    
                </Grid>
                <Divider className="divider_category" />
                <h1 className="locheader">Locations</h1>
                <Grid container className="crew_container" spacing={3}>
                    {
                        data.map((house, i) => (
                            <Locdetails key={i} data={house} />
                        ))
                    }
                    </Grid>

            </>
        )
    }
}

export default withRouter(Tech_Loc)