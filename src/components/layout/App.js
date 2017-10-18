//this component handles the main template required on every page
import React from "react";
import PropTypes from "prop-types";
import {Switch, Route} from "react-router-dom";
import HomePage from "./../home/HomePage";
import NotFoundPage from "./../notfoundpage/NotFoundPage";
import AboutPage from "./../about/AboutPage";
import Header from "./../common/Header";
import Footer from "./../common/Footer";


// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render(){
    return (
      <div className="">
        <Header/>
          {/*{this.props.children}*/}


        <Switch>
          <Route exact path="/" component={HomePage} />
          {/*<Route path="/fuel-savings" component={FuelSavingsPage} />*/}
          <Route path="/about" component={AboutPage} />
          <Route path="/404" component={NotFoundPage} />
          <Route component={NotFoundPage} />
        </Switch>

        <Footer/>
      </div>
    );
  }
}
//propTypes validation since I am expecting child components.
App.propTypes = {
  children : PropTypes.element
  //children : PropTypes.object.isRequired,
};

export default App;
