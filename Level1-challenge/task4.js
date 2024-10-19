function square(num){
   
    for(let i = 0; i < num; i++) {
        let row = '';

        for(let j = 0;j < num; j++) {
            row += '#';
        }
        console.log(row);
    }

}

square(4);
module.exports = { square };
