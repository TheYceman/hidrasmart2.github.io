$(document).ready(function() {

    $('.card_pipenetwork').hover(function() {
        $('.img_default').css('transform', 'scale(3)');
        $('.img_default').css('opacity', '0');
        $('.img_pipenetwork').css('opacity', '1');
        $('.card_pipenetwork').css('border-radius', '50px 0 0 50px');
        typewriter("text1");
    }, function() {
        $('.card_pipenetwork').css('border-radius', '50px 0 0 0');
        $('.img_pipenetwork').css('opacity', '0');
        $('.img_default').css('transform', 'scale(1)');
        $('.img_default').css('opacity', '1');
        stopTypeWriter();
    });

    $('.card_openchannel').hover(function() {
        $('.img_default').css('transform', 'scale(3)');
        $('.img_default').css('opacity', '0');
        $('.img_openchannel').css('opacity', '1');
        $('.card_openchannel').css('border-radius', '0 50px 50px 0');
        typewriter("text2");
    }, function() {
        $('.card_openchannel').css('border-radius', '0 0 50px 0');
        $('.img_openchannel').css('opacity', '0');
        $('.img_default').css('transform', 'scale(1)');
        $('.img_default').css('opacity', '1');
        stopTypeWriter();
    });

    $('.card_flowmetering').hover(function() {
        $('.img_default').css('transform', 'scale(3)');
        $('.img_default').css('opacity', '0');
        $('.img_flowmetering').css('opacity', '1');
        $('.card_flowmetering').css('border-radius', '50px 0 0 50px');
        typewriter("text3");
    }, function() {
        $('.card_flowmetering').css('border-radius', '50px 0 0 0');
        $('.img_flowmetering').css('opacity', '0');
        $('.img_default').css('transform', 'scale(1)');
        $('.img_default').css('opacity', '1');
        stopTypeWriter();
    });

    $('.card_culvertmanagement').hover(function() {
        $('.img_default').css('transform', 'scale(3)');
        $('.img_default').css('opacity', '0');
        $('.img_culvertmanagement').css('opacity', '1');
        $('.card_culvertmanagement').css('border-radius', '0 50px 50px 0');
        typewriter("text4");
    }, function() {
        $('.card_culvertmanagement').css('border-radius', '0 0 50px 0');
        $('.img_culvertmanagement').css('opacity', '0');
        $('.img_default').css('transform', 'scale(1)');
        $('.img_default').css('opacity', '1');
        stopTypeWriter();
    });
});