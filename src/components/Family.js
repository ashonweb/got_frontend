import React, { Component } from 'react';
import { Grid, TextField, } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import { withRouter } from 'react-router-dom';
import FamilyMembers from './FamilyMembers';
import CrewMembers from './CrewMembers';


class Family extends Component {
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
        let location = window.location.pathname.split('/');
        let lastpath = location[location.length - 1]
        console.log(lastpath, "last")
        await fetch('http://localhost:3009/characters/?house=' + lastpath, {
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
                            <CrewMembers key={i} data={house} />
                        ))
                    }
                    </Grid>
                {/* </Fade> */}

            </>
        )
    }
}

export default withRouter(Family)