describe("mitad", () => {
  it("debería dividir 6 a la mitad para darnos 3", () => {
    assert.equal(mitad(6), 3)
  })
  it("debería dividir 100 a la mitad para darnos 50", () => {
    assert.equal(mitad(100), 50)
  })
  it("debería dividir 1 a la mitad para darnos 0.5", () => {
    assert.equal(mitad(1), 0.5)
  })
})