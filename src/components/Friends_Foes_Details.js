
import React, { Component } from 'react';
import { Grid, } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import { withRouter } from 'react-router-dom';


class Friends_Foes_Details extends Component {


    handleFindout = () => {
        this.props.history.push('/Noble_houses/House/' + this.props.data.house)
    }
    render() {
        return (
            <>
                <Grid item xs={12} >
                    <Fade className="react-reveal" top >
                        <img src={"http://localhost:3009/" + this.props.data.houses_logo_of_type} alt="no stark" className="swornhouses_des" />
                    </Fade>
                    <Fade right>
                        {/* <p className="house_name">House</p> */}
                        <p className="friendtype">{this.props.data.type}</p>
                        <p className="frienddes">{this.props.data.des}</p>
                    </Fade>
                </Grid>


            </>
        )
    }
}

export default withRouter(Friends_Foes_Details)