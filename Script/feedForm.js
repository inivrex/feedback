// Varibles
const feedbackType = document.getElementsByClassName('feedbackType');
const feedInUser = document.getElementsByClassName('feedInUser');
const applTypeIn = document.getElementById("applTypeIn");
const UserInName = document.getElementById("UserInName");
const UserInEmail = document.getElementById("UserInEmail");
const UserInSubj = document.getElementById("UserInSubj");
const UserInDescr = document.getElementById("UserInDescr");
const FeedBackSbBTN = document.getElementById("FeedBackSbBTN");
const feedBackTypePrent = document.getElementById("feedBackTypePrent");
const UserDate = document.getElementById("UserDate");
const UserTime = document.getElementById("UserTime");
const LoadingWin = document.getElementById("LoadingWin");
const ThankSubWin = document.getElementById("ThankSubWin");

// Defined Varibles
let CheckPassFeedIn = 0;
let bgcolor = 'greenyellow';
let typeCheckPass = 0;

// updating the applTypeIn value depending on the selected type 
for (let i = 0; i < feedbackType.length; i++) {
    feedbackType[i].addEventListener("click", () => {
        if (i == 0) {
            applTypeIn.value = 'Comment';
            feedbackType[i].firstChild.style.backgroundColor = bgcolor;
            feedbackType[i + 1].firstChild.style.backgroundColor = 'transparent';
            applTypeIn.value = 'Comment';
        } else {
            applTypeIn.value = 'Suggestion';
            feedbackType[i].firstChild.style.backgroundColor = bgcolor;
            feedbackType[i - 1].firstChild.style.backgroundColor = 'transparent';
        }
        typeCheckPass = 1;
        return typeCheckPass = 1;
    });
};

// Alerting User to fill fields right 
UserInName.addEventListener("keyup", () => {
    if (UserInName.value.trim() !== "") {
        UserInName.style.border = '2px solid rgb(1, 88, 1)';
        UserInName.setCustomValidity(''); // Clear any previous custom error message
    } else {
        UserInName.style.border = '2px solid red';
    }
})
UserInEmail.addEventListener("keyup", () => {
    if (UserInEmail.value.trim() !== "") {
        UserInEmail.style.border = '2px solid rgb(1, 88, 1)';
        UserInEmail.setCustomValidity(''); // Clear any previous custom error message
    } else {
        UserInEmail.style.border = '2px solid red';
    }
})
UserInSubj.addEventListener("keyup", () => {
    if (UserInSubj.value.trim() !== "") {
        UserInSubj.style.border = '2px solid rgb(1, 88, 1)';
        UserInSubj.setCustomValidity(''); // Clear any previous custom error message
    } else {
        UserInSubj.style.border = '2px solid red';
    }
})
UserInDescr.addEventListener("keyup", () => {
    if (UserInDescr.value.trim() !== "") {
        UserInDescr.style.border = '2px solid rgb(1, 88, 1)';
        UserInDescr.setCustomValidity(''); // Clear any previous custom error message
    } else {
        UserInDescr.style.border = '2px solid red';
    }
})

//Checking all the input fields before submit
FeedBackSbBTN.addEventListener("click", () => {
    if (typeCheckPass == 1) {
        applTypeIn.setCustomValidity('');
        feedBackTypePrent.style.border = 'none';
        CheckPassFeedIn = 1;
    } else {
        applTypeIn.setCustomValidity(' ');
        feedBackTypePrent.style.border = '2px solid red';
        console.log(typeCheckPass)
        setTimeout(() => {
            feedBackTypePrent.style.border = '2px solid transparent';
        }, 3000);
        CheckPassFeedIn = 0;
    }
    if (UserInName.value.trim() !== "") {
        if (CheckPassFeedIn == 1) {
            UserInName.style.border = '2px solid rgb(1, 88, 1)';
            UserInName.setCustomValidity(''); // Clear any previous custom error message
            CheckPassFeedIn = 2;
        }
    } else {
        if (CheckPassFeedIn == 1) {
            CheckPassFeedIn = 1;
            UserInName.style.border = '2px solid red';
            UserInName.setCustomValidity('Enter Your Name Correctly.'); // Set custom error message
            UserInName.focus();
        }
    }
    if (UserInEmail.value.trim() !== "") {
        if (CheckPassFeedIn == 2) {
            UserInEmail.style.border = '2px solid rgb(1, 88, 1)';
            UserInEmail.setCustomValidity(''); // Clear any previous custom error message
            CheckPassFeedIn = 3;
        }
    } else {
        if (CheckPassFeedIn == 2) {
            UserInEmail.style.border = '2px solid red';
            UserInEmail.setCustomValidity('Enter Your Email Correctly.'); // Set custom error message
            UserInEmail.focus();
            CheckPassFeedIn = 1;
        }
    }
    if (UserInSubj.value.trim() !== "") {
        if (CheckPassFeedIn == 3) {
            UserInSubj.style.border = '2px solid rgb(1, 88, 1)';
            UserInSubj.setCustomValidity(''); // Clear any previous custom error message
            CheckPassFeedIn = 4;
        }
    } else {
        if (CheckPassFeedIn == 3) {
            UserInSubj.style.border = '2px solid red';
            UserInSubj.setCustomValidity('Enter Your Subject'); // Set custom error message
            UserInSubj.focus();
            CheckPassFeedIn = 3;
        }
    }
    if (UserInDescr.value.trim() !== "") {
        if (CheckPassFeedIn == 4) {
            UserInDescr.style.border = '2px solid rgb(1, 88, 1)';
            UserInDescr.setCustomValidity(''); // Clear any previous custom error message
            CheckPassFeedIn = 5;
        }
    } else {

        if (CheckPassFeedIn == 4) {
            UserInDescr.style.border = '2px solid red';
            UserInDescr.setCustomValidity('Describe Your Feedback'); // Set custom error message
            UserInDescr.focus();
            CheckPassFeedIn = 4;
        }
    }
})

// Thanking You Function 
function thanksFeedSub() {
    ThankSubWin.style.display = 'flex';
    LoadingWin.style.display = 'none';
    grecaptcha.reset();
    setTimeout(() => {
        ThankSubWin.style.display = 'none';
        applTypeIn.value = '';
        for (let i = 0; i < feedInUser.length; i++) {
            feedInUser[i].value = '';
        }
        CheckPassFeedIn = 0;
        typeCheckPass = 0;
        feedbackType[0].firstChild.style.backgroundColor = 'transparent';
        feedbackType[1].firstChild.style.backgroundColor = 'transparent';
    }, 5000);
}

// Changing Time And Date 
function changeTime() {
    let Fulldate = new Date;
    let date = Fulldate.getDate();
    let month = Fulldate.getMonth() + 1;
    let year = Fulldate.getFullYear();
    let hours = Fulldate.getHours();
    let minutes = Fulldate.getMinutes();
    let seconds = Fulldate.getSeconds();
    let FinalDate = `${date}-${month}-${year}`;
    let FinalTime = `${hours}-${minutes}-${seconds}`;
    UserDate.value = FinalDate;
    UserTime.value = FinalTime;
}

//Adding Date and time when someone submit query.
setInterval(() => {
    changeTime();
}, 1000);

const scriptURL = 'https://script.google.com/macros/s/AKfycbzanO9TFqAmbFhRmBKb-ypBUVU1YWkMDN9WOJfYC0YipCOk8CfdyUfj0OkqpH2dYjoWbQ/exec';
const form = document.forms['google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();
    let captchaResponse = grecaptcha.getResponse();
    if (!captchaResponse > 0) {
        recaptchaID.classList.add('highLighter');
        setTimeout(() => {
            recaptchaID.classList.remove('highLighter');

        }, 1000);
    } else {
        FeedBackSbBTN.disabled = true;
        setTimeout(() => {
            FeedBackSbBTN.disabled = false;
        }, 3000);
        LoadingWin.style.display = 'flex';
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => thanksFeedSub())
            .catch(error => console.error('Error!', error.message))
    }


})