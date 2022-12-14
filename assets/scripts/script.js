$(window).on("load", function () {
    $('#preloader').fadeOut(500)
    $('body').css("opacity", 1)

});


$(document).ready(function () {
        $('select').niceSelect();
        function rangeSlider() {
            $('.range-slider > input').ionRangeSlider({
                onChange: function (data) {
                    var counter = data.from_percent.toString().split('.')[0]
                    $('.irs-max').html(counter + '%')
                }
            })
            $('.irs-max').html('0%')
        }
        function burger() {
            var burger = $('.header__burger')
            burger.on('click', function () {
                $(this).toggleClass('active')
                $('.header__nav').toggleClass('active')
            })
        }


        rangeSlider()
        burger()
    }
)
















