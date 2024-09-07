import React from 'react';
import {render , screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Hero from '../landing_page/home/Hero';

//TEst


describe('Hero Component',()=>{
    test('render hero image' ,()=>{
        render(<Hero/>);
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();

    });
});