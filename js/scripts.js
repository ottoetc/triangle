var triangle = function(leg1,leg2,leg3) {
  //triangle
  if ((leg1 + leg2 > leg3) && (leg1 +leg3 > leg2) && (leg2 + leg3 > leg1)) {
    //scalene
    if((leg1 !== leg2) && (leg2 !== leg3) && (leg1 !== leg3)) {
      return true;
    }
    //isosceles
    else if ((leg1 === leg2) || (leg2 === leg3) || (leg1 === leg3)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }

};
