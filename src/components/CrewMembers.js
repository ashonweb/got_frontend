
import React, { Component } from 'react';
import { Grid, } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import { withRouter } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL)


const styles = theme => ({
    [theme.breakpoints.down('sm')]: {
    item:{
        padding:"0px !important",
        margin:"0px 0px 12px !important"
    },
    dialogitem:{
        maxWidth:"none !important"
    }
      },
    
  });
class CrewMembers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            castdetails: [],
            opendialog: false,
            firstseen: "",
            lastseen: "",
            father: "",
            mother: "",
            spouse: "",
            sib: "",
            childern: "",
            region: "",
            religion: "",
            culture: "",
            status: "",
            death: "",
            alias: "",
            title: "",
            des: "",
            origin: "",
        }
    }

    handlecharacters = (e) => {
        e.preventDefault()
        this.setState({
            opendialog: true,
        })
        console.log("here inside handle characters")
        console.log(this.props.data.name,"this.props.data.name")
        // fetch('http://localhost:3009/characters?name=' + this.props.data.name , {
            fetch(`${API_URL}characters?name=` + this.props.data.name , {

            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(data => data.json())
            .then(data => {
                // console.log(data, "data_character")
                this.setState({
                    castdetails: data,
                }, () => {
                     console.log(this.state.castdetails, "castdetails")
                    // console.log(this.state.castdetails[0].firstseen, "name")

                   
                    //   const{firstseen,lastseen,father,mother,spouse,siblings,children, religin,culture,status,death,alias,titles,description,origin} = this.state.castdetails
                    
                    // this.setState({
                    //     firstseen: firstseen,
                    //     lastseen: lastseen,
                    //     father: father,
                    //     mother: mother,
                    //     spouse: spouse,
                    //     sib: siblings,
                    //     childern: children,
                    //     religion: religin,
                    //     culture:culture,
                    //     status: status,
                    //     death: death,
                    //     alias: alias,
                    //     title: titles,
                    //     des: description,
                    //     origin: origin,
                    // })

                    this.setState({
                        firstseen: this.state.castdetails[0].firstseen,
                        lastseen: this.state.castdetails[0].lastseen,
                        father: this.state.castdetails[0].father,
                        mother: this.state.castdetails[0].mother,
                        spouse: this.state.castdetails[0].spouse,
                        sib: this.state.castdetails[0].siblings,
                        childern: this.state.castdetails[0].children,
                        religion: this.state.castdetails[0].religin,
                        culture: this.state.castdetails[0].culture,
                        status: this.state.castdetails[0].status,
                        death: this.state.castdetails[0].death,
                        alias: this.state.castdetails[0].alias,
                        title: this.state.castdetails[0].titles,
                        des: this.state.castdetails[0].description,
                        origin: this.state.castdetails[0].origin,
                    })
                })

            })
    }
    handleClose = () => {
        this.setState({
            opendialog: false,
        })
    }
    render() {
        const { classes, theme } = this.props;

        const { firstseen, lastseen, father, mother, spouse, childern, sib, status, death, religion, culture, origin,alias,
            title, des, } = this.state
        // console.log(firstseen, lastseen, father, mother, spouse, childern, sib, status, death, religion, culture, origin,
        //     title, des, "fsfhsjfhsjfhsjhfjshfjsdjfhjsfjsdfh")
        return (
            <>
                <Grid classes ={{item : classes.item,spacing:classes.spacing}}  item xs={3} >
                    <Fade className="react-reveal" top >
                    <img src={`${API_URL}` + this.props.data.characters} alt="sorry taking bit time" onClick={this.handlecharacters} className="charcterclassindialog" />

                        {/* <img src={"http://localhost:3009/" + this.props.data.characters} alt="sorry taking bit time" onClick={this.handlecharacters} className="charcterclassindialog" /> */}
                    </Fade>
                    <p className="charactername_nobelfamily" onClick={this.handlecharacters}>{this.props.data.name}</p>
                    <p className="realname_nobelfamily">{this.props.data.realname}</p>
                </Grid>
                {this.state.opendialog && (
                    <>
                        <Dialog
                            fullScreen
                            open={this.state.opendialog}
                            onClose={this.handleClose}
                            aria-labelledby="responsive-dialog-title"
                        >
                            <IconButton className="closedialog_char" color="inherit" onClick={this.handleClose} aria-label="Close">
                            <CloseIcon />
                        </IconButton>
                            <Grid container spacing={3} className="grid_container_swornhouses_doth">
                                {/* <Fade left> */}

                                <Grid item xs={6} classes={{item:classes.dialogitem}} >
                                    <Fade className="react-reveal" top >
                                    <img src={`${API_URL}` + this.props.data.characters} alt="no stark" className="swornhouses_des" />

                                        {/* <img src={"http://localhost:3009/" + this.props.data.characters} alt="no stark" className="swornhouses_des" /> */}
                                    </Fade>
                                    <Fade right>
                                        {/* <p className="house_name">House</p> */}
                                        <p className="shouse_exact_name">{this.props.data.name}</p>
                                        <p className="shouses_des">{this.props.data.realname}</p>
                                        <p className="char_des">{des}</p>
                                    </Fade>
                                </Grid>
                                <Grid item xs={6} className='houses'>
                                
                                    <TextField className="inputmargin"

                                        id="outlined-read-only-input"
                                        label="First Seen episode"
                                        value={firstseen}

                                        margin="normal"
                                        InputProps={{
                                            readOnly: true,

                                        }}
                                        variant="outlined"
                                    />
                                    <TextField className="inputmargin"

                                        id="outlined-read-only-input"
                                        label="last seen episode"
                                        value={lastseen}

                                        margin="normal"
                                        InputProps={{
                                            readOnly: true,

                                        }}
                                        variant="outlined"
                                    />
                                    <TextField className="inputmargin"

                                        id="outlined-read-only-input"
                                        label="Father"
                                        value={father}

                                        margin="normal"
                                        InputProps={{
                                            readOnly: true,

                                        }}
                                        variant="outlined"
                                    />  <TextField className="inputmargin"

                                        id="outlined-read-only-input"
                                        label="Mother"
                                        value={mother}

                                        margin="normal"
                                        InputProps={{
                                            readOnly: true,

                                        }}
                                        variant="outlined"
                                    />
                                    <TextField className="inputmargin"

                                        id="outlined-read-only-input"
                                        label="Spouse"
                                        value={spouse}

                                        margin="normal"
                                        InputProps={{
                                            readOnly: true,

                                        }}
                                        variant="outlined"
                                    />

                                    <TextField className="inputmargin"

                                        id="outlined-read-only-input"
                                        label="children"
                                        value={childern}

                                        margin="normal"
                                        InputProps={{
                                            readOnly: true,

                                        }}
                                        variant="outlined"
                                    />
                                    <TextField className="inputmargin"

                                        id="outlined-read-only-input"
                                        label="Siblings"
                                        value={sib}

                                        margin="normal"
                                        InputProps={{
                                            readOnly: true,

                                        }}
                                        variant="outlined"
                                    />
                                    <TextField className="inputmargin"

                                        id="outlined-read-only-input"
                                        label="Origin/Birth Place"
                                        value={origin}

                                        margin="normal"
                                        InputProps={{
                                            readOnly: true,

                                        }}
                                        variant="outlined"
                                    />
                                    <TextField className="inputmargin"

                                        id="outlined-read-only-input"
                                        label="Titles"
                                        value={title}

                                        margin="normal"
                                        InputProps={{
                                            readOnly: true,

                                        }}
                                        variant="outlined"
                                    />
                                    <TextField className="inputmargin"

                                        id="outlined-read-only-input"
                                        label="Alias"
                                        value={alias}

                                        margin="normal"
                                        InputProps={{
                                            readOnly: true,

                                        }}
                                        variant="outlined"
                                    />
                                    <TextField className="inputmargin"

                                        id="outtuslined-read-only-input"
                                        label="Status"
                                        value={status}

                                        margin="normal"
                                        InputProps={{
                                            readOnly: true,

                                        }}
                                        variant="outlined"
                                    />



                                    <TextField className="inputmargin"

                                        id="outlined-read-only-input"
                                        label="Death"
                                        value={death}

                                        margin="normal"
                                        InputProps={{
                                            readOnly: true,

                                        }}
                                        variant="outlined"
                                    />
                                    <TextField className="inputmargin"

                                        id="outlined-read-only-input"
                                        label="Culture"
                                        value={culture}

                                        margin="normal"
                                        InputProps={{
                                            readOnly: true,

                                        }}
                                        variant="outlined"
                                    />
                                    <TextField className="inputmargin"

                                        id="outlined-read-only-input"
                                        label="Religion"
                                        value={religion}

                                        margin="normal"
                                        InputProps={{
                                            readOnly: true,

                                        }}
                                        variant="outlined"
                                    />



                              

                                </Grid>



                            </Grid>

                        </Dialog>
                    </>
                )}

            </>
        )
    }
}
CrewMembers.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles, { withTheme: true })(CrewMembers);
  

// export default withRouter(CrewMembers)
