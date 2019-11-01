document.addEventListener('DOMContentLoaded', function () {
let input_1 =document.querySelector('input')
let input_2 =input_1.nextElementSibling
let input_3 =document.querySelector('.dropdown-menu');
// let all_li = input_3.getElementsByTagName('li');

// Pojedyncze row 
let first_row= document.querySelector('.first_row')
let second_row= document.querySelector('.second_row')
let list_row = document.querySelector('.select_row')
let box_row_1= document.querySelector('.accounting')
let box_row_2=document.querySelector('.terminal')

// Elementy w li w row
let row_1 = document.querySelector('.product');
let row_1_2= document.querySelector('.total_product')
let row_2 = document.querySelector('.orders')
let row_2_2 = document.querySelector('.total_orders')
let package_type = document.querySelector('.Package')
let package_prize = document.querySelector('.prize_package')
let prize_accounting= document.querySelector('.prize_accounting')
let prize_terminal= document.querySelector('.prize_terminal')

// -----------ELEMENTY Z ROZWIJANEJ LISTY------
// wszyskie wartości 0-2
let options_types= document.querySelectorAll('.type_of_package');
let value_select = document.querySelector('.choose_package');

// -----Check box-------
let box_1 = document.querySelector('.box_1');
let box_2 = document.querySelector('.box_2');
let box_prize = document.querySelector('.prize_accounting');
let box_2_prize = document.querySelector('.prize_terminal');

let all_total_sum = 0;
let total_sum_1= 0;
let total_sum_2= 0;
let total_sum_3= 0;
let total_sum_4= 0;
let total_sum_5= 0;
let total_sum_6= 0;
console.log()

input_1.addEventListener('change',function(e){ 
      const value = 0.5;
      const inputValue = this.value;
      let total_row_1 = inputValue + ' * ' + '$' + value;
      row_1.innerText = total_row_1;
      row_1_2.innerText = "$ " + inputValue * value;
      first_row.style.visibility = 'visible';
      
});


input_2.addEventListener('change',function(e){
      const value = 0.25;
      const inputValue = this.value;
      let total_row_1 = inputValue + ' * ' + '$' + value;
      row_2.innerText = total_row_1
      row_2_2.innerText = "$ " + inputValue * value;
     
      second_row.style.visibility = 'visible';
});

      for(i=0; i < options_types.length; i++){
      value_select.addEventListener('change',function(e){
            const prices= [0 , 25 , 60];
          let input_Value = this[i].value
            if (value_select.value == '1'){
                  package_type.innerText = "Basic"
                  package_prize.innerText= "$"+prices[0]
                  
            } else if (value_select.value == '2'){
                  package_type.innerText = "Professional" 
                  package_prize.innerText = "$" + prices[1]

              } else if (value_select.value == "3"){
                  package_type.innerText = "Premium"
                  package_prize.innerText = "$" + prices[2];
              }
              list_row.style.visibility = 'visible';
      });   
};

const box_1_value = 35;

box_1.addEventListener('click',function(e){
      const boxValue = box_1_value
      prize_accounting.innerText = "$" + boxValue;
      if(box_1.checked){
            box_row_1.style.visibility = "visible"
      } else {
            box_row_1.style.visibility ='hidden'    
      }
           
});
const box_2_value = 5;
box_2.addEventListener('click',function(e){
      const box_2Value = box_2_value
      prize_terminal.innerText = "$" + box_2Value;
      if(box_2.checked){
            box_row_2.style.visibility = "visible"
      } else {
            box_row_2.style.visibility ='hidden'    
      }
});


let total = document.querySelector('.total_btn')
let total_sum = document.getElementById('sum_order')
let all_elements_sum = document.querySelectorAll('.total_sum')
let one_element_sum = document.querySelector('.total_product')
console.log(one_element_sum)

//       let sum = 0;
//       for(let i=0; i<all_elements_sum.length; i++){
//       all_elements_sum[i].addEventListener('change',function(e){
//             let totalValue = this[i].value
//             sum += totalValue
//             total_sum.innerText= "$" + sum;
//      });
    
// };

// one_element_sum.addEventListener('change',function(){
//       let test = this.value
//       total_sum.innerText= "$" + test;
// })

function getvalue (elements){
      const all_value = [];
      for(let i=0; i<all_elements_sum.length; i++){
            let elements_value = all_elements_sum[i].value;
            all_value.push(element_value)
            return all_value
      }
      

}
console.log(all_value)


});
