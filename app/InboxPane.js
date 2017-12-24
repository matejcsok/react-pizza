import React from 'react';
import InboxItem from './InboxItem';

class InboxPane extends React.Component {

  render() {
    return (
      <div id="inbox-pane">
        <h1>Inbox</h1>
        <table>
          <thead>
            <tr>
              <th>Chat Received</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.props.humans).map((human) => <InboxItem key={human} index={human} details={this.props.humans[human]} />)}
            <InboxItem />
          </tbody>
        </table>  
      </div>
    );
  }
}

export default InboxPane;
