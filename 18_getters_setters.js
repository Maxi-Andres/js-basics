class Rectangle{

    constructor(width, height){
        this.width = width;
        this.height = height;
    }

// los setters permiten setear las propiedades de un objeto/clase y te permite ponerles considicones

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        } else {
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        } else {
            console.error("Height must be a positive number");
        }
    }

// los getters son para obtener los datos

    get width(){
        return `${this._width.toFixed(1)}cm`;   //! el _ es para que los otros programadores vean que es una variable privada
    }

    get height(){
        return `${this._height.toFixed(1)}cm`;
    }

    get area(){
        return `${(this._width * this._height).toFixed(1)}cm`;
    }

}

const rectangle1 = new Rectangle(3, 4);

console.log(rectangle1.width);
console.log(rectangle1.height);
console.log(rectangle1.area);

