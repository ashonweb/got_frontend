
import React, { Component } from 'react';
import { Grid, } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import { withRouter, NavLink } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import SwipeQuotedHouse from './SwipeQuotedHouse';
import { Link } from 'react-router-dom';
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
const API_URL = process.env.REACT_APP_API_URL;




class MainHouses extends Component {
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
            place: "",
            housesdis:"",
            disabled:"false"
        };
    }


    async componentDidMount() {
        let location = window.location.pathname.split('/');
        let lastpath = location[location.length - 1]
        console.log(lastpath, "last")
        this.setState({
            housesdis:lastpath,
        },()=>{
            console.log(this.state.housesdis,"this.state.housesdis")
            if(this.state.housesdis === 'Arryn'){
                this.setState({
                    disabled:true,
                })
            }
            else{
                this.setState({
                    disabled:false,
                })
            }
        })
       
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
        console.log(q,qa,logo,house)
        this.setState({
            quotes: q,
            quotesa: qa,
            logo: logo,
            house: house,
        })


        // await fetch('http://localhost:3009/details/?house=' + lastpath, {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //         // 'Content-Type': 'application/json',
        //     }
        // })
        //     .then(data => data.json()
        //     )
        //     .then(data => {
        //         // console.log(data, "details");
        //         this.setState({
        //             detailsdata: data,
        //         }, () => {
        //             const { titles, place,description, background, sigil, words, seat, region, lord, swornto, religion, weapon, founder } = this.state.detailsdata
        //             var place_replace = place.replace(/\\/g, "/");
        //             // console.log(place_replace);
        //             this.setState({
        //                 title: titles,
        //                 description,
        //                 background,
        //                 sigil,
        //                 words,
        //                 seat,
        //                 region,
        //                 lord,
        //                 swornto,
        //                 religion,
        //                 weapon,
        //                 founder,
        //                 place:place_replace,
        //             })
        //             // console.log(this.state.place, "q")
        //         })

        //     });

    }



    render() {
        const { house, quotes, quotesa } = this.state;
        console.log(  this.state.house,   this.state.quotes,   this.state.quotesa      ,"mainhouses.js"      )
        // const { activeStep } = this.state;
        // console.log(this.state.place, "q")
        // const houseBackground = `http://localhost:3009/${place}`;
        // console.log(houseBackground)

        return (
            <>
                <div className={this.state.house + "details_noble"}>

                    <SwipeQuotedHouse q={quotes} qa={quotesa} />


                    {/* <SwipeQuotedHouse/> */}
                    {

                    }
                    <img className="main_content_stark_logo" src={`${API_URL}` + this.state.logo} alt="no" />

                    {/* <img className="main_content_stark_logo" src={"http://localhost:3009/" + this.state.logo} alt="no" /> */}
                </div>
                {/* <div className="main_content_category">
                <button class="button_housedetails"value="The Great Houses in Westero's"><b>Family & House Hold</b></button>
                <button class="button_housedetails" value="The Great Houses in Westero's"><b>Friends & Foes</b></button>
                <button class="button_housedetails" value="The Great Houses in Westero's"><b>Family</b></button>
         
                </div> */}
                <Fade className="react-reveal" left >

                    <Grid container className="main_content_category" spacing={3}>
                        <Grid item xs={2}>

                        </Grid>
                        <Grid item className="main_content_category_item" xs={2}>
                            <Button component={Link} to={"/Noble_houses/House/" + house} class="button_housedetails" value="The Great Houses in Westero's" > <b>History</b></Button>

                            {/* <button class="button_housedetails" value="The Great Houses in Westero's"><b> History</b></button> */}

                        </Grid>  <Grid className="main_content_category_item" item xs={2}>
                            <Button component={Link} to={"/Noble_houses/Family/" + house} class="button_housedetails" value="The Great Houses in Westero's" > <b>Family & Household</b></Button>

                            {/* <button class="button_housedetails" value="The Great Houses in Westero's"><b> Family Member</b></button> */}

                        </Grid>  <Grid className="main_content_category_item" item xs={2}>
                            <Button  component={Link} to={"/Noble_houses/Trivia/" + house} class="button_housedetails" value="The Great Houses in Westero's" > <b>Trivia</b></Button>

                            {/* <button class="button_housedetails" value="The Great Houses in Westero's"><b> Trivia</b></button> */}

                        </Grid>
                        <Grid className="main_content_category_item" item xs={2}>
                            <Button component={Link} to={"/Noble_houses/Friendandfoes/" + house} class="button_housedetails" value="The Great Houses in Westero's" activeStyle={{ background: "green", textDecoration: 'none' }} > <b>Friend & Foes</b></Button>
                            {/* <NavLink to={"/Noble_houses/Friendandfoes/" + house} class="button_housedetails" style={{ color: 'black', textDecoration: 'none' }} activeStyle={{ background: "green", textDecoration: 'none' }} >behin</NavLink> */}

                            {/* <button class="button_housedetails" value="The Great Houses in Westero's"><b> Friends & Foes</b></button> */}

                        </Grid>
                        <Grid className="main_content_category_item" item xs={2}>
                        <Button  variant="contained"
                        color="secondary" startIcon={<ArrowBackIosSharpIcon  className="arrow_back" />}
 component={Link} to="/Noble_houses" style={{ color: 'red', textDecoration: 'none' }} class="button_housedetails" value="The Great Houses in Westero's" activeStyle={{ background: "green", textDecoration: 'none' }} > <b>Back</b></Button>

                            {/* <Button component={Link} to="/behind" class="button_housedetails" value="The Great Houses in Westero's" > <b>Behind Scenes</b></Button> */}
                            {/* <NavLink to="/Noble_houses" style={{ color: 'red', textDecoration: 'none' }} activeStyle={{textDecoration: 'none' }} >back</NavLink> */}
                            {/* <button class="button_housedetails" value="The Great Houses in Westero's"><b> Behind Scenes</b></button> */}

                        </Grid>
                        
                    </Grid>
                </Fade>
                {/* <Fade className="react-reveal" right >
                <Grid container className="history_container"  style={{ background: `linear-gradient(rgba(14, 1, 1, 0.5), rgba(0, 0, 0, 0.5)), url(${houseBackground})`}} spacing={3}>
                    
                    <Grid item className="item_history" xs={6}>

                        <div className="history_content">
                            {description}
                        </div>
                        <h5>Background</h5>
                        <div className="history_content">
                            {background}   
                        </div>

                    </Grid>
                    <Grid item xs={6}>
                        
                        <TextField

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

                            id="outlined-read-only-input"
                            label="Lord"
                            value={lord}
                            margin="normal"
                            InputProps={{
                                readOnly: true,

                            }}
                            variant="outlined"
                        />  <TextField

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
                </Fade> */}

            </>
        )
    }
}

export default withRouter(MainHouses)