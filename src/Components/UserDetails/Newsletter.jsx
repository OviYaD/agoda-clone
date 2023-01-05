import React from 'react'

function Newsletter() {
    return (
        <section className='newsletter'>
            <div>
                <h2>Newsletter</h2>
                <span className='toggleIT'>
                    <span className='toggleMessageSaved'>Saved</span>
                    <span className='toggleMessageFailed'>Failed</span>
                </span>
            </div>
            <fieldset className='newsletterOptions'>
                <div className='newsletterRadioBtn'>
                    <input type="radio" />
                    <label>Daily</label>
                </div>
                <div className='newsletterRadioBtn'>
                    <input type="radio" />
                    <label>Twice a week</label>
                </div>
                <div className='newsletterRadioBtn'>
                    <input type="radio" />
                    <label>Weekly</label>
                </div>
                <div className='newsletterRadioBtn'>
                    <input type="radio" />
                    <label>Never</label>
                </div>
            </fieldset>
        </section>
    )
}

export default Newsletter
