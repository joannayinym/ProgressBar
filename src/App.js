import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../src/store/actions/index';
import ButtonsContainer from '../src/containers/ButtonsContainer';
import BarSelectorContainer from '../src/containers/BarSelectorContainer';
import BarsContainer from '../src/containers/BarsContainer';
import * as classes from './App.module.css';

// class App extends React.Component {
//   componentDidMount() {
//     const { fetchConfiguration } = this.props;

//     if (fetchConfiguration) {
//       fetchConfiguration();
//     }
//   }

//   render() {
//     return (
//       <div className={classes.App}>
//         <header className={classes.Header}>
//           <h2>Progress Bar</h2>
//           <h4>By Joanna Yin</h4>
//         </header>
//         <BarsContainer />
//         <div className={classes.Container}>
//           <BarSelectorContainer />
//           <ButtonsContainer />
//         </div>
//       </div>
//     );
//   }
// };

const App = (props) => {
  const { fetchConfiguration, error } = props;

  useEffect(() => {
    if (fetchConfiguration) {
      fetchConfiguration();
    }
  }, [fetchConfiguration]);  

  let errString = '';
  let appString = '';
  if (error) { errString = <h2>Something went wrong!!!</h2>; }
  if (!error) {
    appString = (
      <div className={classes.App}>
        <header className={classes.Header}>
          <h2>Progress Bar</h2>
          <h4>By Joanna Yin</h4>
        </header>
        <BarsContainer />
        <div className={classes.Container}>
          <BarSelectorContainer />
          <ButtonsContainer />
        </div>
      </div>
    )
  }

  return (
    <div className={classes.App}>
      {errString}
      {appString}
    </div>
    // <div className={classes.App}>
    //   <header className={classes.Header}>
    //     <h2>Progress Bar</h2>
    //     <h4>By Joanna Yin</h4>
    //   </header>
    //   <BarsContainer />
    //   <div className={classes.Container}>
    //     <BarSelectorContainer />
    //     <ButtonsContainer />
    //   </div>
    // </div>
  );

};

const mapStateToProps = state => {
  return {
    error: state.progressBars.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchConfiguration: () => dispatch(actions.fetchConfiguration())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

