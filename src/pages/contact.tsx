import type { NextPage } from "next"
import React from "react"
import styles from "src/styles/Contact.module.css"

type Props = {}

const ContactPage: NextPage = (props: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formdata = new FormData(e.currentTarget)
    const data = Object.fromEntries(formdata.entries())


    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.main} >
        <label htmlFor='name'>Name
          <input type='text' name='name' className={styles.inputField} />
        </label>
        <label htmlFor='email'>Email
          <input type='email' name='email' className={styles.inputField} /></label>
        <label htmlFor='message'>Message
          <input type='text' name='message' className={styles.inputField} /></label>
        <input type='submit' />
      </form >
    </div>
  )
}

export default ContactPage