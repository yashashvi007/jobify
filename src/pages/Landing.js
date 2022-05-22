import React from 'react'


import main from '../assets/images/main.svg'

import Wrapper from '../assets/wrappers/LandingPage'

import { Logo } from '../components'

import {Link} from 'react-router-dom'

export default function Landing () {
  return (
    <Wrapper>
        <nav>
           <Logo/>
        </nav>
        <div className='container page' >
            <div className='info' >
                <h1>job <span>tracking</span> app </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet odio felis. Mauris ut risus in felis lobortis volutpat. Pellentesque euismod est eu felis condimentum, suscipit imperdiet ligula interdum. Maecenas at mauris eget purus lobortis elementum. Nunc scelerisque ante nec elit blandit, hendrerit lacinia ipsum molestie. Proin porttitor in tellus vel rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam pulvinar pellentesque augue, quis accumsan neque molestie at. Aliquam erat volutpat. Pellentesque nibh velit, congue eu luctus quis, gravida sit amet felis. Donec non vehicula dui. Duis vitae leo suscipit, iaculis urna eget, dignissim sapien. Ut maximus ligula ac tortor auctor, ut consectetur tortor dignissim. Fusce venenatis vehicula purus, porta fermentum velit pretium ut.
                </p>
                <Link to='/register' className='btn btn-hero' >Login/Register</Link>
            </div>
            <img src={main} alt='job hunt' className='img main-img' />
        </div>
    </Wrapper>
  )
}




