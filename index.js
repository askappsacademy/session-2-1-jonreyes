
/********************

In this exercise, we will be creating a function that takes in two numbers and returns the sum

Step 1. Create and declare a function,
that takes in two parameters

Step 2. In the function body, add both
numbers together and return the sum

Step 3. Call the function

For extra credit, create a conditional that executes a message if the sum is over 10 or less than 100 

********************/

// Your Solution:
function conditionalMessage(x){
  let m = '';
  if(x>10){
    m = "Sum>10";
  } else if(x<100){
    m = "Sum<100";
  }
  console.log(m)
  return m;
}
function sum(a,b){
  let sum = a+b;
  console.log(sum);
  return sum;
}

let sumBtn = () => {
  let a = 0;
  a = parseInt(document.getElementById('a').value);
  let b = 0;
  b = parseInt(document.getElementById('b').value);
  c = sum(a,b);
  document.getElementById('c').innerText += c.toString();
  document.getElementById('m').innerText += conditionalMessage(c);
}

document.getElementById('sum').onclick = sumBtn;


