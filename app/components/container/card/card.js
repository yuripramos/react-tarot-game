import React, { Component } from 'react';


class card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div> conteudo de card especifico </div>
    );
  }
}

export default card;
