describe("mitad", () => {
  it("deberia dividir 6 a la mitad para darnos 3", () => {
    assert.equal(mitad(6), 3)
  })
  it("deberia dividir 100 a la mitad para darnos 50", () => {
    assert.equal(mitad(100), 50)
  })
  it("deberia dividir 1 a la mitad para darnos 0.5", () => {
    assert.equal(mitad(1), 0.5)
  })
})