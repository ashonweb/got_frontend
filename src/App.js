import React from 'react';
import './App.css';
import MainPageContent from './components/MainPageContent'
import {
  Switch,
  Route,
  Link,
  NavLink,

} from "react-router-dom";
import NobleHouses from './components/NobleHouses'
import Category from './components/Category';
import TemporaryDrawer from './components/TemporaryDrawer';
import MainHouses from './components/MainHouses';
import Family from './components/Family';
import Stark from './components/Stark';
import CrewAndCast from './components/CrewAndCast';
import Trivia from './components/Trivia';
import Friends_Foes from './components/Friends_Foes';
import Wildings from './components/Wildings';
import Freefolk from './components/Freefolk';
import Unsullied from './components/Unsullied';
import Doth from './components/Doth';
import Tech_Loc from './components/Tech_Loc';




function App(props) {
  console.log(props.history, props.router, "ahj")
  return (
    <div className="App-header">
      <div className="content">
        {/* <Switch>
          <Route exact path='/' render={() => (
         
           <div className="maincontent">
           <h2 className="header">Game Of Thrones</h2>
           <div className="plot">
           <p>Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.</p>
           </div>
           <MainPageContent/>  
           </div>
               
          )} />
          <Route path='/houses' render={() => <NobleHouses />} />              
        </Switch>            */}

        <div className="maincontent">
          {/* <h2 className="header">Game Of Thrones</h2> */}
          <TemporaryDrawer />
          {/* <div className="plot">
            <p>Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.</p>
          </div>
          <Category /> */}
          {/* <MainPageContent/> */}
          <Route path='/' render={() => <Routes />}
          />
        </div>
      </div>
    </div>
  );
}

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' render={() => (
        <>
          <NavLink to="/" className="header">Game Of Thrones</NavLink>

          <div className="plot">
            <p>Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.</p>
          </div>
          <Category />
          <MainPageContent />
          {/* <Route exact path='/' component={MainPageContent} /> */}
          <Route exact path='/houses' component={NobleHouses} />
          <Route exact path='/houses/stark' component={MainHouses} />

        </>
      )}
      />
      <Route exact path='/home' render={() => (
        <>
           <NavLink to="/home" className="header">Game Of Thrones</NavLink>

          <div className="plot">
            <p>Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.</p>
          </div>
          <Category />
          <MainPageContent />
        </>
      )}
      />
      <Route exact path='/Noble_houses' render={() => (
        <>
           <NavLink to="/home" className="header">Game Of Thrones</NavLink>

          <div className="plot">
            <p>Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.</p>
          </div>
          <Category />
          <NobleHouses />
          {/* <Route exact path='/' component={MainPageContent} /> */}
          {/* <Route exact path='/houses' component={NobleHouses} /> */}
          {/* <Route exact path='/houses/stark' component={MainHouses} /> */}

        </>
      )}
      />
      <Route path='/crewandcast' render={() => (
        <>
           <NavLink to="/home" className="header">Game Of Thrones</NavLink>
          <div className="plot">
            <p>Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.</p>
          </div>
          <Category />
          <CrewAndCast />
          {/* <Route exact path='/' component={MainPageContent} /> */}
          {/* <Route exact path='/houses' component={NobleHouses} /> */}
          {/* <Route exact path='/houses/stark' component={MainHouses} /> */}

        </>
      )}
      />
       <Route path='/whitewalkers' render={() => (
        <>
           <NavLink to="/home" className="header">Game Of Thrones</NavLink>

          <div className="plot">
            <p>Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.</p>
          </div>
          <Category />
          <Wildings />
          {/* <Route exact path='/' component={MainPageContent} /> */}
          {/* <Route exact path='/houses' component={NobleHouses} /> */}
          {/* <Route exact path='/houses/stark' component={MainHouses} /> */}

        </>
      )}
      />
       <Route path='/freefolk' render={() => (
        <>
           <NavLink to="/home" className="header">Game Of Thrones</NavLink>

          <div className="plot">
            <p>Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.</p>
          </div>
          <Category />
          <Freefolk />
          {/* <Route exact path='/' component={MainPageContent} /> */}
          {/* <Route exact path='/houses' component={NobleHouses} /> */}
          {/* <Route exact path='/houses/stark' component={MainHouses} /> */}

        </>
      )}
      />
        <Route path='/unsullied' render={() => (
        <>
           <NavLink to="/home" className="header">Game Of Thrones</NavLink>

          <div className="plot">
            <p>Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.</p>
          </div>
          <Category />
          <Unsullied />
          {/* <Route exact path='/' component={MainPageContent} /> */}
          {/* <Route exact path='/houses' component={NobleHouses} /> */}
          {/* <Route exact path='/houses/stark' component={MainHouses} /> */}

        </>
      )}
      />
      <Route path='/doth' render={() => (
        <>
           <NavLink to="/home" className="header">Game Of Thrones</NavLink>

          <div className="plot">
            <p>Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.</p>
          </div>
          <Category />
          <Doth />
          {/* <Route exact path='/' component={MainPageContent} /> */}
          {/* <Route exact path='/houses' component={NobleHouses} /> */}
          {/* <Route exact path='/houses/stark' component={MainHouses} /> */}

        </>
      )}
      />
        <Route path='/tandl' render={() => (
        <>
           <NavLink to="/home" className="header">Game Of Thrones</NavLink>

          <div className="plot">
            <p>Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.</p>
          </div>
          <Category />
          <Tech_Loc />
          {/* <Route exact path='/' component={MainPageContent} /> */}
          {/* <Route exact path='/houses' component={NobleHouses} /> */}
          {/* <Route exact path='/houses/stark' component={MainHouses} /> */}

        </>
      )}
      />
      <Route path='/Noble_houses/' render={() => (
        <>
          <MainHouses />

          <Route path='/Noble_houses/House/' render={() => (
            <>
              <Stark />
            </>

          )}
          />
          <Route path='/Noble_houses/Family/' render={() => (
            <>
              <Family />
            </>

          )}
          />
           <Route path='/Noble_houses/Trivia/' render={() => (
            <>
              <Trivia />
            </>

          )}
          />
           <Route path='/Noble_houses/Friendandfoes/' render={() => (
            <>
              <Friends_Foes />
            </>

          )}
          />
        </>

      )}
      />

    </Switch>
  );
}

export default App;