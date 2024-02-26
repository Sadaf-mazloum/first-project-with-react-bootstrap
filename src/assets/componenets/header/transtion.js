import mojs from '@mojs/core'

// new mojs.Shape({
//     parent:       '#then',
//     shape:          'circle',
//     fill:           'none',
//     stroke:         '#52be80',
//     radius:         10,
//     strokeWidth:    29,
  
  
//     duration:       800
//   }).then({
//     strokeWidth:    30,
//     scale:          { to:3, easing: 'sin.in' },
//   });
  


// AOS.init();

// تعریف تابع جاوا اسکریپت برای فعال کردن تابع mojs
export function activateMojs() {
  new mojs.Shape({
  parent:       '#then',
  shape:        'circle',
  fill:         'none',
  stroke:       '#52be80',
  radius:       10,
  strokeWidth:  29,
  duration:     800
  }).then({
  strokeWidth:  30,
  scale:        { to:3, easing: 'sin.in' },
  }).play(); // اجرای تابع mojs
  }
  
  