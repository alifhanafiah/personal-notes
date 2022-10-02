import React, { Component } from 'react';
import FormInput from './FormInput';

export class NoteInput extends Component {
  render() {
    return (
      <div className="note-input">
        <h2>Buat catatan</h2>
        <FormInput addNotes={this.props.addNotes} />
      </div>
    );
  }
}

export default NoteInput;
