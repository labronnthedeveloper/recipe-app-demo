import React, { useState } from "react";

export default function RecipeItem({recipe, index, handleDeleteRecipe}){
  return ( 
   <table>
        <tbody>
         <tr>
           <td name="name"><p>{recipe.name}</p></td>
           <td name="cuisine"><p>{recipe.cuisine}</p></td> 
            <td name="photo"><img src={recipe.photo}/></td>
        <td className="content_td"><p>{(recipe.ingredients)}</p></td>
            <td className="content_td"><p>{(recipe.preparation)}</p></td>
           <td><button onClick={handleDeleteRecipe} name="delete">Delete</button></td>
          </tr>
        </tbody>
      </table>
  )
  
}