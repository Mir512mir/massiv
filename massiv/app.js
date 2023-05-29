let typeShopOne=prompt("Kakoj tip towarow budem prodawat?","Frukty");
let typeShopTwo=prompt("Kakoj tip towarow budem prodawat?","Owosczi");
let typeShopThree=prompt("Kakoj tip towarow budem prodawat?","Napitki");

let mainList=[];
mainList.push(typeShopOne,typeShopTwo,typeShopThree);
alert(mainList)
console.log(mainList);

mainList.forEach(function(elem,index,array){if (index==2)
       
       { mainList[index]="Suchofrukty";
    }
    console.log(index);})