describe("perimetro", function() {
  it(" de radio 4 nos deberia devolver 25.12", () => {
    assert.equal(perimetro(4), 25.12)
  })
})
describe("area", function() {
  it("de radio 4 deberia devolver 50.24", () => {
    assert.equal(area(4), 50.24)
  })
})

describe("perimetro", function() {
  it(" de radio 1 nos deberia devolver 6.28", () => {
    assert.equal(perimetro(1), 6.28)
  })
})
describe("area", function() {
  it("de radio 1 deberia devolver 3.14", () => {
    assert.equal(area(1), 3.14)
  })
})

describe("perimetro", function() {
  it(" de radio 50 nos deberia devolver 314", () => {
    assert.equal(perimetro(50), 314)
  })
})
describe("area", function() {
  it("de radio 50 deberia devolver 7850", () => {
    assert.equal(area(50), 7850)
  })
})