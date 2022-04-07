import React from 'react'
import { homeObjOne, homeObjThree, homeObjTwo } from './Data';
import Info from '../../Info/Info';
import Card from '../Cards/Card';

const Home = () => {
  return (
    <>
        <Info {...homeObjOne} />
        <Info {...homeObjTwo} />
        <Info {...homeObjThree} />
    </>
  )
}

export default Home