jQuery.Magnifier
================

Create a magnifying glass for images (similar to what is used on eBay).

## Initialize magnifier

    $('img').magnifier(options);
    $('img').magnifier();
    $('img').magnifier({magnify:10, display:'#display', region:{h:39, w:39}});
    
## Options
* **magnify** - Amount to magnify by. Integer. Defaults to 5.
* **display** - A selector or jQuery element that you wish to use to display the magnified images. Defaults to false.
* **region** - This defines the width and height of the "magnifying glass" (dubbed the region). Should be defined as an object with properties "h" (for height) and "w" (for width) having defined integers. Defaults to the height and width being 20px.

The resulting display's size can be found by multipliying the region's dimensions by the magnify integer.

The region will disappear once a user moves their cursor off of the image. The display portal, wherever that is, will also disappear.

## Before magnifier

    <img src="elcoloso.jpg">
    
## After magnifier (with display false)

    <span class="mgnfr-dblwrap">
     <span class="mgnfr-wrapper" style="position:relative;display:inline-block;height:110px;width:100;overflow:hidden;">
      <img src="elcoloso.jpg" class="mgnfr-wrapped">
      <div class="mgnfr-region" style="height: 38.7px; width: 38.7px; background-color: rgba(128, 128, 128, 0.498039); outline: rgb(200, 200, 200) solid 1px; position: absolute; z-index: 3; top: 0px; left: 0px;"></div>
     </span>
     <div class="mgnfr-portal" style="overflow: hidden; height: 387px; width: 387px;">
      <img src="elcoloso.jpg" class="mgnfr-wrapped" style="height: 1100px; width: 1000px; transition: all 100ms linear; -webkit-transition: all 100ms linear; position: relative; top: 0px; left: 0px;">
     </div>
    </span>
    
## After magnifier (with display defined)

Around img element:

    <span class="mgnfr-wrapper" style="position:relative;display:inline-block;height:110px;width:100;overflow:hidden;">
     <img src="elcoloso.jpg" class="mgnfr-wrapped">
     <div class="mgnfr-region" style="height: 38.7px; width: 38.7px; background-color: rgba(128, 128, 128, 0.498039); outline: rgb(200, 200, 200) solid 1px; position: absolute; z-index: 3; top: 0px; left: 0px;"></div>
    </span>

Inside of display (only when currently magnifying):

    <div id="display">
     <div class="mgnfr-portal" style="overflow: hidden; height: 387px; width: 387px;">
      <img src="elcoloso.jpg" style="height: 1100px; width: 1000px; transition: all 100ms linear; -webkit-transition: all 100ms linear; position: relative; top: 0px; left: 0px;">
     </div>
    </div>

## Remove magnifier

    $('img').removeMagnifier();
    
## License: Public Domain
Please don't rename it or change credit away from me, James Anthony Bruno, because that would make me sad. It is fine, however, to make changes to Magnifier's core to suit your needs for use in your products (whether commercial, personal, or non-profit). If you believe you've found a better way for Magnifier to work, go ahead and message me and let me know! I would love to implement your fix. 
