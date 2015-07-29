function rgb (r, g, b) {

  function hex(x){
    if(x <= 0){x=0;}
    if(x >= 255){x=255;}
    x = ("0" + x.toString(16).toUpperCase()).slice(-2);
    return x;
  }

  return hex(r) + hex(g) + hex(b);
}
