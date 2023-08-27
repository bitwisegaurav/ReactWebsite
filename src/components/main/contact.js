export default function Contact(){
    return <div className="contact" id="contact">
        <div className="contact-section">
            <h1 className="contact-section-title">Contact Us</h1>
            <form className="contact-section-form" method="post" action="">
                <label className="contact-section-form-label">Name*</label>
                <input className="contact-section-form-input" type="text" placeholder="Name" name="name" required />
                <label className="contact-section-form-label">Email*</label>
                <input className="contact-section-form-input" type="email" placeholder="Email" name="email" required />
                <label className="contact-section-form-label">Subject</label>
                <input className="contact-section-form-input" type="text" placeholder="Subject" name="subject"/>
                <label className="contact-section-form-label">Message</label>
                <textarea className="contact-section-form-textarea" placeholder="Message" name="message"></textarea>
                <button className="contact-section-form-button" type="submit">Submit</button>
            </form>
        </div>
    </div>
}