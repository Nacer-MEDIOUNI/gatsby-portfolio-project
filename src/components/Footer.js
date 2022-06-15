import React from "react"

const Footer = () => {
  var today = new Date()
  var thisYear = today.getFullYear()

  return (
    <footer>
      <p>Made by Nacer &copy; {thisYear} All rights reserved.</p>
    </footer>
  )
}

export default Footer
