
    
    //we have to create a clone of this object
    
    var obj1 = {id:100, cname: 'A', age: 25};

    // Spread Operator
    var obj2 = {...obj1,mobile:'9009111222'};

    delete obj1.id;

    console.log(obj1.id+" "+obj1.cname+" "+obj1.age);
    console.log(obj2.id+" "+obj2.cname+" "+obj2.age+" "+obj2.mobile);