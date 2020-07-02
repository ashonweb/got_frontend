
import React, { Component } from 'react';
import { Grid, } from '@material-ui/core';
import Fade from 'react-reveal/Fade';

class Characters extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // open:false,
            // name :"DashBoard"
            classname: "",

        }
    }

    render() {
        return (
            <>
                <Grid item xs={12}>
                    <Fade className="react-reveal" top >
                        <img src={"http://localhost:3009/" + this.props.data.characters} alt="sorry  taking a bit time" className="charcterclassindialog" />
                    </Fade>
        <p className="charactername">{this.props.data.name}</p>
        <p className="realname">{this.props.data.realname}</p>
                </Grid>

            </>
        )
    }
}

export default (Characters)