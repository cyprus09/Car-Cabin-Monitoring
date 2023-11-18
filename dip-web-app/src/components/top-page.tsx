"use client"
import GroupPicture from '../images/GroupPicture.jpeg';
import Image from 'next/image';

import * as React from "react"

export function PageTopper() {

  return (
<div className="w-full h-full display-flex justify-center align-center">
    <div className="overlay">
    <Image src={GroupPicture} alt="num"/>
        <div className="overlay__inner mx-10">
            <h1 className="overlay__title">Hi Everyone!👋🏼</h1>
            <h2 className="overlay__title">We are Group-EE07 👨🏼‍💻</h2>
            <p className="overlay__description">
            We are a group of enthusiastic individuals, brought together by shared motivation. We aspire to captivate your interest with the results of our collaborative efforts over the past three months. Continue scrolling to delve deeper into our accomplishments.
            </p>
            <p>
            <strong>Rest assured, productivity is our forte.👍🏼</strong>
            </p>
        </div>
    </div>
    </div>
  )
}
