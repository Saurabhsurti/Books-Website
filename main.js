function fun() {
  pat_u =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  pat_v=/[\W\d]+/
  u = document.getElementById("typeEmailX").value;
  v = document.getElementById("typePasswordX").value;
  if (v.length == 0 || u.length == 0) {
    alert("Both must not be blank");
  }
  else{
    if (v.length < 6 || v.length > 12) {
      alert("Password length must be between 8 to 12");
    }
    if (!pat_v.test(v))
    {
      alert('Password should have atleast one special character and one digit')
    }
    if (!pat_u.test(u)) {
      alert("Enter valid email");
    }
  }
}
function fun1() {
  pat_u =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  pat_v=/[\W\d]+/
  u = document.getElementById("form3Example3c").value;
  pa = document.getElementById("form3Example4c").value;
  rpa = document.getElementById("form3Example4cd").value;
  che = document.getElementById("form2Example3c");

  //v==" " || u==" "
  if (pa.length == 0 || u.length == 0) {
    alert("Email and password must not be blank");
  }
  else{
    if (!pat_u.test(u)) {
      alert("Enter valid email");
    }
    if (pa.length < 8 || pa.length > 12) {
      alert("Password length must be between 8 to 12");
    }
    if (!pat_v.test(pa))
    {
      alert('Password should have atleast one special character and one digit')
    }
    if (pa!=rpa)
    {
      alert('Password not matched')
    }
    if(!che.checked)
    {
      alert('You must agree all conditions')
    }
  }
}


let nCount = selector => {
  $(selector).each(function () {
    $(this)
      .animate({
        Counter: $(this).text()
      }, {
        // A string or number determining how long the animation will run.
        duration: 4000,
        // A string indicating which easing function to use for the transition.
        easing: "swing",
        /**
         * A function to be called for each animated property of each animated element. 
         * This function provides an opportunity to
         *  modify the Tween object to change the value of the property before it is set.
         */
        step: function (value) {
          $(this).text(Math.ceil(value));
        }
      });
  });
};

let a = 0;
$(window).scroll(function () {
  // The .offset() method allows us to retrieve the current position of an element  relative to the document
  let oTop = $(".numbers").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() >= oTop) {
    a++;
    nCount(".rect > h1");
  }
});



/**
 *
 *  sticky navigation
 */

let navbar = $(".navbar");

$(window).scroll(function () {
  // get the complete hight of window
  let oTop = $(".section-2").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});


fadeOut();

function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 4000);
}

