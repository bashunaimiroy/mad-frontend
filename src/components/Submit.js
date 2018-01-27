import React, { Component } from 'react';




class Submit extends Component {
  render() {
    return (
      <div className="Submit">
        
        <h1>Submit</h1>
        <form>
            <input placeholder="Artist Name"/>
            <input placeholder="Genre"/>
            <input placeholder="Etc"/>
            <input placeholder="Etc"/>
            
            </form>
            Here we'll have a form for people to submit a new artist page, for the admins to review

      </div>
    );
  }
}

export default Submit;