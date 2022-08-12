import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail text-center">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input className="shadow-md focus:outline-none focus:ring-2 focus:ring-[rgb(100,57,255)] focus:border-transparent" type="text" placeholder="Your Email" />
        <button className="w-32 mx-auto my-4">Subscribe</button>
      </div>
    </div>
  )
}

export default MailList