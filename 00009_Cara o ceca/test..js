describe("tirarMoneda", () => {
  it("tiene que devolver solo 0 o 1", () => {
    var result = tirarMoneda()
    assert(result === 0 || result === 1)
  })
})