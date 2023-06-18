// هين مسكنا الإنبتز وليبل عشان نتعامل معهم
let inputAll = document.querySelectorAll(".time-show input");
let labelAll = document.querySelectorAll("label");
let inputHours = document.getElementById("inputHours");
let inputMinutes = document.getElementById("inputMinutes");
let inputSeconds = document.getElementById("inputSeconds");
// هين مسكنا الإزرار عشان نتعامل معهم
let btnReset = document.querySelector(".btn-reset");
let btnStart = document.querySelector(".btn-start");
let eleHaz = document.querySelector(".finl-show");


// أعطينا قيم إبتدائية لتجنب أي إيرور
let numHours = "";
let numMinutes = "";
let numSeconds = "";
let theTotal = 0;

const audio = new Audio('SOUND/zapsplat_multimedia_end_ping_timer_002_68789.mp3'); // ملف الصوت تبع التايمر
// امسكنا صورة الصوت
let soundHaz = document.querySelector('.soundHaz')

inputAll.forEach(function (input, index) {
    // لاحظ إني عملت حدثين الحدث الأول عشان اخلي تركيز على انيبت الساعات والتاني عشان اكتب فيهم
    input.addEventListener("click", function () {
        inputAll[0].focus();
    });
    input.addEventListener("input", function () {
        inputAll[0].focus();
        numHours = inputAll[0].value;
        if (typeof numHours !== "undefined" && numHours.length === 2) {
            // لازم نتأكد إنو العنصر مش فاضي زائد لنث بيساوي 2
            inputAll[1].focus();
            numMinutes = inputAll[1].value;
        }
        if (typeof numMinutes !== "undefined" && numMinutes.length === 2) {
            inputAll[2].focus();
            numSeconds = inputAll[2].value;
        }
        if (typeof numSeconds !== "undefined" && numSeconds.length === 2) {
            inputAll[2].blur();
            // هندلنا الوضع هين عشان القيم هين بكونو ملينات
            //  الساعة 60 دقيقة والدقيقة 60 ثانية
            theTotal = +numHours * 60 * 60 + +numMinutes * 60 + +numSeconds;
            console.log(`The Total Is ${theTotal}`);
        }
    });
});



// هضول المتغيرات عشان أضبط العداد
let hours = '';
let minutes = '';
let seconds = '';



btnStart.addEventListener('click', () => {
    // لما ينقر على ستارت بدي ياه يخفي الأنبت وليبل عشان اظهر التايمر
    inputAll.forEach(input =>{
        input.style.display = "none"
    }) ;
    labelAll.forEach(input =>{
        input.style.display = "none"
    }) ;
    

    hours = inputHours.value;
    minutes = inputMinutes.value;
    seconds = inputSeconds.value;
    

    function countTimer() {
        // في حال ان كام محطش التايمر بالساعات فأنا بديش اعرض الساعة في التايمر
        if (hours = '00' ) {
            eleHaz.innerHTML =  minutes + 'm' + " "   + seconds + 's';
        } else {
            eleHaz.innerHTML = hours + 'h' + " " + minutes + 'm' + " "   + seconds + 's';
        }
        
        if (hours === 0 && minutes === 0 && seconds === 0 ) {
            clearInterval(interval);
            console.log("Time end");
            
        } else {
            seconds--;
            if (seconds < 0) {
                seconds = 59;
                if (minutes > 0) {
                    minutes --;
                } else {
                        minutes = 59;
                    if (hours > 0) {
                        hours--;
                    }else {
                        minutes = 0;
                        seconds = 0;
                        clearInterval(interval);
                        console.log("Time end");
                         // شغلنا الصوت وعملناه بشكل متكرر
                        audio.loop = true; 
                        audio.play();   
                        
                    }
                }
                
            }
        }
        console.log(hours);
        console.log(minutes);
        console.log(seconds);
    }
    let interval = setInterval(countTimer, 1000); // كل ثانية رح ينفذ الكاونت تايمر
});




btnReset.addEventListener("click", () => {
    // لما ينقر على زر الريست رح احذف القيم الموجودة داخل الإنبت زائد القيم الموجزدة بالمتغيرات
    numHours = "";
    numMinutes = "";
    numSeconds = "";
    inputHours.value = "";
    inputMinutes.value = "";
    inputSeconds.value = "";
    hours = '';
    minutes = '';
    seconds = '';
    // وقفنا صوت التايمر
    audio.pause(); 

    // هين أخفينا التايمر 
    eleHaz.style.display = "none"
    // هين أطهرنا الإنبت والليبل عشان ناخد قيم التايمر الجديد
    inputAll.forEach(input =>{
        input.style.display = ""; 
    }) ;
    labelAll.forEach(input =>{
        input.style.display = ""; // هين أتعمد مدهوش اسم الخاصية عشان المتصفح يستخدم القيمة الإفتراضية
    }) ;
});


//لما الصوت يشتغل لو بدك بتوقفو من خلال النقر على زر الصوت
soundHaz.addEventListener('click', ()=>{
     // وقفنا صوت التايمر
    audio.pause(); 
});
















