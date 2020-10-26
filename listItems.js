function listItems(items, pageActual, limitItems){
    let result = [];
    return result;
};

let totalPage = Math.ceil( 30 / 3);
let count = ( pageActual * limitItems ) - limitItems;
let delimiter = count + limitItems;

if(pageActual <= totalPage){
    for(let i=count; i<delimiter; i++){
    if(items[i] != null){
       result.push(items[i]);

    }
    count++;
  }

}
