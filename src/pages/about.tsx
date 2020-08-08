import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import styles from "./about.module.css"

interface UserProps {
  username: string
  avatar: string
  excerpt: string
}

function User({ avatar, username, excerpt }: UserProps) {
  return (
    <div className={styles.user}>
      <img src={avatar} className={styles.avatar} alt="" />
      <div className={styles.description}>
        <h2 className={styles.username}>{username}</h2>
        <p className={styles.excerpt}>{excerpt}</p>
      </div>
    </div>
  )
}

function About() {
  return (
    <Layout>
      <Header headerText="About CSS Modules" />
      <p>CSS Modules are cool</p>
      <User
        username="Jane Doe"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <User
        username="Bob Smith"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </Layout>
  )
}

export default About
