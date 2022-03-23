import React, { Component } from 'react'
import "./mail.css";

export default class Mail extends Component {
    render() {
        return (
          <div className="mail">

            <div className='hulk'>
            <div className='maill'>

            <h1 className="newUserTitle">Send Mail</h1>

            <form className="Form">

            <div className="newUserItem">
                <label>To</label>
                <input type="text" placeholder="email" />
            </div>

            <div className="newUserItem">
                <label>Subject</label>
                <input type="text" placeholder="email" />
            </div>

            <div className="newUserItem">
                <label>Message</label>
                <textarea cols="10" rows="5" charswidth="23" name="text_body"></textarea>

            </div>

            <div className="newUserItem">
                <label>File</label>
                <input type="file" placeholder="file" multiple/>
            </div>

            <button className="newUserButton">Send</button>

            </form>
            </div>

            </div>

            <div className='maill'>

            <h1 className="newUserTitle">Mail All Employees</h1>

            <form className="Form">

            <div className="newUserItem">
                <label>Subject</label>
                <input type="text" placeholder="email" />
            </div>

            <div className="newUserItem">
                <label>Message</label>
                <textarea cols="10" rows="5" charswidth="23" name="text_body"></textarea>

            </div>

            <div className="newUserItem">
                <label>File</label>
                <input type="file" placeholder="file"  multiple/>
            </div>

            <button className="newUserButton">Send</button>

            </form>

       </div>
      
    </div>
     )
    }
}
