/*jslint browser: true*/
/*global $, jQuery, alert*/


"use strict";

var click = true,
    tab_active = false,
    connector_left_in = '-200px',
    connector_left_out = '-35px',
    connector_top_in = '-200px',
    connector_top_out = '-35px',
    wait_offset = 50,
    time_1 = 50,
    time_2 = 200,
    time_3 = 300,
    time_4 = 400;

$(document).ready(function () {
    $('#main-circle').click(function () { menu_handler(click); });
    $('#circ-1').click(function () {
        var name = '#circ-1';
        
        circle_content_out(name, time_2);
        

        
        // X 1. make connector, img, text disappear
        // 2. move circ to center of screen
        // 3. expand circ to cover screen (animate left and expand height/width)
        // 4. fade in pane content on top
        
    });
    $('#circ-2').click(function () {
        var name = '#circ-2';
        circle_content_out(name, time_2);
    });
    
    $('#circ-3').click(function () {
        var name = '#circ-3';
        circle_content_out(name, time_2);
    });
    
    
});

// page transfer handling submethods
function circle_content_out(name, fade_time) { // name is the id of the circle that's been clicked
    var img_id = name + ' > img ',
        p_id = name + ' div p:first-child';
    
    $(img_id).fadeOut(fade_time);
    $(p_id).fadeOut(fade_time);
}

function circle_alternate_content_in(name) {
    var p_id = name + '  p:last-child';
    $(p_id).show();
}

function circle_content_in(name, fade_time) {
    var circle_num = name.slice(-1),
        img_id = name + ' > img ',
        p_id = name + ' div';
    
    $(img_id).fadeIn(fade_time);
    $(p_id).fadeIn(fade_time);
    
    
}

function main_content_out(time) {
    $('.main').fadeOut(time);
}

//menu handling subfunctions
function show_out(time) {
    $('#show').animate(
        {
            opacity: '0'
        },
        time
    );
}

function nav_pane_down(time) {
    $('#nav-pane').animate(
        {
            height: '400px'
        },
        time
    );
}

function nav_pane_up(time) {
    $('#nav-pane').animate(
        {
            height: '0px'
        },
        time
    );
}

function nav_pane_content_in(time) {
    $('.nav-pane-ctrl-wrapper').fadeIn(time);
}
function nav_pane_content_out(time) {
    $('.nav-pane-ctrl-wrapper').fadeOut(time);
}

function connector_down(time) {
    $('#connector').animate(
        {
            left: connector_left_out,
            top:  connector_top_out
        },
        time
    );
}

function connector_up(time) {
    $('#connector').animate(
        {
            left: connector_left_in,
            top:  connector_top_in
        },
        time
    );
}

function main_circle_down(time) {
    $('#main-circle').animate(
        {
            left: '75px',
            top: '75px'
        },
        time
    );
}
function main_circle_up(time) {
    $('#main-circle').animate(
        {
            left: '-20px',
            top: '-20px'
        },
        time
    );
}

function exit_in(time) {
    $('#exit').animate(
        {
            opacity: '1',
            left: '100px',
            top: '100px'
        },
        time
    );
}

function exit_out(time) {
    $('#exit').animate(
        {
            opacity: '0',
            left: '0px',
            top: '0px'
        },
        time
    );
}

function show_in(time) {
    $('#show').animate(
        {
            opacity: '1'
        },
        time
    );
}

// creates menu 'in' state, aka open
function full_menu_in() {
    show_out(wait_offset);
    setTimeout(function () {
        nav_pane_down(time_2);
        setTimeout(function () {
            nav_pane_content_in(time_1);
        },
            time_2
            );
    }, time_2 + wait_offset);
    connector_down(time_2);
    main_circle_down(time_2);
    exit_in(time_2);
}

// creates menu 'out' state, aka closed
function full_menu_out() {
    nav_pane_content_out(wait_offset);
    nav_pane_up(time_2);

    setTimeout(function () {
        connector_up(time_3);
        main_circle_up(time_3);
        exit_out(time_3);

        setTimeout(function () {
            show_in(time_1);
        }, time_4);
    }, time_2);
}

// menu handling based on global click state
function menu_handler(p_click) {
    if (p_click === true) {
        click = false;
        full_menu_in();
    } else {
        click = true;
        full_menu_out();
    }
}






