const arr = [];


function signUp() {
    
    var email = document.getElementById('email').value
    
    var password = document.getElementById('password').value
    
    var confirm_password = document.getElementById('cpassword').value
    var country = document.getElementById('country').value
    var firstname = document.getElementById('first-name').value
    var lastname = document.getElementById('last-name').value
    var address1 = document.getElementById('address1').value
    var address2 = document.getElementById('address2').value
    var companyname = document.getElementById('company-name').value
    var city = document.getElementById('city').value
    var zip = document.getElementById('zip').value
    var phonenumber = document.getElementById('phone-number').value
    if (email == "" || pass == "" || cpass == "" || firstname == "" || address1 == "" || city == "" || zip == "" || phonenumber == "") {
        alert("Fill all mandatory fields")
    }
    else {
        var obj = {
            email: email,
            password:password,
            confirm_password:confirm_password,
            country: country,
            firstname: firstname,
            lastname: lastname,
            address1: address1,
            address2: address2,
            companyname: companyname,
            city: city,
            zip: zip,
            phonenumber: phonenumber,
        }
        arr.push(obj)
        localStorage.setItem('users', JSON.stringify(arr))
        alert('Sign UP Successful')
        window.location.href="account.html"
    }
}
/// login popup


const open = document.getElementById('login-popup')
const modal_container = document.querySelector('.modal-container')
const close = document.querySelector('fa fa-times')
function loginModal(){
    modal_container.classList.add('showModal');
}

function closeModal(){
    modal_container.classList.remove('showModal');
}
// ----------------------------logged in account page--------------------


var users = JSON.parse(localStorage.getItem('users'))
var login_user = document.getElementById('after-login')
login_user.style.fontWeight = 700
login_user.style.color = "black"
login_user.style.fontSize = "10px"
login_user.style.letterSpacing="1px"
login_user.style.fontFamily="Open Sans, sans-serif"
login_user.innerHTML=`<span>HELLO</span>,&nbsp;${users[0].firstname.toUpperCase()} &nbsp;${ users[0].lastname.toUpperCase()}.&nbsp;`


function orders() {
    var account_settings_div = document.getElementById('account-settings-div').style.display="none"
    var orders = document.getElementById('orders')
    orders.style.borderTop = "2px solid black"
    orders.style.backgroundColor = "white"
    orders.style.borderBottom = "none"


    var orders_div = document.getElementById('orders-div')
    orders_div.style.display = "block"


    var account_settings = document.getElementById('account-settings-item')
    account_settings.style.borderTop = "1px solid rgb(223, 221, 221)"
    account_settings.style.backgroundColor = "rgb(247, 248, 249)"
    account_settings.style.borderBottom = "1px solid rgb(223, 221, 221)"
}

function account_settings() {
    var account_settings_div= document.getElementById('account-settings-div')
    account_settings_div.innerHTML=`<div id="register-form-container">
        
        <form id="account-settings-form" action="">
        <div class="form-div">
            <label class="reg-label" for="first-name">First Name <span class="star">*</span></label>
            <input class="account-settings-input" type="text" name="" id="first-name">
        </div>
        <div class="form-div">
            <label class="reg-label" for="last-name"> Last Name<span class="star">*</span></label>
            <input class="account-settings-input" type="text" name="" id="last-name">
        </div>
        <div class="form-div">
            <label class="reg-label" for="company-name"> Company Name</label>
            <input class="account-settings-input" type="text" name="" id="company-name">
        </div>
         <div class="form-div">
            <label class="reg-label" for="phone-number">Phone Number<span class="star">*</span></label>
            <input class="account-settings-input" type="number" name="" id="phone-number">
        </div>
        <div class="form-div">
            <label class="reg-label" for="email">Email Address <span class="star">*</span></label>
            <input class="account-settings-input" type="text" name="" id="email">
        </div>
        <div class="form-div">
            <label class="reg-label" for="password">Password </label>
            <input class="account-settings-input" type="password" name="" id="password">
        </div>
        <div class="form-div">
            <label class="reg-label" for="cpassword">Confirm Password </label>
            <input class="account-settings-input" type="password" name="" id="cpassword">
        </div>
        <div class="form-div">
            <label class="reg-label" for="currpassword">Current Password </label>
            <input class="account-settings-input" type="password" name="" id="currpassword">
        </div>
       
   </form>
    <button id="account-settings-btn" onmouseover="black()" onmouseout="white()">UPDATE DETAILS</button>
    </div>`
    var orders_div = document.getElementById('orders-div')
    account_settings_div.style.display = "block"
    orders_div.style.display = "none"
    var orders = document.getElementById('orders')
    orders.style.borderTop = "1px solid rgb(223, 221, 221)"
    orders.style.backgroundColor = "rgb(247, 248, 249)"
    orders.style.borderBottom = "1px solid rgb(223, 221, 221)"
    var account_settings = document.getElementById('account-settings-item')
    account_settings.style.borderTop = "2px solid black"
    account_settings.style.backgroundColor = "white"
    account_settings.style.borderBottom = "none"
}



    function black() {
    var login = document.getElementById('account-settings-btn')
    login.style.backgroundColor = 'black'
    login.style.color='white'
    }
function white() {
    var login = document.getElementById('account-settings-btn')
    login.style.backgroundColor = 'white'
    login.style.color='black'
}

// -----------------cart----------
function cart() {
    var cart_box = document.getElementById('cart-box')
    console.log(cart_box);
    cart_box.style.display = "block"
}
