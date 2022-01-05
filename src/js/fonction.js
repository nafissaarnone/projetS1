function carrousel() {
    var image154 = document.querySelectorAll('.image154')
    let d = 2000;
    let delta = 1000;

    image154.forEach(function(img,ind) {
        img.style.zIndex = image154.length - ind;
    });

    let anim15 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim15.add({
        targets: image154,
        translateX: [{value: 500, duration: d},
                     {value: '-500', duration: 0, delay: function(img,ind) {
                                        if (ind == 0) return 3*delta + 2*d;
                                        if (ind == 1) return 2*delta + d;
                                        if (ind == 2) return delta;
                                        return 0;
                                    }},
                     {value: 0, duration: function(img,ind) {
                                    if (ind == 3) return 0;
                                    return d;
                                }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return 2*delta + d;
            if (ind == 2) return 3*delta + 2*d;
            return 4*delta + 3*d;
        }
    });
}