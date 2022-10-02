import React, { Component } from 'react';

export class FormInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.addNotes(this.state);

    this.setState({
      title: '',
      body: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <p className="note-input__title__char-limit">Sisa karakter: 50</p>
        <input
          type="text"
          name="title"
          className="note-input__title"
          placeholder="Ini adalah judul ..."
          onChange={this.onChange}
          value={this.state.title}
          required
        />
        <textarea
          name="body"
          className="note-input__body"
          placeholder="Tuliskan catatanmu di sini ..."
          onChange={this.onChange}
          value={this.state.body}
          required
        ></textarea>
        <button type="submit">Buat</button>
      </form>
    );
  }
}

export default FormInput;
