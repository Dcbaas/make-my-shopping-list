
class RecipeIngredient {
    constructor(index, name, amount, units) {
        this.index = index;
        this.name = name;
        this.amount = amount;
        this.units = units;
    }
    
    toString() {
        return `${this.amount} ${this.units} of ${this.name}`;
    }
}

export default RecipeIngredient;
