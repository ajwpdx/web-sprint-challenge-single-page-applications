import React from "react";

const Form = () => {

    const onSubmit = evt => {
        evt.preventDefault()
        // submit()
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <label>Name:&nbsp;
          <input
                    value="{values.username}"
                    // onChange="{onInputChange}"
                    name='name'
                    type='text'
                />
            </label>

            <label>Size:&nbsp;
          <select
                    // onChange={onInputChange}
                    value="{values.role}"
                    name='size'
                >
                    <option value=''>- Select an option -</option>
                    <option value='Extra Large'>XL</option>
                    <option value='Large'>Large</option>
                    <option value='Medium'>Medium</option>
                </select>
            </label>
            <div className='toppings'>
        <h4>Toppings</h4>
        <label>Pepperoni
          <input
            type="checkbox"
            name='pepperoni'
            checked='false'
            // onChange={onCheckboxChange}
          />
        </label>

        <label>Olives
          <input
            type="checkbox"
            name='olives'
            // checked={values.hobbies.reading === true}
            // onChange={onCheckboxChange}
          />
        </label>

        <label>Pineapple
          <input
            type="checkbox"
            name='pineapple'
            // checked={values.hobbies.coding === true}
            // onChange={onCheckboxChange}
          />
        </label>

        <label>Bacon
          <input
            type="checkbox"
            name='bacon'
            // checked={values.hobbies.coding === true}
            // onChange={onCheckboxChange}
          />
        </label>
      </div>

      <label>Special Instructions&nbsp;
          <input 
                    value="{values.username}"
                    // onChange="{onInputChange}"
                    name='instructions'
                    type='text'
                />
            </label>

        </form>
    );
};
export default Form;