import React from 'react'
import MainNavigation from '../components/mainnavigation/MainNavigation'
import classes from './Error.module.css'

const Error = () => {
  return (
    <>
     <MainNavigation/>
     <main className={classes.content}>
     <h1>An Error occured</h1> 
     <p>Could not find this Page!</p>
     </main>
    </>
  )
}

export default Error
