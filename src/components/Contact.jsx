import React from 'react'

function Contact() {
  return (
    <div>
    <div>CONTACT US</div>
    <div>
      <form action="">
        <input type="text" name="name" id="name" placeholder='Name' />
        <input type="number" name="phone" id="phone" placeholder='Phone Number' />
        <input type="email" name="email" id="email" placeholder='Email' />
      <textarea name="message" rows={4} cols={40} placeholder='Message' />
      <button>Send</button>
      </form>
      <map>Map Location</map>
    </div>
    </div>
  )
}

export default Contact