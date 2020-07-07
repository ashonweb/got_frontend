
import React, { Component } from 'react';
import { Grid, } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL)

const styles = theme => ({
    [theme.breakpoints.down('sm')]: {
item:"0px !important"
      },
    
  });
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
        const { classes, theme } = this.props;

        return (
            <>
                <Grid classes ={{item : classes.item}} item xs={12}>
                    <Fade className="react-reveal" top >
                    <img src={API_URL + this.props.data.characters} alt="sorry  taking a bit time" className="charcterclassindialog" />

                        {/* <img src={"http://localhost:3009/" + this.props.data.characters} alt="sorry  taking a bit time" className="charcterclassindialog" /> */}
                    </Fade>
        <p className="charactername">{this.props.data.name}</p>
        <p className="realname">{this.props.data.realname}</p>
                </Grid>

            </>
        )
    }
}

// export default (Characters)
Characters.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles, { withTheme: true })(Characters);
  