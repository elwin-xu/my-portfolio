import React from 'react';

function Contact() {
  return (
    <div>
        <form>
        <md-outlined-text-field label="Email" type="email"
            name="email" required />
        <label>
            Subscribe
            <md-checkbox name="subscribe"></md-checkbox>
        </label>
        <md-text-button type="reset">Reset</md-text-button>
        <md-outlined-button>Submit</md-outlined-button>
        </form>
    </div>
  );
}

export default Contact;
