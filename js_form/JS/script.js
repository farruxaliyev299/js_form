const form = document.getElementById('contact-form');

form.addEventListener('submit',function(e){
    e.preventDefault();

    let error = [];

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const fname = document.getElementById('in-fname');
    const lname = document.getElementById('in-lname');
    const email = document.getElementById('in-email');
    const age = document.getElementById('in-age');

    if(fname.value.trim() === "" || fname.value.trim() === " "){
        error[1] = ("*First name isn't entered correct");
    }
    if(lname.value.trim() === "" || lname.value.trim() === " "){
        error[2] = ("*Last name isn't entered correct")
    }
    if(!email.value.match(mailformat)){
        error[3] = ("*Email isn't entered correct");
    }
    if(age.value === ''){
        error[4] = ("*Age need to be entered");
    }


    const fmessage = document.getElementById('f-name');
    if(error[1]!= undefined){
        fmessage.innerText = error[1];
    }
    const lmessage = document.getElementById('l-name');
    if(error[2]!= undefined){
        lmessage.innerText = error[2];
    }
    const emessage = document.getElementById('e-message');
    if(error[3]!= undefined){
        emessage.innerText = error[3];
    }
    const eage = document.getElementById('e-age');
    if(error[4]!= undefined){
        eage.innerText = error[4];
    }


    if(error.length > 0){
        const star1 = document.getElementById('star-1');
        star1.innerText = '*';
        const star2 = document.getElementById('star-2');
        star2.innerText = '*';
        const star3 = document.getElementById('star-3');
        star3.innerText = '*';
    }
    if(error.length === 0){
        const successmsg = document.getElementById('success');

        successmsg.innerText = "Form submitted successfuly!";

        const pfname = document.getElementById('print-fname');
        const plname = document.getElementById('print-lname');
        const p_age = document.getElementById('print-age');
        const p_email = document.getElementById('print-email');
    
        pfname.innerText = `First Name : ${fname.value}`;
        plname.innerText = `Last Name : ${lname.value}`;
        p_age.innerText = `Age : ${age.value}`;
        p_email.innerText = `Email : ${email.value}`;

    }

    const clearBtn = document.querySelector('btn-submit');
    const inputs = document.querySelectorAll('input');

    //--------------------------------------

    // clearBtn.addEventListener('click', () =>{
    // inputs.forEach(input => input.value = '');
    // })

    // console.log(clearBtn);

    //-----------------------------------

    inputs[1].value = '';
    inputs[2].value = '';
    inputs[3].value = '';
    inputs[0].value = '';
    console.log(inputs);
})