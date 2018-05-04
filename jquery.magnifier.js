jQuery.fn.magnifier=function(o) {
 o=jQuery.extend({region:{h:20, w:20}, magnify:5, display:false}, o);
 n=jQuery(this).filter('img:not(.mgnfr-wrapped)');
 n.each(function() {
  k=jQuery(this);
  k.addClass('mgnfr-wrapped');
  d={y:k.height(), x:k.width()};
  k.wrap('<span class="mgnfr-wrapper" style="position:relative;display:inline-block;height:'+d.y+'px;width:'+d.x+';overflow:hidden;"></span>');
  w=k.parent();
  w.data('o', o);
  w.append('<div class="mgnfr-region" style="display:none;height:'+o.region.h+';width:'+o.region.w+';background-color:rgba(128, 128, 128, .5);outline:1px solid rgb(200, 200, 200);position:absolute;z-index:3;"></div>');
  r=jQuery('.mgnfr-region', w).data('w', o.region.w).data('h', o.region.h);
  if(o.display==false) {
   w.wrap('<span class="mgnfr-dblwrap"></span>');
   dw=w.parent();
   dw.append('<div class="mgnfr-portal" style="overflow:hidden;display:none;height:'+(o.region.h*o.magnify)+';width:'+(o.region.w*o.magnify)+';"></div>');
   jQuery('.mgnfr-portal', dw).html(k.clone().height((d.y*o.magnify)).width((d.x*o.magnify)).css('transition', 'all 100ms linear'));
  }
  w.mouseenter(function() {
   jQuery('.mgnfr-region', this).fadeIn(200);
   o=jQuery(this).data('o');
   if(o.display==false) {
    jQuery(this).siblings('.mgnfr-portal').fadeIn(200);
   } else {
    ds=jQuery(o.display);
	k=jQuery('.mgnfr-wrapped', this);
	ds.html('<div class="mgnfr-portal" style="overflow:hidden;display:none;height:'+(o.region.h*o.magnify)+';width:'+(o.region.w*o.magnify)+';"></div>');
	jQuery('.mgnfr-portal', ds).html(k.clone().height((k.height()*o.magnify)).width((k.width()*o.magnify)).css('transition', 'all 100ms linear').removeClass('mgnfr-wrapped')).fadeIn(200);
   }
  });
  w.mousemove(function(e) {
   o=jQuery(this).data('o');
   cx=(e.pageX-jQuery(this).offset().left);
   cy=(e.pageY-jQuery(this).offset().top);
   rx=cx-jQuery('.mgnfr-region', this).data('w')/2;
   ry=cy-jQuery('.mgnfr-region', this).data('h')/2;
   if(rx<0) {
    rx=0;
   } else if((rx+jQuery('.mgnfr-region', this).data('w'))>jQuery(this).width()) {
    rx=(jQuery(this).width()-jQuery('.mgnfr-region', this).data('w'));
   }
   if(ry<0) {
    ry=0;
   } else if((ry+jQuery('.mgnfr-region', this).data('h'))>jQuery(this).height()) {
    ry=(jQuery(this).height()-jQuery('.mgnfr-region', this).data('h'));
   }
   jQuery('.mgnfr-region', this).css({'top':ry, 'left':rx});
   if(o.display==false) {
    s=jQuery(this).siblings('.mgnfr-portal');
   } else {
    s=jQuery('.mgnfr-portal', o.display);
   }
   jQuery('img', s).css({'position':'relative', 'top':-(ry*o.magnify), 'left':-(rx*o.magnify)});
  });
  w.mouseleave(function() {
   jQuery('.mgnfr-region', this).fadeOut(200);
   o=jQuery(this).data('o');
   if(o.display==false) {
    jQuery(this).siblings('.mgnfr-portal').fadeOut(200);
   } else {
    ds=jQuery(o.display);
	jQuery('.mgnfr-portal', ds).fadeOut(200, function() {jQuery(this).remove();});
   }
  });
 });
 return jQuery(this);
}
jQuery.fn.removeMagnifier=function() {
 jQuery(this).filter('.mgnfr-wrapped').each(function() {
  jQuery(this).siblings('.mgnfr-region').remove();
  if(jQuery(this).parent().data('o').display!=false) {
   jQuery(this).unwrap();
  } else {
   jQuery(this).parent().siblings('.mgnfr-portal').remove();
   jQuery(this).parent().unwrap();
   jQuery(this).unwrap();
  }
  jQuery(this).removeClass('mgnfr-wrapped');
 });
 return jQuery(this);
}
