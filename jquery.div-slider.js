

(($) => {
    $.fn.knob = function (options) {
        let $this = this;
        let $current = null;
        let currentPosition = 0;
        let knobWidth = $('.knob').width();
        let sliderWidth = Math.ceil($('.slider').width());
        let sliderPosition = $('.slider').offset().left;
        let maxValue = sliderWidth + sliderPosition + 1;
        let minValue = sliderPosition;

        let valuePerStep = Math.ceil(sliderWidth / ($('ul.data li').length-1));
        console.log(valuePerStep);
        $('ul.data li').hide().first().show();

        $this.addClass("slider").mousedown((event) => {
            $current = $(event.currentTarget);
            currentTop = $current.offset().top;
        });

        $(document).mousemove((event) => {
            if ($current) {
                let newPosition = event.pageX;
                if(newPosition >= maxValue){
                  newPosition = maxValue - knobWidth;
                }else if(newPosition < minValue){
                  newPosition = minValue;
                }
                $current.offset({top:currentTop, left: newPosition});
                $current.data({'value' : Math.ceil((newPosition-sliderPosition)/valuePerStep)});
                console.log($current.data('value'));
            }

        }).mouseup(() => {
            if($current){
              let data = $('ul.data li');
              let target = $current.data('value');

              function sliderResponse(target) {
                  data.fadeOut(300).eq(target).fadeIn(300);
              }
              sliderResponse(target);
            }
            $current = null;
        });

        return $this;
    };
})(jQuery);

//
// (($) => {
//   $.fn.slider = function(){
//
//     let data = $('ul.data li');
//     let target;
//
//     data.hide().first().show();
//
//     function sliderResponse(target) {
//         data.fadeOut(300).eq(target).fadeIn(300);
//     }
//
//     $('knob').change(function() {
//         target = $('knob').offset().left();
//         sliderResponse(target);
//     });
//
//   };
//
// })(jQuery);
//

$('.knob').knob();
//$('ul.data li').slider();
