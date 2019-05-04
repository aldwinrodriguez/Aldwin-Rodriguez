$('#home').ready(function (){
    let $nav = $('#home div.nav');
    let $name = $nav[0];
    var i = 0;
    var txt = 'Aldwin Rodriguez .';
    setTimeout(function() {
    $('div#loading').remove();
    $('section#home').css("display", "block");
    $('section#content').css("display", "block");
    typeWriter();
    }, 1000);

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
})