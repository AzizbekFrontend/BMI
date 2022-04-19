

// const ism = document.querySelector('#ism')
// const vazn = document.querySelector('#vazn')
// const boy = document.querySelector('#boy')
// const btn = document.querySelector('#btn')
// let hisob 
// let vaznValue = vazn.textContent
// let boyValue = boy.textContent


// btn.addEventListener(('click'), ()=> {
//      hisob = vaznValue / (boyValue * 2);
//     console.log(hisob);

// })
// btn()

// function calculateBmi(ism, ogirlik, boyi){
//     let hisob = ogirlik / (boyi * 2);
//     console.log(ism + " s Bmi is " + bmi);
// }
// // console.log(hisob);
// // bmi()
// calculateBmi()

// let vazn = 85
// let boy = 1.85
// let bmi = vazn / (boy * 2)
// console.log(bmi);




const height = document.querySelector('#height')
const weight  = document.querySelector('#weight')
const calculate = document.querySelector('#calculate')
const yourBMI = document.querySelector('#yourBMI')

calculate.addEventListener('click', ()=>{
    //BMI = Body mass index
    // m = mass means weight (kg)
    // h = height (cm)
    // formula = B = m/h*2

    if(height.value != "" && weight.value != ""){
        let  bmiValue = weight.value / (height.value  * height.value) * 10000;
        yourBMI.innerHTML = `your BMI is : <span> ${bmiValue.toFixed(2)} </span>`
    }
    else{
        yourBMI.innerHTML = 'Please Enter Correct Value'
    }
})