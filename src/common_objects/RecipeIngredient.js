
/**
 * The RecipeIngredient Class is a unified class that tracks all the data for individual Ingredients
 * in the Recipe Screen. It tracks its index in the array, its name, its amount, and its units.
 * The class only has two methods of the constructor and a toString method for displaying it in a
 * list.
 * 
 * @author David Baas
 * @version 1.0.1 - 8/12/2018
 * @since 1.0 8/7/2018
 */
class RecipeIngredient {

    /**
     * The constructor initializes all variables. The key instance variable is used to provide a
     * key item for the list component in the Recipe Screen. The key must be a string. I don't know
     * why. 
     * 
     * @param {number} index The index of where this RecipeIngredient is in the array.
     * @param {string} name The name of this RecipeIngredint.
     * @param {number} amount The amount of this RecipeIngredint.
     * @param {number} units the units for this RecipeIngredint.
     */
    constructor(index, name, amount, units) {
        this.key = `${index}`;
        this.name = name;
        this.amount = amount;
        this.units = units;
    }
    
    /**
     * The toString method returns a formatted string with information about this RecipeIngredint.
     * This will be used in the list on the Recipe screen.
     * 
     * @returns A formatted string for this RecipeIngredint.
     */
    toString() {
        return `${this.amount} ${this.units} of ${this.name}`;
    }
}

export default RecipeIngredient;
