
import React, { Component } from 'react';
import { Grid, } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import { withRouter } from 'react-router-dom';
const API_URL = process.env.REACT_APP_API_URL;


class Locdetails extends Component {
    
    render() {
       
        return (
            <>
                <Grid item xs={3} >
                    <Fade className="react-reveal" top >
                    <img src={`${API_URL}` + this.props.data.whitewalker} alt="sorry taking bit time" className="locationd" />

                        {/* <img src={"http://localhost:3009/" + this.props.data.whitewalker} alt="sorry taking bit time" className="locationd" /> */}
                    </Fade>
                    <p className="locname">{this.props.data.location}</p>
                    <p className="realname_nobelfamily">{this.props.data.reall}</p>
                </Grid>
                
                 

            </>
        )
    }
}

export default withRouter(Locdetails)

