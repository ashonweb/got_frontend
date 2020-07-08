import React, { Component } from 'react';
import { Grid, TextField, } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
const API_URL = process.env.REACT_APP_API_URL;

const styles = theme => ({
    [theme.breakpoints.down('sm')]: {
    item:{
        padding:"0px !important",
        margin:"0px 0px 12px !important",
        maxWidth: "none"
    },
    dialogitem:{
        maxWidth:"none !important"
    }
      },
    
  });

class Stark extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {},
            quotes: [],
            quotesa: [],
            logo: "",
            house: "",
            detailsdata: {},
            title: "",
            description: "",
            background: "",
            sigil: "",
            words: "",
            seat: "",
            region: "",
            lord: "",
            swornto: "",
            religion: "",
            weapon: "",
            founder: "",
            place:""
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
        // await fetch('http://localhost:3009/posts/?house=' + lastpath, {
            await fetch(`${API_URL}posts/?house=` + lastpath, {

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

        const { q, qa, logo, house } = this.state.data
        this.setState({
            quotes: q,
            quotesa: qa,
            logo: logo,
            house: house,
        })


        // await fetch('http://localhost:3009/details/?house=' + lastpath, {
            await fetch(`${API_URL}details/?house=` + lastpath, {

            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                // 'Content-Type': 'application/json',
            }
        })
            .then(data => data.json()
            )
            .then(data => {
                console.log(data, "details");
                this.setState({
                    detailsdata: data,
                }, () => {
                    const { titles, place,description, background, sigil, words, seat, region, lord, swornto, religion, weapon, founder } = this.state.detailsdata
                    var place_replace = place.replace(/\\/g, "/");
                    console.log(place_replace,"placereplace");
                    this.setState({
                        title: titles,
                        description,
                        background,
                        sigil,
                        words,
                        seat,
                        region,
                        lord,
                        swornto,
                        religion,
                        weapon,
                        founder,
                        place:place_replace,
                    })
                    console.log(this.state.place, "q")
                })

            });

    }



    render() {
        const { classes, theme } = this.props;

        const {   title, description,
            place,
            background,
            sigil,
            words,
            seat,
            region,
            lord,
            swornto,
            religion,
            weapon,
            founder } = this.state;
        // console.log(this.state.place, "q")
        // const houseBackground = `http://localhost:3009/${place}`;
        const houseBackground = `${API_URL}${place}`;

        // console.log(houseBackground)

        return (
            <>
                  
                <Grid container className="history_container"  style={{ background: `linear-gradient(rgba(14, 1, 1, 0.5), rgba(0, 0, 0, 0.5)), url(${houseBackground})`}} spacing={3}>
                    
                    <Grid item classes ={{item : classes.item,spacing:classes.spacing}} className="item_history" xs={6}>
                    <Fade className="react-reveal" right >
                        <div className="history_content">
                            {description}
                        </div>
                        <h5>Background</h5>
                        <div className="history_content">
                            {background}   
                        </div>
                        </Fade>

                    </Grid>
                    <Grid item xs={6} classes ={{item : classes.item,spacing:classes.spacing}}>
                        
                        <TextField

                                style={{width: "-webkit-fill-available"}}
                            id="outlined-read-only-input"
                            label="Seat"
                            value={seat}

                            margin="normal"
                            InputProps={{
                                readOnly: true,

                            }}
                            variant="outlined"
                            
                        />
                        <TextField
                                                        style={{width: "-webkit-fill-available"}}


                            id="outlined-read-only-input"
                            label="Sigil"
                            value={sigil}
                            margin="normal"
                            InputProps={{
                                readOnly: true,

                            }}
                            variant="outlined"
                        />
                        <TextField
                                                            style={{width: "-webkit-fill-available"}}

                            id="outlined-read-only-input"
                            label="Words"
                            value={words}

                            margin="normal"
                            InputProps={{
                                readOnly: true,

                            }}
                            variant="outlined"
                        />
                        <TextField
                                style={{width: "-webkit-fill-available"}}

                            id="outlined-read-only-input"
                            label="Founder"
                            value={founder}

                            margin="normal"
                            InputProps={{
                                readOnly: true,

                            }}
                            variant="outlined"
                        />
                        <TextField
                                style={{width: "-webkit-fill-available"}}

                            id="outlined-read-only-input"
                            label="Lord"
                            value={lord}
                            margin="normal"
                            InputProps={{
                                readOnly: true,

                            }}
                            variant="outlined"
                        />  <TextField
                        style={{width: "-webkit-fill-available"}}

                            id="outlined-read-only-input"
                            label="Region"
                            value={region}

                            margin="normal"
                            InputProps={{
                                readOnly: true,

                            }}
                            variant="outlined"
                        />
                        <TextField
                                style={{width: "-webkit-fill-available"}}

                            id="outlined-read-only-input"
                            label="Titles"
                            value={title}
                            margin="normal"
                            InputProps={{
                                readOnly: true,

                            }}
                            variant="outlined"
                        />
                        <TextField
                                style={{width: "-webkit-fill-available"}}

                            id="outlined-read-only-input"
                            label="Weapon"
                            value={weapon}
                            margin="normal"
                            InputProps={{
                                readOnly: true,

                            }}
                            variant="outlined"
                        />
                        <TextField
                                style={{width: "-webkit-fill-available"}}

                            id="outlined-read-only-input"
                            label="Religion"
                            value={religion}

                            margin="normal"
                            InputProps={{
                                readOnly: true,

                            }}
                            variant="outlined"
                        />
                        <TextField
                                style={{width: "-webkit-fill-available"}}

                            id="outlined-read-only-input"
                            label="Alligence"
                            value={swornto}
                            margin="normal"
                            InputProps={{
                                readOnly: true,

                            }}
                            variant="outlined"
                        />

                    </Grid>
                </Grid>

            </>
        )
    }
}

Stark.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles, { withTheme: true })(Stark);
  

// export default withRouter(Stark)