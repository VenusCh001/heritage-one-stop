import React from 'react'
import { ModeToggle } from '../toggle'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'



export default function Cards() {
  return (
    //style={{"width: 18rem"}
//     <div className="card" >
//   <img src="https://source.unsplash.com/random/200×200/?biodiversity" className="card-img-top d-block w-[30vh] h-[10vh] m-[15vh]" alt="..."></img>
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <p className="card-text  d-block m-[15vh]">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" className="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
<div className="card">
  <img src="https://source.unsplash.com/random/200×200/?biodiversity" alt="Avatar" className="d-block w-[30vh] h-[30vh] m-[15vh]"></img>
  <div className="container d-block  m-[15vh] p-[0.2%] ">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
  </div>
</div>
  )
}
