import React, { useState } from 'react';
import IngredientList from './IngredientList';

import IngredientForm from './IngredientForm';
import Search from './Search';

const Ingredients = () => {
	const [userIngredients, setUserIngredients] = useState([]);
	const addIngredientHandler = ingredient => {
		setUserIngredients(prevIngredients => [
			...prevIngredients,
			{ id: Math.random().toString(), ...ingredient }
		]);
	};
	const removeIngredientsHandler = ingredientId => {
		setUserIngredients(prevIngredients =>
			prevIngredients.filter(ingredient => ingredientId !== ingredient.id)
		);
	};
	return (
		<div className='App'>
			<IngredientForm onAddIngredient={addIngredientHandler} />

			<section>
				<Search />
				<IngredientList
					ingredients={userIngredients}
					onRemoveItem={removeIngredientsHandler}
				/>
			</section>
		</div>
	);
};

export default Ingredients;
