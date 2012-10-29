
function showDialog(title, body, cssClass){
  if(jQuery('.graybox').length){
    jQuery('.graybox').show();
  }else{
    jQuery('body').append('<div class="graybox"></div>');
  }

  var dialogBody = '<div class="dialog-body">' + body + '</div>';
  var titleBar = '<table class="title-bar" cellspacing="0" cellpadding="0"><tr><td class="title-text-cell"><h2 class="title-text">' + title + '</h2></td></tr></table>';
  var dialogHtml = '<div class="dialog ' + cssClass + '"><div class="dialog-extra-top-1"></div><div class="dialog-extra-top-2"></div><div class="dialog-extra-top-3"></div>' + titleBar + dialogBody + '<div class="extra-bottom-1"></div><div class="extra-bottom-2"></div><div class="extra-bottom-3"></div></div>';
  var dialog = jQuery(dialogHtml);

  jQuery('div.page-wrapper').append(dialog);
  var offsetTop = (jQuery(window).height() - dialog.height()) / 2;
  var offsetLeft = (jQuery(window).width() - dialog.width()) / 2;
  dialog.offset({top: offsetTop, left: offsetLeft});
}

function removeDialog(){
  jQuery('.dialog').remove();
  jQuery('.graybox').hide();
}
