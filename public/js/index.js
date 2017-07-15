$(function(){
  $("#slides").slidesjs({
    width: 940,
    height: 628,
    play: {
      interval: 3000,
      auto: true,
      swap: true
    },
    pagination: {
      active: false
    },
    navigation: {
      active: false,
      effect: "fade"
    }
  });
});