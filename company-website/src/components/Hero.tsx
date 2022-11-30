import React, { FC } from 'react'
import { useGlobalContext } from '../context'

import phoneImg from '../images/phone.svg'

const Hero: FC = () => {
  const { closeSubmenu } = useGlobalContext()
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className='hero-info'>
          <h1>Lorem ipsum dolor sit amet consect</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, adipisci sed, corporis rem error excepturi deserunt tempora possimus necessitatibus delectus ipsa. Saepe amet molestiae minus!
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt="phone" />
        </article>
      </div>
    </section>
  )
}

export default Hero
