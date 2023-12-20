// Create overarching class "shapes"
class Shape {
    constructor(textContent, textColor, shapeFillColor) {
        this.textContent = textContent;
        this.textColor = textColor;
        this.shapeFillColor = shapeFillColor;
    }
}

// Create a class for each Shape using super

// Triangle
class Triangle extends Shape {
    constructor(textContent, textColor, shapeFillColor) {
        super(textContent, textColor, shapeFillColor);
    }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,10 185,185 10,185" fill="${this.shapeFillColor}" /><text x="100" y="115" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="20">${this.textContent}</text></svg>`;
    }
}

// Square
class Square extends Shape {
    constructor(textContent, textColor, shapeFillColor) {
        super(textContent, textColor, shapeFillColor);
    }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="150" height="150" fill="${this.shapeFillColor}" /><text x="122.5" y="125" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="20">${this.textContent}</text></svg>`;
    }
}

// Circle
class Circle extends Shape {
    constructor(textContent, textColor, shapeFillColor) {
        super(textContent, textColor, shapeFillColor);
    }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="80" fill="${this.shapeFillColor}" /><text x="100" y="100" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="20">${this.textContent}</text></svg>`;
    }
}

module.exports = { Triangle, Square, Circle }