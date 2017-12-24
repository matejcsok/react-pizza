import React from 'react';


class InboxItem extends React.Component {

  render() {
    return (
      <tr>
        <td>5pm</td>
        <td>{this.props.index}</td>
        <td>Confirmed</td>
      </tr>
    );
  }
}

export default InboxItem;
