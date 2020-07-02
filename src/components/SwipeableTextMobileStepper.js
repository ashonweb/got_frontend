import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Divider } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Season 01 : A Game of Thrones',
    release_date :"20/06/2011",
    IMDB:"9.0",
    highlight_epi :"Baelor",
    imgPath:require('../assests/season1_f.jpg')
    //   'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Season 02 : A Clash of Kings',
    release_date :"01/03/2012",
    IMDB:"9.0",
    highlight_epi :"Blackwater",
    imgPath:require('../assests/season2.jpg')
    //   'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Season 03 : A Storm of Swords',
    release_date :"31/03/2013",
    IMDB:"9.7",
    highlight_epi :"The Rains of Castamere",
    imgPath:require('../assests/s4.jpg')
    //   'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'Season 04 : A Feast for Crows',
    release_date :"06/04/2014",
    IMDB:"9.5",
    highlight_epi :"The Watchers on the Wall",
    imgPath:require('../assests/s3.jpg')
    //   'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Season 05 : A Dance with Dragons',
    release_date :"12/04/2015",
    IMDB:"9.8",
    highlight_epi :"Hardhome",
    imgPath:require('../assests/s5.jpg')
    //   'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Season 06 : The Winds of Winter',
    release_date :"24/04/2016",
    IMDB:"9.5",
    highlight_epi :"The Battle of the Bastards",
    imgPath:require('../assests/s6.jpg')
    //   'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  }, {
    label: 'Season 07 : A Dream of Spring',
    release_date :"16/07/2017",
    IMDB:"9.5",
    highlight_epi :"Beyond the Wall",
    imgPath:require('../assests/s7.jpg')
    //   'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  }, {
    label: 'Season 08 : A Dawn before nightfall',
    release_date :"14/4/2019",
    IMDB:"8.3",
    highlight_epi :"A Knight of Seven Kingdoms",
    imgPath:require('../assests/s8.jpg')
    //   'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  header_details :{
       display: 'flex',
       justifyContent : "space-evenly",
       [theme.breakpoints.down('sm')]: {
       display:"block"
      },
  },

  header: {
    // display: 'flex',
    // alignItems: 'center',
    height: 50,
    padding:"10px",
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down('sm')]: {
      height: 85,
    },
  },
  img: {
    height: 430,
    display: 'block',
    // maxWidth: "1000%",
    overflow: 'hidden',
    width: '100%',
    backgroundSize:"cover",
    [theme.breakpoints.down('sm')]: {
      height: 265,
    },
  },
  iroot :{
    fill: "darkgoldenrod",
    fontSize: "12px !important",
  },
});

class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;

    return (
      <div className={classes.root}>
       <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={step.imgPath} alt={step.label} />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <Paper square elevation={0} className={classes.header}>
          <p className="label"><i>{tutorialSteps[activeStep].label}</i></p>
          <div className={classes.header_details}>
          <p className="label"><b><i>Release Date : {tutorialSteps[activeStep].release_date}</i></b></p>
          <p className="label"><b><i>IMDB Season Rating : <StarIcon classes ={{root : classes.iroot}}/>  {tutorialSteps[activeStep].IMDB}</i></b></p>
          <p className="label"><b><i>highlight Episode : {tutorialSteps[activeStep].highlight_epi}</i></b></p>

          </div>

        </Paper>
        <Divider/>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </div>
    );
  }
}

SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SwipeableTextMobileStepper);
