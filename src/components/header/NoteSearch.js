import React, { Component } from 'react';

export class NoteSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      find: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    this.props.onSearch(e.target.value);
  };

  render() {
    return (
      <div className="note-search">
        <input
          type="text"
          name="find"
          placeholder="Cari catatan ..."
          value={this.state.find}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default NoteSearch;
