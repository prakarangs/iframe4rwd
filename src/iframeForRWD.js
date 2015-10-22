/**
 * iFrame Resizer for Responsive Web
 * Plugin name    : iframe4rwd
 * Author         : Kaowfang
 * Date           :
 */
var flexStaticContainer = document.getElementsByClassName('flex-main-static'),
    flexNestWrapper     = document.getElementsByClassName('flex-nest-wrapper');

// Function to set Attribute content height ot HTML
function setAttrContentHeight(scrollH) {
  $html.attr('data-content-height', scrollH);
  window.frameElement.style.height = scrollH + 'px';
}

// Update <main> height from its container
function updateMainSize() {
  var registerContainerHeight    = document.getElementsByClassName('js-container')[0].scrollHeight,
      mainContainer              = document.getElementsByTagName('main')[0];

  if($html.hasClass('Browser-Firefox') || $html.hasClass('Browser-IE') || $html.hasClass('Browser-Edge')) {
    mainContainer.style.cssText = null;
    mainContainer.style.height = registerContainerHeight + 'px';
  } else {
    mainContainer.style.cssText = null;
    mainContainer.style.height = (registerContainerHeight + 65) + 'px';
  }
}

// Update iFramesize
function iFrameResizeUpdate() {
  if (flexStaticContainer.length > 0) {
    // Call update main Size
    updateMainSize();
    // Detect new main scrollheight
    var newStaticArea   = flexStaticContainer[0].scrollHeight;
    // Reset attr height
    $html.removeAttr('data-content-height');
    setAttrContentHeight(newStaticArea);
  } else {
    $html.removeAttr('data-content-height');
  }
}

// Initialize iFrame Resizer
function iframeResizeInit() {
  if (flexStaticContainer.length > 0) {
    var flexStaticArea      = flexStaticContainer[0].scrollHeight;
    setAttrContentHeight(flexStaticArea);
  } else {
    var flexNestArea      = flexNestWrapper[0].scrollHeight;
    setAttrContentHeight(flexNestArea);
  }
}

// Call iFrame update for Desktop
// This to be call whenever the action effect content height i.e., error-text, accordion etc.
function calliFrameUpdate() {
  if($('html').hasClass('Device-desktop')) {
    iFrameResizeUpdate();
  }
}