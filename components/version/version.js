'use strict';

angular.module('personal-site.version', [
  'personal-site.version.interpolate-filter',
  'personal-site.version.version-directive'
])

.value('version', '0.1');
