const { Triangle, Square, Circle } = require("./shapes.js")

// Triangle test
describe("can build triangle svg", () => {
    test("user options reach constructor", () => {
        const triangle = new Triangle("JSA", "white", "blue", "triangle")
        expect(triangle.textContent).toBe("JSA")
        expect(triangle.textColor).toBe("white")
        expect(triangle.shapeFillColor).toBe("blue")
    })
    test("renders svgString", () => {
        const triangle = new Triangle("JSA", "white", "blue", "triangle")
        const svgString = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,10 185,185 10,185" fill="blue" /><text x="100" y="115" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">JSA</text></svg>`
    expect(triangle.render()).toBe(svgString)
    })
})

// Square test
describe("can build square svg", () => {
    test("user options reach constructor", () => {
        const square = new Square("JSA", "white", "blue", "square")
        expect(square.textContent).toBe("JSA")
        expect(square.textColor).toBe("white")
        expect(square.shapeFillColor).toBe("blue")
    })
    test("renders svgString", () => {
        const square = new Square("JSA", "white", "blue", "square")
        const svgString = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="150" height="150" fill="blue" /><text x="122.5" y="125" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">JSA</text></svg>`
    expect(square.render()).toBe(svgString)
    })
})

// Circle test
describe("can build circle svg", () => {
    test("user options reach constructor", () => {
        const circle = new Circle("JSA", "white", "blue", "circle")
        expect(circle.textContent).toBe("JSA")
        expect(circle.textColor).toBe("white")
        expect(circle.shapeFillColor).toBe("blue")
    })
    test("renders svgString", () => {
        const circle = new Circle("JSA", "white", "blue", "circle")
        const svgString = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="80" fill="blue" /><text x="100" y="100" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">JSA</text></svg>`
    expect(circle.render()).toBe(svgString)
    })
})