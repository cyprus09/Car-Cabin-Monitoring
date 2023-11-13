"use client"

import * as React from "react"

export function PageTopper() {

  return (
<div className="w-full h-full display-flex justify-center align-center">
    <div className="overlay">
    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="num"/>
        <div className="overlay__inner mx-10">
            <h1 className="overlay__title">Hi Everyone!👋🏼</h1>
            <h2 className="overlay__title">We are Group-EE07 👨🏼‍💻</h2>
            <p className="overlay__description">
            We are a bunch of highly motivated individuals who happened to be in
            the same group and hope to blow your mind from what we have been
            working over the past 3 months. Scroll down to discover our work
            further.
            </p>
            <p>
            <strong>Trust us when we say, we like to get work done.👍🏼</strong>
            </p>
        </div>
    </div>
    </div>
  )
}
