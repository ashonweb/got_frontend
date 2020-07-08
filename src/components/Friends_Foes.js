import React, { Component } from 'react';
import { Grid, TextField, } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import { withRouter } from 'react-router-dom';
import FamilyMembers from './FamilyMembers';
import CrewMembers from './CrewMembers';
import Friends_Foes_Details from './Friends_Foes_Details';
const API_URL = process.env.REACT_APP_API_URL;


class Friends_Foes extends Component {
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
        // await fetch('http://localhost:3009/friendsfoes/?house=' + lastpath, {
            await fetch(`${API_URL}friendsfoes/?house=` + lastpath, {

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
        const { data } = this.state;
        // const { activeStep } = this.state;
        // const houseBackground = `http://localhost:3009/${place}`;
        // console.log(houseBackground)

        return (
            <>
                {/* <Fade className="react-reveal" right > */}
                    <Grid container className="Family_container" spacing={3}>
                    {
                        data.map((house, i) => (
                            <Friends_Foes_Details key={i} data={house} />
                        ))
                    }
                    </Grid>
                {/* </Fade> */}

            </>
        )
    }
}

export default withRouter(Friends_Foes)