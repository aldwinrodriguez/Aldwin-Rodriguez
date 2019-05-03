$(window).load(function () {
    if ($(window).width() <= 1024) {
        $('body').sakura({
            blowAnimations: ['blow-hard-left', 'blow-hard-right'], // Horizontal movement animation names
            className: 'sakura', // Class name to use
            fallSpeed: 1, // Factor for petal fall speed
            maxSize: 14, // Maximum petal size
            minSize: 9, // Minimum petal size
            newOn: 800, // Interval after which a new petal is added
            swayAnimations: ['sway-0', 'sway-1', 'sway-2', 'sway-3', 'sway-4', 'sway-5', 'sway-6', 'sway-7', 'sway-8'] // Swaying animation names
        });
    } else {
        $('body').sakura({
            className: 'sakura', // Class name to use
            fallSpeed: 1, // Factor for petal fall speed
            maxSize: 14, // Maximum petal size
            minSize: 9, // Minimum petal size
            newOn: 400, // Interval after which a new petal is added
            swayAnimations: ['sway-0', 'sway-1', 'sway-2', 'sway-3', 'sway-4', 'sway-5', 'sway-6', 'sway-7', 'sway-8'] // Swaying animation names
        })
    }
});