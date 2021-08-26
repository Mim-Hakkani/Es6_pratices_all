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
৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 
*/