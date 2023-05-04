import {iosVhFix} from './utils/ios-vh-fix';
import {findVideos} from './modules/video/video';
import {TabsAutomatic} from './modules/tabs/tabs';
import {initPhoneMask} from './modules/phone-mask/phone-mask';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();
  findVideos();

  window.addEventListener('load', function () {
    const tablists = document.querySelectorAll('[role=tablist]');
    for (let i = 0; i < tablists.length; i++) {
      new TabsAutomatic(tablists[i]);
    }
  });

});

window.addEventListener('DOMContentLoaded', () => {

  window.addEventListener('load', () => {
    initPhoneMask();
  });
});

// ---------------------------------
