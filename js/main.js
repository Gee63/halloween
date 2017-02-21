$(document).ready(function () {

    console.log("ready");


    /*title animate*/
    var title = $('.title');

    title.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function () {
            $('.pumpkin').addClass('opacity1');
        });

    var info = $('.info-container');
    var infoPopup = $('.more-info-popup-container');
    var closeBtn = $('.close');
    var claimBtn = $('.claim');
    var claimContainer = $('.congrats-container');

    info.click(function () {
        infoPopup.css("display", "block");
    })

    closeBtn.click(function () {
        infoPopup.css("display", "none");
    })

    claimBtn.click(function () {
        claimContainer.css("display", "none")
    })

});


var witch = $('#traveling-witch');
var path = "M0,198.7c17.3-0.7,34.7-1.4,52-2.1 c14.9-0.6,29.8-1.2,44.4-4.3c40.2-8.5,73.7-35,110.3-53.6c50.4-25.6,106.7-36.4,162.3-46.6c93.5-17.1,191-33,282.3-6.8 c28,8,54.7,19.8,82.6,28.2c37.7,11.2,78.3,13.5,117.6,13.8c14.2,0.1,28.6-0.5,42.4-3.9c9.7-2.4,19.1-6.2,28.3-9.9 c15-6.1,30.6-12.5,41.5-24.5c12.1-13.4,16.6-31.7,20.8-49.2c3.1-13,6.2-26.5,4.1-39.7"; // an SVG path ;


/*progress bar animate*/
var progressBar = $('.progress');
var pumpkin1 = $('.pumpkin1');
var pumpkin2 = $('.pumpkin2');
var pumpkin3 = $('.pumpkin3');

function level1() {
    progressBar.css("width", "70");
    pumpkin1.removeClass('pumpkin-inactive');
    pumpkin1.addClass('pumpkin-active');
    pumpkin2.addClass('pumpkin-inactive');
    pumpkin3.addClass('pumpkin-inactive');
}

function level2() {
    progressBar.css("width", "165");
    pumpkin1.removeClass('pumpkin-inactive');
    pumpkin2.removeClass('pumpkin-inactive');
    pumpkin3.addClass('pumpkin-inactive');
    pumpkin1.addClass('pumpkin-active');
    pumpkin2.addClass('pumpkin-active');
}

function level3() {
    progressBar.css("width", "300");
    pumpkin1.removeClass('pumpkin-inactive');
    pumpkin2.removeClass('pumpkin-inactive');
    pumpkin3.removeClass('pumpkin-inactive');
    pumpkin1.addClass('pumpkin-active');
    pumpkin2.addClass('pumpkin-active');
    pumpkin3.addClass('pumpkin-active');
}

/*road functions*/

var step1 = $('.step1'),
    step2 = $('.step2'),
    step3 = $('.step3'),
    step4 = $('.step4'),
    step5 = $('.step5'),
    step6 = $('.step6'),
    step7 = $('.step7'),
    step8 = $('.step8'),
    step9 = $('.step9'),
    step10 = $('.step10'),
    glow = $('.road-glow');

function Step0() {
    step1.css("display", "none");
    step2.css("display", "none");
    step3.css("display", "none");
    step4.css("display", "none");
    step5.css("display", "none");
    step6.css("display", "none");
    step7.css("display", "none");
    step8.css("display", "none");
    step9.css("display", "none");
    step10.css("display", "none");
    glow.css("width", "0");

    witch.addClass('floating');
}

function Step1() {
    step1.css("display", "block");
    glow.css("width", "190");

    animatePath();

    setTimeout(function () {
        pathAnimator.stop();
        witch.addClass('floating');
    }, 1800);
}

function Step2() {
    step1.css("display", "block");
    step2.css("display", "block");
    glow.css("width", "266");

    animatePath();

    setTimeout(function () {
        pathAnimator.stop();
        witch.addClass('floating');
    }, 2200);
}

function Step3() {
    step1.css("display", "block");
    step2.css("display", "block");
    step3.css("display", "block");
    glow.css("width", "339");

    animatePath();

    setTimeout(function () {
        pathAnimator.stop();
        witch.addClass('floating');
    }, 2700);
}

function Step4() {
    step1.css("display", "block");
    step2.css("display", "block");
    step3.css("display", "block");
    step4.css("display", "block");
    glow.css("width", "410");

    animatePath();

    setTimeout(function () {
        pathAnimator.stop();
        witch.addClass('floating');
    }, 3250);
}

function Step5() {
    step1.css("display", "block");
    step2.css("display", "block");
    step3.css("display", "block");
    step4.css("display", "block");
    step5.css("display", "block");
    glow.css("width", "485");

    animatePath();

    setTimeout(function () {
        pathAnimator.stop();
        witch.addClass('floating');
    }, 3700);

}

function Step6() {
    step1.css("display", "block");
    step2.css("display", "block");
    step3.css("display", "block");
    step4.css("display", "block");
    step5.css("display", "block");
    step6.css("display", "block");
    glow.css("width", "558");

    animatePath();

    setTimeout(function () {
        pathAnimator.stop();
        witch.addClass('floating');
    }, 4000);
}

function Step7() {
    step1.css("display", "block");
    step2.css("display", "block");
    step3.css("display", "block");
    step4.css("display", "block");
    step5.css("display", "block");
    step6.css("display", "block");
    step7.css("display", "block");
    glow.css("width", "632");

    animatePath();

    setTimeout(function () {
        pathAnimator.stop();
        witch.addClass('floating');
    }, 4500);
}

function Step8() {
    step1.css("display", "block");
    step2.css("display", "block");
    step3.css("display", "block");
    step4.css("display", "block");
    step5.css("display", "block");
    step6.css("display", "block");
    step7.css("display", "block");
    step8.css("display", "block");
    glow.css("width", "706");

    animatePath();

    setTimeout(function () {
        pathAnimator.stop();
        witch.addClass('floating');
    }, 4800);
}

function Step9() {
    step1.css("display", "block");
    step2.css("display", "block");
    step3.css("display", "block");
    step4.css("display", "block");
    step5.css("display", "block");
    step6.css("display", "block");
    step7.css("display", "block");
    step8.css("display", "block");
    step9.css("display", "block");
    glow.css("width", "780");

    animatePath();

    setTimeout(function () {
        pathAnimator.stop();
        witch.addClass('floating');
    }, 5200);
}

function Step10() {
    step1.css("display", "block");
    step2.css("display", "block");
    step3.css("display", "block");
    step4.css("display", "block");
    step5.css("display", "block");
    step6.css("display", "block");
    step7.css("display", "block");
    step8.css("display", "block");
    step9.css("display", "block");
    step10.css("display", "block");
    glow.css("width", "840");

    animatePath();
}

Step10();


/*path animation*/


function animatePath() {

    pathAnimator = new PathAnimator(path),    // initiate a new pathAnimator object
        speed = 6,              // seconds that will take going through the whole path
        reverse = false,        // go back or forward along the path
        startOffset = 0,        // between 0% to 100%



        pathAnimator.start(speed, step, reverse, startOffset, finish);

    function step(point) {
        // do something every "frame" with: point.x, point.y & angle
       /* console.log("step", point);*/

        var offset = 100;

        var leftOffset = -300;

        document.getElementById("traveling-witch").style.top = ( point.y - offset ) + 'px';
        document.getElementById("traveling-witch").style.left = (point.x + leftOffset) + 'px';
    }

    function finish() {
        // do something when animation is done
        console.log("finish");
        witch.addClass('floating');

    }
}



