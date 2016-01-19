var triangle = function(leg1,leg2,leg3) {
  if ((leg1 + leg2 > leg3) && (leg1 +leg3 > leg2) && (leg2 + leg3 > leg1)) {
    if((leg1 !== leg2) && (leg2 !== leg3) && (leg1 !== leg3)) {
      return true;
    }
  } else {
    return false;
  }

};
