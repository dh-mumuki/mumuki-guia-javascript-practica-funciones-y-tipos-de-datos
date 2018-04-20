describe("longitudNombreCompleto", () => {
  it("Con el nombre Juan Pérez deberia tener una longitud de 10", () => {
    assert.equal(longitudNombreCompleto("Juan", "Pérez"), 10)
  })
  it("Con el nombre María de las Nieves deberia tener una longitud de 19", () => {
    assert.equal(longitudNombreCompleto("María", "de las Nieves"), 19)
  })
  it("Con el nombre Jet Li deberia tener una longitud de 6", () => {
    assert.equal(longitudNombreCompleto("Jet", "Li"), 6)
  })
})