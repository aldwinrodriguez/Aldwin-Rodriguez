$(function () {
    $($('#home').prev()[0]).addClass('background-tranform');

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
    var i = 0;
    var txt = 'Aldwin Rodriguez .';

    typeWriter();
    setTimeout(() => {
        move();
        setTimeout(() => {
            move();
        }, 2700);
    }, 8600);
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

    function typeWriter() {
        let letter;
        if (i < txt.length) {
            if (!(i === 0 || i === 7)) {
                letter = '<span class="change">' + txt.charAt(i) + '</span>';
            } else {
                letter = '<span>' + txt.charAt(i) + '</span>';
            }
            $($name).append(letter);
            i++;
            setTimeout(typeWriter, 300);
        }
    }

});