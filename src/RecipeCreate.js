import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
  const [content, setContent] = useState("")
 

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
  
  const [formData, setFormData] = useState({...initialFormState});
  
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  
  function handleSubmit(event) {
    event.preventDefault();
    createRecipe(formData);
    setFormData({...initialFormState})
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input 
                name="name"
                type="text"
                id="name"
                onChange={handleChange}
                value={formData.name}
                placeholder="Name"
                />
            </td>
            <td>
                <input 
                name="cuisine"
                type="text"
                id="cuisine"
                onChange={handleChange}
                value={formData.cuisine}
                placeholder="Cuisine"
                />
            </td>
            <td>
                 <input 
                name="photo"
                type="url"
                onChange={handleChange}
                value={formData.photo}                   
                id="photo"
                placeholder="URL"
                />
            </td>
            <td>
                <textarea 
                name="ingredients"
                type="text"
                id="ingredients"
                onChange={handleChange}
                value={formData.ingredients}                  
                placeholder="Ingredients"
                />
            </td>
            <td>
   <textarea 
                name="preparation"
                type="text"
                id="preparation"
                onChange={handleChange}
                value={formData.preparation}     
                placeholder="Preparation"
                />            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
