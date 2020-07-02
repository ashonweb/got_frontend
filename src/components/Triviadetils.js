
import React, { Component } from 'react';
import { Grid, } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import { withRouter } from 'react-router-dom';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import ErrorIcon from '@material-ui/icons/Error';


class Triviadetils extends Component {

    render() {
        console.log(this.props.data, "data")
        return (
            <>
                {this.props.data.title === 'No data present' ? <>

                    <Grid item xs={12} className="triviadetails_nodata" >

                        <div>
                            <Fade className="fade" left >
                                <div className="nodata">
                                <p > <ErrorOutlineIcon className="icon" /> No Trivia Details present for {this.props.data.house} house  </p>
                                <p >  If you know any Trivia details for this house, Please add in <a href="#">comments</a></p>
                                </div>
                            </Fade>

                        </div>
                        {/* <p className="charactername_nobelfamily">{this.props.data.title}</p>
                    <p className="realname_nobelfamily">{this.props.data.des}</p> */}
                    </Grid>
                </> :
                    <Grid item xs={6} className="triviadetails" >
                        {/* <Fade className="fade" right >
                        <h3 className="trivia_house">{this.props.data.house}</h3>
                    </Fade> */}
                        <div>
                            <Fade className="fade" right >

                                {/* <p className="house_name">House</p> */}
                                <p className="triviat">{this.props.data.title}</p>
                                <p className="triviad">{this.props.data.des}</p>
                            </Fade>

                        </div>
                        {/* <p className="charactername_nobelfamily">{this.props.data.title}</p>
                    <p className="realname_nobelfamily">{this.props.data.des}</p> */}
                    </Grid>
                }

            </>
        )
    }
}

export default withRouter(Triviadetils)