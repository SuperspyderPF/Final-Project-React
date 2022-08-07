import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Meet the team!</h1>
      <p></p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://www.springboard.com/blog/wp-content/uploads/2021/03/how-to-become-a-financial-analyst.jpg'
              text='My name is Paul and ive been a Stock Analyst for over 12 years.'
              contact='Contact me@'
              label='Paul Felder'
              contact='Email: itapcharles@gmail.com'
              path='/aboutus'
            />
             <CardItem
              src='https://media-exp1.licdn.com/dms/image/C4E03AQFdlFhojAFDpA/profile-displayphoto-shrink_800_800/0/1657395144344?e=1663804800&v=beta&t=zwGzc1qPQX0mRaAp-pl8dYeppcn4Kta8LrFPTUXDkV4'
              text='My name is Dan Asherov im a Day Trader who Turned Into a Full Stack Developer. My Passion is to teach, I am here to help'
              label='Dan Asherov'
              contact='Email: djasherov@gmail.com'
              path='/aboutus'
            />
          </ul>
          <ul className='cards__items'>
            
            
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
