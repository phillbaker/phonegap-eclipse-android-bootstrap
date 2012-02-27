/* Author: 
  Phill Baker
*/

// $(function() {
//   //onload stuff
// });

// Wait for PhoneGap to load
//
document.addEventListener("deviceready", onDeviceReady, false);

/**
 * PhoneGap is ready
 **/
function onDeviceReady() {
  // Register event listeners
  document.addEventListener("menubutton", onMenuKeyDown, false);
  document.addEventListener("searchbutton", onSearchKeyDown, false);
}

/**
 * Handle the menu button
 **/
function onMenuKeyDown() {
  //TODO: pop up menu to edit app settings/switch views/etc.
  showAlert('Menu');
}

// Handle the search button
//
function onSearchKeyDown() {
  //TODO: pop up menu to edit app settings/switch views/etc.
  showAlert('Search');
}

//
//Demo functions
//

// alert dialog dismissed
function alertDismissed() {
    //no-op
}

// Show a custom alert
//
function showAlert(msg) {
    navigator.notification.alert(
        msg,  // message
        alertDismissed,         // callback
        'Something happene',            // title
        'Done'                  // buttonName
    );
}
