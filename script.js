let menu = document.querySelector("#menu-btn");
let header= document.querySelector(".header");

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

let themeToggler = document.querySelector('#theme-toggler');
themeToggler.onclick=()=>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
      document.body.classList.add('active');  
    }else{
        document.body.classList.remove('active')
    }
}

var btn = document.getElementById('btn');
btn.addEventListener('click',function(e){
    e.preventDefault()
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var body = 'name:' +name+ '<br/> email:' + email + '<br/> subject' + subject + '<br/> message' + message;
    // console.log('hi');
    Email.send({
        Host : "smtp.gmail.com",
        Username : "abhaysharma5975@gmail.com",
        Password : "ahjumxmpmkbbxfyp",
        To : 'abhaysharma5975@gmail.com',
        From : email ,
        Subject : subject,
        Body : body
    }).then(
      message => alert(message)
    );
})