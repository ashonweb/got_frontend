
import React, { Component } from 'react';
import { Grid, Divider } from '@material-ui/core';
import '../App.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {withRouter} from 'react-router-dom';
import SwipeableTextMobileStepper from './SwipeableTextMobileStepper'


class MainPageContent extends Component {
    handlehouses =(e)=>{
        console.log(this.props.history,)
        e.preventDefault();
        this.props.history.push('/houses');
    }
    render() {
        return (
            <div className="root">
                                    {/* <button class="buttonclass" value="The Great Houses in Westero's" onClick={this.handlehouses} > <b>Great Houses in Westero's</b></button> */}

                {/* <div className="categorydivision">
                <Link to='/houses'class="buttonclass" value="The Great Houses in Westero's" > <b>Great Houses in Westero's</b></Link>

                    <button class="buttonclass" value="The Great Houses in Westero's" onClick={this.handlehouses} > <b>Great Houses in Westero's</b></button>
                    <button class="buttonclasscast" value="Cast and Crew"><b>Cast and Crew</b></button>
                    <button class="buttonclasscast" value="The Great Houses in Westero's"><b> Trivia</b></button>
                    <button class="buttonclasscast" value="The Great Houses in Westero's"><b>Blog</b></button>
                    <button class="buttonclasscast" value="The Great Houses in Westero's"><b>Technical Specs & Details</b></button>
                    <button class="buttonclasscast" value="The Great Houses in Westero's"><b>Hierarchy</b></button>
                </div>
                <Divider /> */}
                <div className="carosal">
                    <SwipeableTextMobileStepper />

                </div>
                <Grid container className="mainpagecontent" spacing={3}>
                    <Grid container className="exploreseasons" spacing={3}>
                        <Grid  button item xs={3} className="gotlannisters">
                            <div className="seasons">
                            01
                            <p className="seasons_name">SEASON</p>
                            </div>
                            <div>
                               <p className="des">
                               In the first season we first see
                                Daenerys Targareyen's rise from slave to queen,
                                Ned Stark's discovery of a
                                 disturbing Lannister secret, 
                                 the death of a King, the awesomeness of Tyrion, 
                                 the kickass gal that is Arya Stark, and the first
                                  signs of a winter which threatens to destroy everything
                               </p>
                            </div>
                            <div className="findoutmore">
                               <p className="epi">
                                    10 Episodes
                               </p>
                               <a href="https://www.imdb.com/title/tt0944947/episodes?season=1&ref_=tt_eps_sn_1" className="findbutton"button target="_blank"> Read More <ArrowForwardIcon className="arrow" /></a>
                            </div>
                        </Grid>
                        <Divider className = "divider"orientation="vertical" flexItem />                     
                           <Grid item xs={3} className="gotlannisters">
                           <div className="seasons">
                            02
                            <p className="seasons_name">SEASON</p>
                            </div>
                            <div>
                               <p className="des">
                               As GoT season 2 opens, 
                               The War of the Five Kings is raging on, and Robb Stark's army is growing while 
                               Stannis and his Red Priestess plan to take over the kingdom. There are dragons in
                                Essos, white walkers beyond the wall, and Greyjoys holding Winterfell.        
                               </p>
                            </div>
                            <div className="findoutmore">
                               <p className="epi">
                                    10 Episodes
                               </p>
                               <a href="https://www.imdb.com/title/tt0944947/episodes?season=2&ref_=ttep_ep_sn_nx" className="findbutton" target="_blank"> Read More <ArrowForwardIcon className="arrow" /></a>
                            </div>
                        </Grid>
                        <Divider className = "divider" orientation="vertical" flexItem />                     

                        <Grid item xs={3} className="gotlannisters">
                        <div className="seasons">
                            03
                            <p className="seasons_name">SEASON</p>
                            </div>
                            <div>
                               <p className="des">
                               Robb Stark has 
                               fully risen to his height of power as the King of the North, Tywin
                                Lannister has to plan his next move.Jon Snow falls in love with a wildling, 
                                Theon Greyjoy loses a very important body part, and Dany's dragons get all 
                                kinds of awesome.   
                                 </p>
                            </div>
                            <div className="findoutmore">
                               <p className="epi">
                                    10 Episodes
                               </p>
                               <a href="https://www.imdb.com/title/tt0944947/episodes?season=3&ref_=ttep_ep_sn_nx" className="findbutton"button target="_blank"> Read More <ArrowForwardIcon className="arrow" /></a>
                            </div>
                        </Grid>
                        <Divider className = "divider"orientation="vertical" flexItem />                     

                        <Grid item xs={3} className="gotlannisters">
                        <div className="seasons">
                            04
                            <p className="seasons_name">SEASON</p>
                            </div>
                            <div>
                               <p className="des">
                               The fourth season mainly centres around 
                               the war of the five kings; 
                               after the death of Robb Stark at The Red Wedding, 
                               all three remaining kings in Westeros believe they have a claim to the Iron Throne.'

                                                     </p>
                            </div>
                            <div className="findoutmore">
                               <p className="epi">
                                    10 Episodes
                               </p>
                               <a href="https://www.imdb.com/title/tt0944947/episodes?season=4&ref_=ttep_ep_sn_nx" className="findbutton"button target="_blank"> Read More <ArrowForwardIcon className="arrow" /></a>
                            </div>
                        </Grid>
                    </Grid>
                    <Divider/>
                    <Grid container className="exploreseasons" spacing={3}>
                        <Grid item xs={3} className="gotlannisters">
                        <div className="seasons">
                            05
                            <p className="seasons_name">SEASON</p>
                            </div>
                            <div>
                               <p className="des">
                               Season 5 is 
                               filled with intense encounters, 
                               shocking surprises, and political infighting nastier than chamberpot duty
                                at the Citadel. This is the season where Tyrion first meets Daenerys, 
                                where the Mountain is resurrected, and where the White Walkers confront 
                                the Wildlings at Hardhome.
                    
                                </p>
                            </div>
                            <div className="findoutmore">
                               <p className="epi">
                                    10 Episodes
                               </p>
                               <a href="https://www.imdb.com/title/tt0944947/episodes?season=5&ref_=ttep_ep_sn_nx" className="findbutton"button target="_blank"> Read More <ArrowForwardIcon className="arrow" /></a>
                            </div>
                        </Grid>
                        <Divider className = "divider"orientation="vertical" flexItem />                     
                           <Grid item xs={3} className="gotlannisters">
                           <div className="seasons">
                            06
                            <p className="seasons_name">SEASON</p>
                            </div>
                            <div>
                               <p className="des">
                               Cersei, the former mother of king Tommen Baratheon ends Season Six
                                sitting on the Iron Throne in King's Landing after killing all 
                                of her enemies by blowing them up with wildfire in the Sept of Baelor

                               </p>
                            </div>
                            <div className="findoutmore">
                               <p className="epi">
                                    10 Episodes
                               </p>
                               <a href="https://www.imdb.com/title/tt0944947/episodes?season=6&ref_=ttep_ep_sn_nx" className="findbutton"button target="_blank"> Read More <ArrowForwardIcon className="arrow" /></a>
                            </div>
                        </Grid>
                        <Divider className = "divider" orientation="vertical" flexItem />                     

                        <Grid item xs={3} className="gotlannisters">
                        <div className="seasons">
                            07
                            <p className="seasons_name">SEASON</p>
                            </div>
                            <div>
                               <p className="des">
                               The Night King proceeded to destroy the humungous wall of ice using Viserion 
                               as beams of fiery ice melted away the structure. 
                               Game of Thrones season seven ended with the army of the dead 
                               walking through the wreckage of the wall, 
                               teasing the ultimate showdown between the living and the dead in the final series.

                               </p>
                            </div>
                            <div className="findoutmore">
                               <p className="epi">
                                    10 Episodes
                               </p>
                               <a href="https://www.imdb.com/title/tt0944947/episodes?season=7&ref_=ttep_ep_sn_nx" className="findbutton"button target="_blank"> Read More <ArrowForwardIcon className="arrow" /></a>
                            </div>
                        </Grid>
                        <Divider className = "divider"orientation="vertical" flexItem />                     

                        <Grid item xs={3} className="gotlannisters">
                        <div className="seasons">
                            08
                            <p className="seasons_name">SEASON</p>
                            </div>
                            <div>
                               <p className="des">
                            On Cersei's orders, 
                            Qyburn hires Bronn to assassinate Tyrion and Jaime.
                            Theon returns to Winterfell. 
                            At Winterfell, Jon reunites with Bran and Arya, 
                            and later learns to ride Rhaegal, 
                            during which Jon and Daenerys deepen their bond.

                               </p>
                            </div>
                            <div className="findoutmore">
                               <p className="epi">
                                    10 Episodes
                               </p>
                               <a href="https://www.imdb.com/title/tt0944947/episodes?season=8&ref_=ttep_ep_sn_nx" className="findbutton"button target="_blank"> Read More <ArrowForwardIcon className="arrow" /></a>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>

            </div>

        )
    }
}

export default withRouter(MainPageContent);



