import React from 'react';
import './App.css';
import {connect} from 'react-redux';

function App ({ count, onIncrementClick,onDecrementClick } ) {
  
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => { onIncrementClick(); }}>
        inc
      </button>
      <button onClick={()=> {onDecrementClick();}}>
        dec
      </button>
    </div>
  );
};

const mapStateToProps = state =>{
  return { count: state.counterReducer.count };
}

const mapDispatchToProps = dispatch =>{
  return {
    onIncrementClick: () => {
      dispatch({ type: 'INCREMENT' });
    },
    onDecrementClick: () => {
      dispatch({ type: 'DECREMENT'});
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);