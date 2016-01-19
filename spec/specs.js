describe('triangle', function() {
//check if three legs equal triangle
  it("is false when any leg is greater than or equal to the sum of the other two legs", function(){
    expect(triangle(2,3,5)).to.equal(false);
  });
//check if scalene
  it("is true when no sides are equal", function(){
    expect(triangle(5,6,8)).to.equal(true);
  });
//check if isosceles
  it("is true when two sides are equal", function(){
    expect(triangle(5,5,7)).to.equal(true);
  });

//check if equilateral

});
