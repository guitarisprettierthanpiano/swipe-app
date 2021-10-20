import * as React from 'react';
import * as TinderCard from 'react-tinder-card';
import { useState } from 'react';

const Home: React.FC = () => {
    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const exArray = ['111', '222', '333', '444', '555']
    const [num, setNum] = useState(1)


    function onCardLeftScreen(myIdentifier){
        console.log(myIdentifier + ' left the screen') 

        let firstEle = document.getElementById(`${num}`.toString())
        firstEle.style.display="none"

        console.log(num)
        AddOne()
        console.log(num)

        let secondEle = document.getElementById(`${num}`.toString())
        secondEle.style.display="inline";
    }
    function AddOne(){
        setNum(num => num + 1)
        let secondEle = document.getElementById(`${num}`.toString())
        secondEle.style.display = "inline";
        console.log(num)
    }

    return(
    <>
        <div className='bgc'>
        </div>

        <div className='tc'
        id='1'>
        <TinderCard 
        style={{display:'block'}}
        onSwipe={onSwipe} 
        onCardLeftScreen={() => onCardLeftScreen('fooBar')} 
        preventSwipe={['up', 'down']}>
            <div>
                {exArray[`${num}`]}
            </div>
            <h1 style={{display:'none'}}className='lol'>LOLk</h1>
        </TinderCard>
        </div>

        <div className='tc'
        id='2'
        style={{display:'none'}}>
            <TinderCard 
            onSwipe={onSwipe} 
            onCardLeftScreen={() => onCardLeftScreen('fooBar')} 
            preventSwipe={['up', 'down']}>
                <div>
                    {exArray[`${num}`]}
                </div>
                <h1>LOLo</h1>
            </TinderCard>
        </div>

        <div className='tc'
        id='3'
        style={{display:'none'}}>
            <TinderCard 
            onSwipe={onSwipe} 
            onCardLeftScreen={() => onCardLeftScreen('fooBar')} 
            preventSwipe={['up', 'down']}>
                <div>
                    {exArray[`${num}`]}
                </div>
                <h1>LOLl</h1>
            </TinderCard>
        </div>

        <div className='tc'
        id='4'
        style={{display:'none'}}>
            <TinderCard 
            onSwipe={onSwipe} 
            onCardLeftScreen={() => onCardLeftScreen('fooBar')} 
            preventSwipe={['up', 'down']}>
                <div>
                    {exArray[`${num}`]}
                </div>
                <h1>LOLllll</h1>
            </TinderCard>
        </div>
    </>
    )
}

export default Home;