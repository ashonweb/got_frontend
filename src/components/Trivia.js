import React, { Component } from 'react';
import { Grid, TextField, } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import { withRouter } from 'react-router-dom';
import FamilyMembers from './FamilyMembers';
import CrewMembers from './CrewMembers';
import Triviadetils from './Triviadetils';
const API_URL = process.env.REACT_APP_API_URL;


class Trivia extends Component {
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
        let location = window.location.pathname.split('/');
        console.log(location)
       var href = window.location.href;
        console.log(href,"href")
    console.log(href.match(/([^\/]*)\/*$/)[1],"rtyupoxcvbnl");
   let lastpath = (href.match(/([^\/]*)\/*$/)[1]);
        // await fetch('http://localhost:3009/trivia/?house=' + lastpath, {
            await fetch(`${API_URL}trivia/?house=` + lastpath, {

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
                
                },()=>{
                    if(data.length === 0)
                    {
                        this.setState({
                            data:[{
                                title:"No data present",
                                house:lastpath
                            }]
                        })
                    }
                })

            });

       
    }


    render() {
        const { data } = this.state;
        // const { activeStep } = this.state;
        // const houseBackground = `http://localhost:3009/${place}`;
        // console.log(houseBackground)

        return (
            <>
          
                <Fade className="react-reveal" right >
                    <Grid container className="container" spacing={3}>
                    {
                        data.map((house, i) => (
                            <Triviadetils key={i} data={house} />
                        ))
                    }
                    </Grid>
                </Fade>
                   
            </>
        )
    }
}

export default withRouter(Trivia)