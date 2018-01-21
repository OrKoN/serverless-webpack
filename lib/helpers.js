'use strict';

function canBeHandledByWebpack(func) {
  return !func.runtime || /^nodejs/.test(func.runtime);
}

module.exports = {
  canBeHandledByWebpack,
};