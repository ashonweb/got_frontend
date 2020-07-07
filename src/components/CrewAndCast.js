import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Fade from 'react-reveal/Fade';

import { withRouter } from 'react-router-dom';

import CrewMembers from './CrewMembers';
const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL,"opo");



class CrewAndCast extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            name: "",
            realname: "",
            characters: "",
        };
    }

    async componentDidMount() {
        // let location = window.location.pathname.split('/');
        // let lastpath = location[location.length - 1]
        // console.log(lastpath, "last")
        // await fetch('http://localhost:3009/characters/', {
            await fetch(`${API_URL}characters/`, {

            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                // 'Content-Type': 'application/json',
            }
        })
            .then(data => data.json()
            )
            .then(data => {
                console.log(data, "mainhousesa");
                this.setState({
                    data: data,
                })

            });

       
    }


    render() {
        const { data} = this.state;

        return (
            <>

            
                
                    <Grid container className="crew_container" spacing={3}>
                    {
                        data.map((house, i) => (
                            <CrewMembers key={i} data={house} />
                        ))
                    }
                    </Grid>
               

            </>
        )
    }
}

export default withRouter(CrewAndCast)