describe("multiplicar", function() {
  it("debería multiplicar 5 por 7 y debería darnos 35", () => {
    assert.equal(multiplicar(5,7), 35)
  })
  it("debería multiplicar 7 por 10 y debería darnos 70", () => {
    assert.equal(multiplicar(7,10), 70)
  })
  it("debería multiplicar 50 por 0.5 y debería darnos 25", () => {
    assert.equal(multiplicar(50,0.5), 25)
  })
})

