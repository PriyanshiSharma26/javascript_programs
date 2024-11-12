function f1(a,b,callbackFirst, callbackSecond){
    var result = a + b;
    console.log("Addition : "+result);
    callbackFirst(result);
    callbackSecond(result);
  }
  

  f1(-20,11,function(x){
     x % 2 ? console.log("ODD") : console.log("EVEN");
  }, function(x){
      if(x > 0)
        console.log("Positive Result");
      else if(x < 0)
            console.log("Negative Result");
           else
            console.log("Neutral Result");   
  });