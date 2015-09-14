describe("createContact", function(){
  it("will create a contact", function() {
    var testContact = {firstName: "Charlize", lastName: "Theron"};
    expect(testContact.firstName).to.equal("Charlize");
    expect(testContact.lastName).to.equal("Theron");
  });
})
