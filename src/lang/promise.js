/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define((require, exports, module) => {

  'use strict';

  exports.fromDOMRequest = request => new Promise((resolve, reject) => {
    request.onsuccess = event => resolve(request.result);
    request.onerror = event => reject(request.error.name);
  });

  exports.fromEvent = (target, type, capture=false) => new Promise((resolve, reject) => {
    target.addEventListener(type, {
      handleEvent(event) {
        target.removeEventListener(type, this, capture);
        resolve(event);
      }
    }, capture);
  });

});
