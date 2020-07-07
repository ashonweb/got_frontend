
import React, { Component } from 'react';
import { Grid, } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import { withRouter } from 'react-router-dom';
const API_URL = process.env.REACT_APP_API_URL;


class FamilyMembers extends Component {


    handleFindout = () => {
        this.props.history.push('/Noble_houses/House/' + this.props.data.house)
    }
    render() {
        return (
            <>
                <Grid item xs={3} >
                    <Fade className="react-reveal" top >
                    
                    <img src={`${API_URL}` + this.props.data.characters} alt="no" className="charcterclassindialog" />

                        {/* <img src={"http://localhost:3009/" + this.props.data.characters} alt="no" className="charcterclassindialog" /> */}
                    </Fade>
                    <p className="charactername_nobelfamily">{this.props.data.name}</p>
                    <p className="realname_nobelfamily">{this.props.data.realname}</p>
                </Grid>


            </>
        )
    }
}

export default withRouter(FamilyMembers)