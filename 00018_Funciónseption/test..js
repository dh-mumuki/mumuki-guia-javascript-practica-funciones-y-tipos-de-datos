describe("esMagico", function() {
  it("deberia tomar 5 y devolvernos 12", () => {
    assert.equal(esMagico(5), 12)
  })
  it("deberia tomar 0 y devolvernos 2", () => {
    assert.equal(esMagico(0), 2)
  })
  it("deberia tomar -4 y devolvernos -6", () => {
    assert.equal(esMagico(-4), -6)
  })
})