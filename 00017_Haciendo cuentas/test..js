describe("multiplicar", function() {
  it("deberia multiplicar 5 por 7 y deberia darnos 35", () => {
    assert.equal(multiplicar(5,7), 35)
  })
  it("deberia multiplicar 7 por 10 y deberia darnos 70", () => {
    assert.equal(multiplicar(7,10), 70)
  })
  it("deberia multiplicar 50 por 0.5 y deberia darnos 25", () => {
    assert.equal(multiplicar(50,0.5), 25)
  })
})

