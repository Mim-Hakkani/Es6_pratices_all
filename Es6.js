
// //var ,let ,const

// var name = 'mim';
// var name ='hakkani';
// console.log(name);

// /* let is always changeable */

// for(let i=0;i<=5;i++)
// {
  
//   console.log(name); // var is working in the blockscope
//   let p =i;
//   ;console.log(p+1);
// }

//const 

// const dept ='cse';
//  dept ='eee'; //not override in the const variable
// console.log(dept);
// //

/* Template String */

        // const anthem = `
        // amar sonar bangla ami tomai valobai,
        // chorodin tomar akask tomar batas amar prane...
        // bajai basii
        // amar sonar bangla ,,ami tomai valobasi`
        // console.log(anthem);

//template string using variables

            // const name ='Golam Hakani mim';
            // const age = 26;
            // const identity ='student';
            // const area =15;
            // const Mydetails = `
            // Hellow World
            // I am ${name} .
            // i am ${age} .
            // I am a ${identity} of pabna university of science technology..
            // Threre are ${area *2 } acors field in our university.`
            // console.log(Mydetails);


//default parameter of the function 

      // function add(num1,num2=5){
      //   const sum = num1 + num2;
      //   console.log(sum);

      // }
      // add(15);


          // function ManuserBonso(firstname,secondname,podobi='Chodury'){
          //  const fullname = firstname+' '+secondname+' '+podobi;
          //  return fullname;
          // }
          // const Fname = ManuserBonso('Mahamud','hasan');
          // console.log(Fname);


 /* Template string and default function */

          // function district(lichi,mango = 'Banana'){
          //  const all = `${lichi} ${mango}`;
          //  return all;
          // }
          // const one =' pabna';
          // const two ='Rajshahi';

          // const fullanme = district(one,two)
          // console.log(fullanme);

  /* Spread Operator */

      //normal way to find the aray element

            // const evennumber = [2,4,6,8,10,12,14,16,18,20];
            // for(let i=0;i<=9;i++)
            // {
            //   const num = evennumber[i];
            //   console.log(num);
            // }

      //See the Magic of the spread operator ...
  
          // const evennumber = [2,4,6,8,10,12,14,16,18,20];
          // console.log(...evennumber);

          // const bestfriend =['mim','jim','kibria','grabbani','ghakkani','farida'];
          // console.log(...bestfriend);

     //Destructing array

        //     const [a,b,c] = [10,15,25];
        //     console.log(a,b,c);

        //   //array strucring in hard method..
        //     const person = [

        //       {name:'mim',age:26,color:'black'},
        //       {name:'hakkani',age:34,color:'pink'},
        //       {name:'golam',age:23,color:'silver'},
        //       {name:'kibra',age:23,color:'white'}

        //       ];

    
        // console.log(person[0]);
        // console.log(person[1]);
        // console.log(person[2]);
        // console.log(person[3]);

        //         console.log('Golam Gakkani mim pratices');

        // const [person1,person2,person3,person4] = person;  // array destructing 

        // console.log(person1.name ,person1.color);
        // console.log(person2.name ,person2.color);
        // console.log(person3.name ,person3.color);
        // console.log(person4.name ,person4.color);


//object destructing method

        // const products = {
        
        //       shirts : 'black-and white',
        //       pants:'jens and formal',
        //       gengi:'red or yellow'
        // }

        // const {shirts,pants,gengi} = products;
        // console.log(shirts);
        // console.log(pants);
        // console.log(gengi);

//object destrucring part 2
        /*
            const products = {

              shirts : {name:'panda',price:500,color:'white'},
              pants : {name:'jens',price:1700,color:'neve-blue'},
              Tshirts:{name:'polo',price:350,color:'pink'},
              panjabi:{
                  
                dhoti :{name:'dhoti',price:1250,color:'white',type:'hindoo'},
                lungi:{name:'lungi',price:560,location:'pabna',type:'muslims',color:'black'}
                  
              },

            }

            //to find the name of dhoti and lungi values
            const {name,location,type}=products.panjabi.lungi;
            console.log(name,location,type);

            //to find the products color of pants

            const {color}=products.panjabi.dhoti
            console.log(color);

            */


/********** Arrow Play With Functions:  ************ */

        /*

              1.first write your type and declare a variables
              2.create a first braket and if necessary to get the parameter 
              3.after that create a calculation of the function
              4.finally return or console the output
              5.call the function and send the argument of the parameter

        */

        // //parameter two with arrow function
        // const add =(num1,num2)=>num1+num2;
        // const addition = add(5,10);
        // console.log(addition);

        // // three parameter is used to this functions 
        // const multiply = (a,b,c)=>a*b*c;
        // const mul = multiply(2,3,4);
        // console.log(mul);

        // // one parameter is used in this function

        // const onepara = x =>x*x;
        // const squre = onepara(5);
        // console.log(squre);

        // // function on the strin of the parameter

        // const student_name = x => x;
        // const name = student_name('mim');
        // console.log(name);


/* 

1.use in the arrow function 
2.map ,find , filter array */

 // map
    //map array is working to get the all number of the arraywise
const productrs = [
  {name : 'aaa',age:12,color:'red'},
  {name : 'bbb',age:22,color:'green'},
  {name : 'ccc',age:35,color:'pink'},
  {name : 'cyur',age:475,color:'pink'},
  {name : 'fsa',age:35,color:'red'}
] 

 const name = productrs.map(product =>product.name);
 console.log(name);

//filter the array
  // filter the number/thinkks is using in the same work is in the to match the condition

  const age = productrs.filter(product=>product.age<15);
  console.log(age);
  
  const color = productrs.filter(product=>product.color=='red');
  console.log(color);


  /* find the array with filter the array
    if it matched the items still it print the first matching items*/
    
    const ColorFind = productrs.find(samefind=>samefind.color=='pink');
    console.log(ColorFind);
    