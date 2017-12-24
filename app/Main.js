import React from 'react';
import InboxPane from './InboxPane';

import samples from './sample-data';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      "humans": {},
      "stores": {}

    }
    var loadSampleData = () => {
      this.setState({
        "humans": samples.humans,
      "stores": samples.stores
      })
    }

  }



  render() {
    return (
      <div>
        <div id="header"></div>
        <button onClick={this.loadSampleData}>Load Sample Data</button>
        <div className="container"></div>
        <div className="column">
          <InboxPane humans={this.state.humans} />
        </div>
        <div className="column"></div>
        <div className="column"></div>
      </div>
    );
  }
}

export default Main;
