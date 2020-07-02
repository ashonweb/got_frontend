
import React, { Component } from 'react';
import { Grid, } from '@material-ui/core';
import House from './House';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import '../App.css';
import SwornHouse from './SwornHouse';


class NobleHouse extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "houses",
            data: [],
            value: 0,
            swornhousedata: []


        }
    }

    async componentDidMount() {
        await fetch('http://localhost:3009/posts', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                // 'Content-Type': 'application/json',
            }
        })
            .then(data => data.json()
            )
            .then(data => {
                console.log(data, "sa")
                this.setState({
                    data: data
                })
            })

        await fetch('http://localhost:3009/swornhouse', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                // 'Content-Type': 'application/json',
            }
        })
            .then(data => data.json()
            )
            .then(data => {
                console.log(data, "swornhouse")
                this.setState({
                    swornhousedata: data
                })
            })
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };
    render() {
        const { data, swornhousedata } = this.state
        return (
            <>

                <Grid container className="container" spacing={3}>

                    {
                        data.map((house, i) => (
                            <House key={i} data={house} />
                        ))
                    }
                </Grid>

                <div>
                    <AppBar className="appbar" position="static" color="default">
                        <Tabs
                            value={this.state.swornhousedata._id}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="scrollable"
                            scrollButtons="auto"
                        >
                            {
                                swornhousedata.map((house, i) => (
                                    <SwornHouse key={i} swornhousedata={house} />
                                ))
                            }
                        </Tabs>
                    </AppBar>
                </div>


            </>




        )
    }
}

export default (NobleHouse);


