document.addEventListener('DOMContentLoaded', function () {
            
            const dropdown_btn = document.querySelector('.mydropdown');
            const menu_off = document.querySelector('.dropdown_hidden');
            const values = menu_off.children
            const input_text = dropdown_btn.firstChild
            let dropdown_value = "";      
                        
            let input_1 =document.querySelector('input')
            let input_2 =input_1.nextElementSibling
            let input_3 =document.querySelector('.dropdown-menu');
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

            
            // -----Check box-------
            let box_1 = document.querySelector('.box_1');
            let box_2 = document.querySelector('.box_2');
            let box_prize = document.querySelector('.prize_accounting');
            let box_2_prize = document.querySelector('.prize_terminal');

            // -----------Total-------------
            let total_sum = document.getElementById('sum_order')
            let all_total_sum = 0;
            let total_sum_1= 0;
            let total_sum_2= 0;
            let total_sum_3= 0;
            let total_sum_4= 0;
            let total_sum_5= 0;

            input_1.addEventListener('change',function(e){ 
                  const value = 0.5;
                  const inputValue = this.value;
                  let total_row_1 = inputValue + ' * ' + '$' + value;
                  row_1.innerText = total_row_1;
                  row_1_2.innerText = "$ " + inputValue * value;
                  first_row.style.visibility = 'visible';
                  total_sum_1 =  inputValue * value;
                  all_total_sum = total_sum_1 + total_sum_2 + total_sum_3 + total_sum_4 + total_sum_5
                  total_sum.innerText= "$" + all_total_sum;

            });

            input_2.addEventListener('change',function(e){
                  const value = 0.25;
                  const inputValue = this.value;
                  let total_row_1 = inputValue + ' * ' + '$' + value;
                  row_2.innerText = total_row_1
                  row_2_2.innerText = "$ " + inputValue * value;
                  second_row.style.visibility = 'visible';
                  total_sum_2 =  + inputValue * value;
                  all_total_sum = total_sum_1 + total_sum_2 + total_sum_3 + total_sum_4 + total_sum_5
                  total_sum.innerText = "$" + all_total_sum;
                  
            });
            
            const arrow_up = document.querySelector('.arrow_dropdown')
            dropdown_btn.addEventListener('click', function (e) {
                  menu_off.style.display = "block"
                  arrow_up.classList.add("transform_class")
                  for(let i = 0; i<values.length; i++){
                        let dropdown_value = 0;

                      values[i].addEventListener("click", function(e){
                              value = values[i]
                              input_text.innerText = value.innerText
                              menu_off.style.display = "none"
                              arrow_up.classList.remove("transform_class")
                              dropdown_value = input_text.innerText

                              const prices= [0 , 25 , 60];
                        if (dropdown_value == "Basic"){
                              package_type.innerText = "Basic"
                              package_prize.innerText= "$"+prices[0]
                              total_sum_3 =prices[0]
                  
                              } else if (input_text.innerText== "Professional" ){
                                    package_type.innerText = "Professional" 
                                    package_prize.innerText = "$" + prices[1]
                                    total_sum_3 = prices[1]
                  
                              } else if (input_text.innerText == "Premium"){
                                    package_type.innerText = "Premium"
                                    package_prize.innerText = "$" + prices[2];
                                    total_sum_3 = prices[2]
                              }
                              list_row.style.visibility = 'visible';
                              all_total_sum = total_sum_1 + total_sum_2 + total_sum_3 + total_sum_4 + total_sum_5
                              total_sum.innerText = "$" + all_total_sum;
                        })         
                  }        
            });

            const box_1_value = 35;
            const box_none = 0;
            box_1.addEventListener('click',function(e){
                  const boxValue = box_1_value
                  prize_accounting.innerText = "$" + boxValue;
                  if(box_1.checked){
                        box_row_1.style.visibility = "visible"
                        total_sum_4 = boxValue
                  } else {
                        box_row_1.style.visibility ='hidden'
                        total_sum_4 = box_none;       
                  }
                  all_total_sum = total_sum_1 + total_sum_2 + total_sum_3 + total_sum_4 + total_sum_5
                  total_sum.innerText = "$" + all_total_sum;
                  
                  });
                  const box_2_value = 5;
                  box_2.addEventListener('click',function(e){
                        const box_2Value = box_2_value
                        prize_terminal.innerText = "$" + box_2Value;
                        if(box_2.checked){
                              box_row_2.style.visibility = "visible"
                              total_sum_5 = box_2Value;
                        } else {
                              box_row_2.style.visibility ='hidden'  
                              total_sum_5 = box_none;  
                        }
                        
                        all_total_sum = total_sum_1 + total_sum_2 + total_sum_3 + total_sum_4 + total_sum_5
                        total_sum.innerText = "$" + all_total_sum;
                  
                  });

});
