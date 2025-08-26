import React from 'react'
import { Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {

  //authStatus to see status true or false
  const authStatus = useSelector((state) => state.auth.status)  //see authSLice

  return (
    <div>Header</div>
  )
}

export default Header  