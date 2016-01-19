var kind;
var triangle = function(leg1,leg2,leg3) {
  //triangle
  if ((leg1 + leg2 > leg3) && (leg1 +leg3 > leg2) && (leg2 + leg3 > leg1)) {
    //scalene
    if((leg1 !== leg2) && (leg2 !== leg3) && (leg1 !== leg3)) {
      kind = " scalene";
      return true;
    }
    //isosceles
    else if (((leg1 === leg2) && (leg1 !== leg3)) || ((leg2 === leg3) && (leg1 !== leg2)) || ((leg1 === leg3) && (leg2 !== leg3))) {
      kind = "n isosceles";
      return true;
    }
    //equilateral
    else if ((leg1 === leg2) && (leg1 === leg3)) {
      kind = "n equilateral";
      return true;
    }
  } else {
    return false;
  }
};
$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var leg1 = parseInt($("input#leg1").val());
    var leg2 = parseInt($("input#leg2").val());
    var leg3 = parseInt($("input#leg3").val());
    var result = triangle(leg1, leg2, leg3);
    // var kind = "";
    if(!result) {
      $(".kind").text(" not a triangle");
    } else {
      $(".kind").text(" a" + kind + " triangle");
    }
    $("#result").show();
    event.preventDefault();
  });
});
