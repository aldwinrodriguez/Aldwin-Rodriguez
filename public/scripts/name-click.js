$(function () {
    $($('#home').prev()[0]).addClass('background-transform');

    let $nav = $('#home div.nav');
    let $name = $nav[0];
    let $resume = $nav[1];
    let $contact = $nav[2];
    let $project = $nav[3];
    let $social = $nav[4];
    let $socialNav = $('#social .socialContainer div');
    let $instagram = $socialNav[0];
    let $facebook = $socialNav[1];
    let $youtube = $socialNav[2];
    let $github = $socialNav[3];

    setTimeout(function () {
        move();
        setTimeout(function () {
            move();
        }, 2400);
    }, 7700);

    $($name).on('click', move);

    function move() {
        $($resume).toggleClass('resume-transform');
        $($contact).toggleClass('contact-transform');
        $($project).toggleClass('project-transform');
        $($social).toggleClass('social-transform');
        $($instagram).toggleClass('instagram-transform');
        $($facebook).toggleClass('facebook-transform');
        $($youtube).toggleClass('youtube-transform');
        $($github).toggleClass('github-transform');
    }

});