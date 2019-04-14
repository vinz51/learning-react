import React, { Component, useState } from 'react';

const Case = () => {
  return (<div> - </div>);
}

class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
      player: "X",
    };
  }
  
  switchPlayer() {
    const { player } = this.state;
    
    this.setState((previousState) => {
      if (previousState.player === "X") {
        return { player: "O" };
      }
      return { player: "X" };
    });
  }
  
  renderLoop() {
    const allCases = [];
    
    for (let i; i < 3; i++) {
      // const matrix = [];
      for (let j; j < 3; j++) {
        allCases.push(<Case key={ `${i}-${j}` } />);
      }
      // allCases.push(matrix);
    }
    return allCases;
  }
  
  render() {
    const { player } = this.state;
		return (
			<div>
				side of Vinz51
        { this.renderLoop() }
			</div>
		);
	}
}

export default App;

/*
X O O
O X O
O O X
 */

// 
// caseX
// caseO
