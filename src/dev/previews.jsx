import React from 'react';
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import { PaletteTree } from './palette';
import MealItemForm from "../components/Meals/MealItem/MealItemForm";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/MealItemForm">
        <MealItemForm/>
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;