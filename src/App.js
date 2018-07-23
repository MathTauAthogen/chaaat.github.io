import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>
          Hello.
        </h2>
        <p>
          We are small nonprofit team working on progressive, WebRTC-powered secure messenger for everyone to chat without any fear of being tracked or blackmailed. 
        </p>
        <p>
          The whole concept is about three main priorities:
        </p>
        <ul>
          <li>
            anonymity: we identify user by arbitrary nickname user defines himself and by email that we use only for contacting user. Other users never sees each other emails.
          </li>
          <li>
            privacy: we don’t collect or share user data. All we store is just users' credentials.
          </li>
          <li>
            security: not about data, but about people and governmental relationship. As soon as every message transfers via WebRTC, we have absolutely nothing to hide. We are fully open source. We have no company behind at all. We don’t spend or earn money. So we are always open for any government to investigate, they’re not getting any messages anyway because it’s technically impossible.
          </li>
        </ul>
        <p>
          You can <a href="https://github.com/chaaat">check us out on GitHub</a>. Any collaboration is highly appreciated.
        </p>
        <h4>Be first to know Chaaat is out</h4>
        <small><i>Only one email, I promise it personally</i></small>
        <form action="https://chaaat.us18.list-manage.com/subscribe/post?u=edee292ad7cff4befebba385b&amp;id=eff8aa20d6" method="post">
          <input type="email" name="EMAIL" placeholder="johndoe@gmail.com" />
          <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
            <input type="text" name="b_edee292ad7cff4befebba385b_eff8aa20d6" tabIndex="-1" value="" />
          </div>
          <button>Subscribe</button>
        </form>
      </div>
    );
  }
}

export default App;
