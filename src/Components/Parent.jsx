import React from 'react'
import { Child } from './Child'

export const Parent = () => {
  return (
    <div>
        <h1>
        Hi I am Parent Component
        </h1>
        <Child values={"Hii"}/>
        <Child>
            <div>hi I am second child</div>
            <div>hi I am third child</div>
        </Child>
        </div>
  )
}

