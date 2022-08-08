import { useState } from 'react'
import { Window } from '../../elements'
import '../../resources/scss/pages/contact.scss'

export default function Contact() {
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false)
  const [showVisitorMessage, setShowVisitorMessage] = useState(false)
  const [showGoodbyeMessage, setShowGoodbyeMessage] = useState(false)
  const [isMessageSent, setIsMessageSent] = useState(false)

  setTimeout(() => {
    setShowWelcomeMessage(true)
  }, 2000)

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]),
      )
      .join('&')
  }

  const handleFormSubmit = () => {
    const userMessage = { 'form-name': 'contact', name, email, message }
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode(userMessage),
    })
      .then(() => console.log('submitted'))
      .catch((error) => console.log(error))
  }

  const handleSubmitClick = (e) => {
    e.preventDefault()
    handleFormSubmit()
    setShowVisitorMessage(true)
    setIsMessageSent(true)
    setTimeout(() => {
      setShowGoodbyeMessage(true)
    }, 500)
  }

  const formatDisplayName = (name) => {
    const splitWords = name.split(' ')
    for (let i = 0; i < splitWords.length; i++) {
      splitWords[i] = splitWords[i][0].toUpperCase() + splitWords[i].substr(1)
    }
    splitWords.join('')
  }

  const sentMessage = () => {
    return <p className="message-sent">Message Sent</p>
  }

  return (
    <Window barTitle="Let's Chat">
      <section className="contact-content">
        <div className="message-display">
          <p
            className="message"
            isvisible={showWelcomeMessage ? 'true' : 'false'}
          >
            <span>GeanieBot: </span>Hello there! Thanks for stopping by! I look
            forward to chatting with you about your exciting project or other
            opportunities.
          </p>
          <p
            className="message"
            isvisible={showVisitorMessage ? 'true' : 'false'}
          >
            <span>{name}:</span>
            {message}
          </p>
          <p
            className="message"
            isvisible={showGoodbyeMessage ? 'true' : 'false'}
          >
            <span>GeanieBot:</span>
            I'll get back to you ASAP! TTFN &lt;3
          </p>
        </div>
        <form
          name="contact"
          method="post"
          onSubmit={(e) => handleSubmitClick(e)}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="contact-details">
            <input
              type="text"
              className="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
            />
            <input
              type="text"
              className="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Electronic Mail Address"
            />
          </div>
          <textarea
            type="text"
            className="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <input type="submit" className="button"></input>
        </form>
      </section>
    </Window>
  )
}
