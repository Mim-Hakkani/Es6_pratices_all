/*
১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।
*/

// const pabna = 'pagla garod';
// let rajshahi = 'padma garden';
// if(rajshahi=='padma garden'){
//     //value is redirect 
//     let rajshahi= 'Shadid_Kamrizzman_zoo';
//     console.log(rajshahi);
//     console.log(pabna);
// }

/*
২.  টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো।
     সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও।
        একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। 
            এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 
*/

// const myname = 'Golam Rabbani';
// const Location = 'jamira,puthia,Rajshahi'

// const inrtome =`
// Name: ${myname}
// Father name: Abdul Karim
// Mother Name: Farida Yesmin
// Location :${Location}
//  `
//  console.log(inrtome);

/*
২.1  টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো।
      একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 
*/

// const monitor ='Asus 21.8';
// const ram = '32gb';

// const computer ={

//     Monitor :`${monitor}`,
//     Ram   : `${ram}`,
//     motherboard:'Intel Gigabite',
//     Ups :'normal Brand',
//     mouse:'Havic Brand'

// };

// const{Ram,motherboard,Ups,mouse} =computer;
// console.log(`
// Monitor : ${monitor}
// Ram is : ${Ram},
// Motherboared : ${motherboard}
// Ups :${Ups}
// mouse : ${mouse}`);

/*
৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 

*/

// const inputDiv = (number)=>number/5;
// const result = inputDiv(12);
// console.log('The Required Output of Dividion is : ',result);

/*
৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 
*/

//  const operation = (num1,num2)=>{
//      let addPara1 =num1+2;
//      let addpara2   =num2+2;
//      const multi = addPara1*addpara2;
//      return multi; 
//  };

//  console.log(operation(10,12));    

/*
৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। */

    // const miltiple = (a,b,c)=>a*b*c;
    // const result = miltiple(4,3,4);
    // console.log('Total result is : ',result);

/*
৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে 5 যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 
*/


//  const operation = (num1,num2)=>{
//      let addPara1 =num1+5;
//      let addpara2   =num2+5;
//      const multi = addPara1*addpara2;
//      return multi; 
//  };

//  console.log(operation(10,5)); 

/*
৪. [হোম ওয়ার্ক] একটু গুগলে সার্চ দাও: javascript function declaration vs arrow function তারপর কয়েকটা  আর্টিকেল পড়ে বুঝার চেষ্টা করো। 
*/

//normal function declare
    // function amarnam(one,two){
    //     const nam =`${one} ${two}`;
    //     return nam;
    // }
    // console.log(amarnam('Golam','Hakkani'));

//Arrow function
    // const amarnam =(three,four)=>`${three} ${four}`;
    // console.log(amarnam('Golam','Kibra'));

    
/*
৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 
*/

    // const numbers =[1,2,3,4,5,6,7,8,9];
    // const output = numbers.map(number =>number*number);
    // console.log(output);

/*
৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 
*/
    // const numbers =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    // const odd =numbers.filter(oddNumber=>oddNumber%2==1);
    // console.log(odd);

/*
৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু জোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 
*/
    // const numbers =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    // const Even =numbers.filter(EvenNumber=>EvenNumber%2!=1);
    // console.log(Even);

/*
৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 
*/

// const phones = [
//     {name:'Lava',price:6200,color:'black'},
//     {name:'Vivo',price:24000,color:'sliver'},
//     {name:'samsang',price:5000,color:'white'},
//     {name:'nokia',price:2400,color:'white'},
//     {name:'kisgfiser',price:5000,color:'green'},
//     {name:'nokia-M20',price:4500,color:'white'},
// ]

// const price = phones.filter(phonePrice =>phonePrice.price==5000);
// console.log(price);

/*
৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 
********************************************************************************************
map : 
  1.map is working in the array
  2.using map gets every item idevidullay
  3.easy to calculate and less line of code ..
  4.arrow function is used
  5.not use in for of loop every wirk is done by arrow function

filter:
  1.Its same as array map function
  2.but its use in condition in map we see that each and every item that i found but using condition in filter i get this item that i want 
  3.if no item cant match then its send empty string
  4.finally matchng item can send of array

find:
    1.same as filter funtion
    2.if condition matched then its puts one matched item if more then matched...
    3.finally gets the elements of the item ..diference of map,filter function

Forach:
        1.Same work as map function ...
        2.if map arraw function if i want to return value but using foreach can not return value



*/

/*
৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 
*/

        // const phones = {
        //     name:'Lava',
        //     price:6200,
        //     color: {
        //         nice:'red',
        //         awesome : 'silver',
        //         beautiful:'white',
        //         bad:'black'
        //     }
        // }

        // const{name,price,color} =phones;
        // console.log(name);

        // const{bad} =phones.color
        // console.log(bad);


/*
৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 
*/

    // const Bestfriends =['Shakil','Masum','Bayazed','Usaid'];
    // const[first,second,third,fourth]=Bestfriends;
    // console.log(fourth);

/*
১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 
*/
        // const defaultParameter = (num,num2,num3=7) =>{
        //     const add =num+num2+num3;
        //     return add; 
        // }
        // const finalValue =  defaultParameter(4,6); //third parameter of default
        // console.log(finalValue);


/*
১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )
*/

//   const phones = {
//             name:'Lava',
//             price:6200,
//             color: {
//                 nice:'red',
//                 awesome : 'silver',
//                 beautiful:'white',
//                 bad:{
//                     name1:'golam Hakkni mim',
//                     name2:'Golam kibria Jim',
//                     name3:'Golam Rabbani',
//                     name4:[4,6,7,8,9]
//                   }
//               }
//             }

//     const{name4} = phones.color.bad;
//     const[a,b,c,d,e]=name4
//     console.log(e);

/*
 ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো। 
 
 1.its works when some value is not exits which i find to see
 2.then use optional chaning that no error is occure

*/


const phones = {
    name:'Lava',
    price:6200,
    color: {
        nice:'red',
        awesome : 'silver',
        beautiful:'white',
        bad:{
            name1:'golam Hakkni mim',
            name2:'Golam kibria Jim',
            name3:'Golam Rabbani',
            name4:[4,6,7,8,9]
          }
      }
    }

const{good} =phones.color.bad;
console.log(good);