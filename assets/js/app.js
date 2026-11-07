const cl=console.log;
const box=document.getElementById('box');
const btnHide=document.getElementById('btnHide');
const btnShow=document.getElementById('btnShow');
const btnToggle=document.getElementById('btnToggle');
const custombtn=document.getElementById('custombtn');
const Flagbut=document.getElementById('Flagbut')

box.style.width='400px';
box.style.height='400px';
box.style.margin='auto';
box.style.backgroundColor='purple'

let onHide =()=>{
    box.classList.add('d-none');
}
let onShow =()=>{
    box.classList.remove('d-none');
}
let onToggle =()=>{
    box.classList.toggle('d-none');
}


// let oncustom =() =>{
//     let result=box.className;
//     if(result.includes('d-none')){
//         box.classList.remove('d-none');
//         custombtn.innerHTML='Show';
//     }else{
//         box.classList.add('d-none');
//         custombtn.innerHTML='Hide'
//     }
// }


let oncustom =() =>{
    let result=box.className;
    if(result.includes('d-none')){
        box.classList.toggle('d-none');
        custombtn.innerHTML='Show';
    }else{
        box.classList.toggle('d-none');
        custombtn.innerHTML='Hide'
    }
}

const onFlag = (eva)=>{
    let result1=eva.target.innerText;
    cl(result1)
}




btnHide.addEventListener('click',onHide)
btnShow.addEventListener('click',onShow)
btnToggle.addEventListener('click',onToggle)
custombtn.addEventListener('click',oncustom)
Flagbut.addEventListener('click',onFlag)