// $(function () {
//     move();
//     setTimeout(() => {
//         move();
//     }, 2700);

let $nav = $('#home div.nav');
let $name = $nav[0];
let $resume = $nav[1];
let $contact = $nav[2];
let $project = $nav[3];
let $social = $nav[4];

// });


let el = document.getElementById('name');
el.addEventListener('click', move);


let resume = el.nextElementSibling;
let contact = resume.nextElementSibling;
let project = contact.nextElementSibling;
let social = project.nextElementSibling;
let instagram = document.getElementById('instagram');
let facebook = document.getElementById('facebook');
let youtube = document.getElementById('youtube');
let github = document.getElementById('github');

function move(e) {
    resume.classList.toggle("resume-transform");
    contact.classList.toggle("contact-transform");
    project.classList.toggle("project-transform");
    social.classList.toggle("social-transform");
    instagram.classList.toggle("instagram-transform");
    facebook.classList.toggle("facebook-transform");
    github.classList.toggle("github-transform");
    youtube.classList.toggle("youtube-transform");
}