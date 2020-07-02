function App(props) {
    console.log(props.useHistory,"ahj")
    return (
      <div className="App-header">
    <div className="content">
        <Switch>
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
          </Switch>           
          
          {/* <div className="maincontent">
          <h2 className="header">Game Of Thrones</h2>
          <div className="plot">
          <p>Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.</p>
          </div>
           <Category/> 
           <MainPageContent/>
          <Route  path='/' render={() => <Routes/>}
            />   
          </div> */}
        </div> 
      </div>
    );
  }
  
  const Routes = () => {
    return (  
      <Switch>
        <Route  path='/' render={() => (        
          <div>
            <Route  exact path = '/' component={MainPageContent} />
  
           <Route  exact path = '/houses' component={NobleHouses} />
            
          </div>      
        )}
        />
         </Switch>
    );
  }
  
  export default App;


  
// class App extends Component {

//   render() {
//     console.log(this.props.history,"ji")
//   return(
// <>
// <div className="App-header">
//   <div className="content">
//       <Switch>
//           <Route exact path='/' render={() => (

//            <div className="maincontent">
//            <h2 className="header">Game Of Thrones</h2>
//            <div className="plot">
//            <p>Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.</p>
//            </div>
//            <MainPageContent/>  
//            </div>

//           )} />
//           <Route path='/houses' render={() => <NobleHouses />} />              
//         </Switch>           

//         {/* <div className="maincontent">
//         <h2 className="header">Game Of Thrones</h2>
//         <div className="plot">
//         <p>Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.</p>
//         </div>
//          <Category/> 
//          <MainPageContent/>
//         <Route  path='/' render={() => <Routes/>}
//           />   
//         </div> */}
//       </div> 
//     </div>
// </>
//       )
//   }

// }

// export default (App);

