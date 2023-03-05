const toggle=document.querySelector('#toggle');
const navMenu=document.querySelector('.nav-menu');

toggle.addEventListener('click',()=>{
    toggle.classList.toggle('active');

    navMenu.classList.toggle('active');
});


const title=['Proffessional Career coatcher','Welding Proffessional Trainer','Proffessional Carpenter','Tailoring Proffessinal Trainer', 'Computer Specialist Trainer','Marketing Manager', 'Job Search Trainer','Training Enspector','Recruitment Manager','Advertisment Manager'];
const images=['./images/image-1-1.jpg','./images/image-1.jpg','./images/image-2.jpg','./images/image-3.jpeg','./images/image-4.jpeg','./images/image-5.jpeg','./images/image-6.jpeg','./images/image-7.jpg','./images/image-8.jpg','./images/image-9.jpg'];
let imageCount=0;
document.getElementById('next').onclick=nextPhoto;

function nextPhoto(){
    imageCount++;
    if(imageCount > images.length-1){
        imageCount=0;
    }
    document.getElementById('myImages').src=images[imageCount];
    document.getElementById('trainer-title').innerText=title[imageCount];
}

document.getElementById('prev').onclick=prevPhoto;

function prevPhoto(){
    imageCount--;
    if(imageCount == -1){
        imageCount= images.length-1;
    }
    document.getElementById('myImages').src=images[imageCount];
    document.getElementById('trainer-title').innerHTML=title[imageCount];
}


// Declaration of small tag of our trainer card

const smallText=document.getElementById('trainer-title');
