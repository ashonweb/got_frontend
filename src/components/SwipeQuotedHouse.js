import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    header_details: {
        display: 'flex',
        justifyContent: "space-evenly",
        [theme.breakpoints.down('sm')]: {
            display: "block"
        },
    },

    header: {
        // display: 'flex',
        // alignItems: 'center',
        height: 50,
        padding: "10px",
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
        backgroundSize: "cover",
        [theme.breakpoints.down('sm')]: {
            height: 265,
        },
    },
    iroot: {
        fill: "darkgoldenrod",
        fontSize: "12px !important",
    },
});

class SwipeQuotedHouse extends React.Component {
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
        const { classes, theme, q,qa } = this.props;
        console.log(q,qa,"ffsfsfsdf")
        const { activeStep } = this.state;
        // const maxSteps = tutorialSteps.length;

        return (
            <div className={classes.root}>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={this.handleStepChange}
                    enableMouseEvents
                >
                   
                    {q.map((step, index) => (
                       
                       <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <>
                                    <h2 className="quotes">{step}</h2>
                                    {/* <p className="quotesauthor">{step.qa}</p> */}
                                </>) : null}
                        </div>
                    )
                    )}
                    


                </AutoPlaySwipeableViews>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={this.handleStepChange}
                    enableMouseEvents
                >
                   
                    {qa.map((step, index) => (
                       
                       <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <>
                                    <h2 className="quotesp">{step}</h2>
                                    {/* <p className="quotesauthor">{step.qa}</p> */}
                                </>) : null}
                        </div>
                    )
                    )}
                    


                </AutoPlaySwipeableViews>

            </div>
        );
    }
}

SwipeQuotedHouse.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SwipeQuotedHouse);
