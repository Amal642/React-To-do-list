import React from 'react'

export default function Footer() {
    let footerstyle={
        position:"relative",
        top:"70vh",
        width:"100%"
    }
  return (
    <footer className='bg-dark text-light' style={footerstyle}>
        <p className="text-center">
      Copyright &copy; Todoslist.com</p>
    </footer>
  )
}
