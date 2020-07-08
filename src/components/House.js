import React, { Component } from 'react';
import { Grid, } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { withRouter } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL;

class House extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // open:false,
            // name :"DashBoard"
            classname: "",

        }
    }

    handleFindout = () => {
        this.props.history.push('/Noble_houses/House/' + this.props.data.house)
    }
    render() {
        // console.log(this.props.data.logo,"logo")
        return (
            <>
                <Grid item xs={6} className={this.props.data.house}>
                    <Fade className="react-reveal" top >
                    <img src={`${API_URL}` + this.props.data.logo} alt="no stark" className="houses_image" />

                        {/* <img src={"http://localhost:3009/" + this.props.data.logo} alt="no stark" className="houses_image" /> */}
                    </Fade>
                    <Fade className="fade" right >
                        <h3>{this.props.data.house}</h3>
                    </Fade>
                    <div className="contenthouse">
                        <Fade className="fade" right >

                            <p className="house_name">House</p>
                            <p className="house_exact_name">{this.props.data.house}</p>
                            <p className="houses_des">{this.props.data.description}</p>
                        </Fade>
                        <div className="readmore" button onClick={this.handleFindout}> Read More <ArrowForwardIcon className="arrow" /></div>



                    </div>
                </Grid>


            </>
        )
    }
}

export default withRouter(House)