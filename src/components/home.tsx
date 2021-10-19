import * as React from 'react';
import * as TinderCard from 'react-tinder-card';
import { useState } from 'react';

const Home: React.FC = () => {

    const exArray = ['111', '222', '333', '444', '555']
    const [num, setNum] = useState(0)

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
        setNum(num => num + 1)
        let tc2: HTMLElement = document.querySelector('#card2')
        tc2.style.display = "inline";
    }

    const onCardLeftScreenT = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
        setNum(num => num + 1)
        let tc3: HTMLElement = document.querySelector('#card3')
        tc3.style.display = "inline";
    }


    return(
    <>
        <div className='bgc'>
            
        </div>

        <div className='tc'>
        <TinderCard 
         onSwipe={onSwipe} 
         onCardLeftScreen={() => onCardLeftScreen('fooBar')} 
         preventSwipe={['up', 'down']}>
             <div>
                {exArray[`${num}`]}
             </div>
             <h1 style={{display:'none'}}className='lol'>LOL</h1>
        </TinderCard>
        </div>

        <div className='tc'
        id='card2'
        style={{display:'none'}}>
            <TinderCard 
            onSwipe={onSwipe} 
            onCardLeftScreen={() => onCardLeftScreenT('fooBar')} 
            preventSwipe={['up', 'down']}>
                <div>
                    {exArray[`${num}`]}
                </div>
                <h1>LOL</h1>
            </TinderCard>
        </div>

        <div className='tc'
        id='card2'
        style={{display:'none'}}>
            <TinderCard 
            onSwipe={onSwipe} 
            onCardLeftScreen={() => onCardLeftScreenT('fooBar')} 
            preventSwipe={['up', 'down']}>
                <div>
                    {exArray[`${num}`]}
                </div>
                <h1>LOL</h1>
            </TinderCard>
        </div>

    </>
    )
}

export default Home;