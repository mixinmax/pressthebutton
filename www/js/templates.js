angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("tab-button.html","<ion-view view-title=\"Button\">\n  <ion-content class=\"padding\" scroll=\"false\">\n    <div id=\"thebutton_row\" class=\"row row-bottom\">\n      <div id=\"thebutton_div\" class=\"col-center\">\n        <button id=\"thebutton\" class=\"button button-block \" ng-click=\"coin_drop()\">Press the Button</button>\n      </div>\n    </div>\n    <div id=\"coin_xp_row\" class=\"row\">\n      <div class=\"col col-20\">\n        <div id=\"coins_div \">\n          <i id=\"coins_icon\" class=\"icon ion-cube\"></i><span id=\"coins\">{{num_coins}}</span>\n        </div>\n        <div id=\"lvl_div\">\n          <span id=\'lvl\'>LVL: 1</span>\n        </div>\n      </div>\n      <div class=\"col col-80\">\n        <div class=\"progress\">\n          <div class=\"progress-bar\" style=\"width: 25%\">\n            <span id=\"xp\">XP: 345</span>\n          </div>\n        </div>\n        </div>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("tab-rankings.html","<ion-view view-title=\"Rankings\">\n  <ion-content id=\"rankings-page\" class=\"padding\">\n\n    <div class=\"row\">\n      <div class=\"col\">\n        <button\n          class=\"button button-clear\"\n          ng-click=\"most_presses()\"\n          ng-class=\"is_most_presses ? \'trophy-button-active\' : \'trophy-button\'\">\n            Most Button Presses\n        </button>\n      </div>\n      <div class=\"col\">\n        <button\n          class=\"button button-clear\"\n          ng-click=\"most_trophies()\"\n          ng-class=\"!is_most_presses ? \'trophy-button-active\' : \'trophy-button\'\">\n          Most Trophies\n        </button>\n      </div>\n    </div>\n\n    <div class=\"list card\" ng-show=\"is_most_presses\">\n      <div class=\"item item-divider\">Most Button Presses</div>\n      <div class=\"item item-body\">\n        <div class=\"ranking\">\n          <span class=\"ranking-left\">1.</span>\n          <span class=\"ranking-center\">username1</span>\n          <span class=\"ranking-right\">9765896754</span>\n        </div>\n      </div>\n      </div>\n    </div>\n\n    <div class=\"list card\" ng-show=\"!is_most_presses\">\n      <div class=\"item item-divider\">Most Trophies</div>\n      <div class=\"item item-body\">\n        <div class=\"ranking\">\n          <span class=\"ranking-left\">1.</span>\n          <span>username2</span>\n          <span class=\"ranking-right\">7754</span>\n        </div>\n      </div>\n    </div>\n\n\n  </ion-content>\n</ion-view>\n");
$templateCache.put("tab-settings.html","<ion-view view-title=\"Settings\">\n  <ion-content class=\"padding\">\n    <div class=\"list card\">\n      <div class=\"item item-divider\">Your info</div>\n      <div class=\"item item-body\">\n        <div>\n          <span class=\"account-left\">Name</span>\n          <span class=\"account-right\">Harifurifa Bubblegum</span>\n        </div>\n      </div>\n      <div class=\"item item-body\">\n        <div>\n          <span class=\"account-left\">Email</span>\n          <span class=\"account-right\">hahaha@test.com</span>\n        </div>\n      </div>\n    <div class=\"item item-body\">\n      <div>\n        <span class=\"account-left\">Change Password</span>\n        <span class=\"account-right\"><i class=\"icon ion-chevron-right\"></i></span>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"settings-toggles\"class=\"list card\">\n    <div class=\"item item-divider\">Settings</div>\n    <div class=\"item item-body\">\n      <div>\n        <span class=\"account-left\">Setting 1</span>\n        <span class=\"account-right\"><ion-toggle toggle-class=\"toggle-positive\"></ion-toggle></span>\n      </div>\n    </div>\n    <div class=\"item item-body\">\n      <div>\n        <span class=\"account-left\">Setting 2</span>\n        <span class=\"account-right\"><ion-toggle toggle-class=\"toggle-positive\"></ion-toggle></span>\n      </div>\n    </div>\n  <div class=\"item item-body\">\n    <div>\n      <span class=\"account-left\">Setting 3</span>\n      <span class=\"account-right\"><ion-toggle toggle-class=\"toggle-positive\"></ion-toggle></span>\n    </div>\n  </div>\n</div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("tab-statistics.html","<ion-view view-title=\"Account\">\n  <ion-content id=\"account-page\" class=\"padding\">\n\n    <div class=\"list card\">\n      <div class=\"item item-divider\">Statistics</div>\n      <div class=\"item item-body\">\n        <div>\n          <span class=\"account-left\">Number of Button Presses</span>\n          <span class=\"account-right\">8764</span>\n        </div>\n      </div>\n      <div class=\"item item-body\">\n        <div>\n          <span class=\"account-left\">Average Button Presses per Day</span>\n          <span class=\"account-right\">72</span>\n        </div>\n      </div>\n      <div class=\"item item-body\">\n        <div>\n          <span class=\"account-left\">Number of Trophies</span>\n          <span class=\"account-right\">14</span>\n        </div>\n      </div>\n      <div class=\"item item-body\">\n        <div>\n          <span class=\"account-left\">Distribution of Trophies</span>\n          <span class=\"account-right\">1<i class=\"icon ion-trophy gold\"></i> 3<i class=\"icon ion-trophy silver\"></i> 10 <i class=\"icon ion-trophy bronze\"></i></span>\n        </div>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("tab-trophies.html","<ion-view view-title=\"Trophies\">\n  <ion-content id=\"trophy-page\" class=\"padding\">\n    <!-- <ion-refresher pulling-text=\"Pull to refresh...\" on-refresh=\"doRefresh()\"></ion-refresher> -->\n    <div class=\"row\">\n      <div class=\"col\">\n        <button\n          class=\"button button-clear\"\n          ng-click=\"present_trophies()\"\n          ng-class=\"is_present_trophies ? \'trophy-button-active\' : \'trophy-button\'\">\n            Your Trophies\n        </button>\n      </div>\n      <div class=\"col\">\n        <button\n          class=\"button button-clear\"\n          ng-click=\"future_trophies()\"\n          ng-class=\"!is_present_trophies ? \'trophy-button-active\' : \'trophy-button\'\">\n          Trophies to acquire\n        </button>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col col-100\">\n        <div ng-repeat=\"trophy in trophies\" ng-show=\"is_present_trophies\">\n          <div\n            class=\"list card\"\n            ng-show=\"trophy.acquired\">\n            <div class=\"item item-divider\">{{trophy.title}}</div>\n            <div class=\"item item-body\">\n              <div class=\"num_trophies\"ng-if=\"is_present_trophies\">\n                {{trophy.number}}x\n              </div>\n              <div class=\"ion-trophy-div\">\n                <i class=\"icon ion-trophy {{trophy.color}}\"></i>\n              </div>\n              <div>\n                {{trophy.description}}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col col-100\">\n        <div ng-repeat=\"trophy in trophies\" ng-show=\"!is_present_trophies\">\n          <div class=\"list card\" ng-hide=\"trophy.acquired\">\n            <div class=\"item item-divider\">{{trophy.title}}</div>\n            <div class=\"item item-body\">\n              <div class=\"num_trophies\"ng-if=\"is_present_trophies\">\n                {{trophy.number}}x\n              </div>\n              <div class=\"ion-trophy-div\">\n                <i class=\"icon ion-trophy {{trophy.color}}\"></i>\n              </div>\n              <div>\n                {{trophy.description}}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("tabs.html","\n<ion-tabs class=\"tabs-icon-top tabs-color-active-positive\">\n\n  <ion-tab title=\"Button\" icon-off=\"ion-android-radio-button-on\" icon-on=\"ion-android-radio-button-on\" href=\"#/tab/button\">\n    <ion-nav-view name=\"tab-button\"></ion-nav-view>\n  </ion-tab>\n\n  <ion-tab title=\"Trophies\" icon-off=\"ion-trophy\" icon-on=\"ion-trophy\" href=\"#/tab/trophies\">\n    <ion-nav-view name=\"tab-trophies\"></ion-nav-view>\n  </ion-tab>\n\n  <ion-tab title=\"Statistics\" icon-off=\"ion-stats-bars\" icon-on=\"ion-stats-bars\" href=\"#/tab/statistics\">\n    <ion-nav-view name=\"tab-statistics\"></ion-nav-view>\n  </ion-tab>\n\n  <ion-tab title=\"Rankings\" icon-off=\"ion-arrow-graph-up-right\" icon-on=\"ion-arrow-graph-up-right\" href=\"#/tab/rankings\">\n    <ion-nav-view name=\"tab-rankings\"></ion-nav-view>\n  </ion-tab>\n\n  <ion-tab title=\"Settings\" icon-off=\"ion-android-settings\" icon-on=\"ion-android-settings\" href=\"#/tab/settings\">\n    <ion-nav-view name=\"tab-settings\"></ion-nav-view>\n  </ion-tab>\n\n</ion-tabs>\n");}]);