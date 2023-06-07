const ContactMe = () => {
    return (
        <div id="about-me" className="container">

            <div>
                <h1>Contact Me</h1>
            </div>

            <div className='p'>
                <div className="contact-container">
                    <form>
                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                        <label htmlFor="email">email</label>
                        <input type="text" id="email" name="email" placeholder="Your email.." />

                        <label htmlFor="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }}></textarea>

                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;