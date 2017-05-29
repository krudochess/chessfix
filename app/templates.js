angular.module('app').run(['$templateCache', function($templateCache) {$templateCache.put('app/components/home/home.html','\n<div class="container-fluid">\n\n</div>\n\n\n\n\n');
$templateCache.put('app/components/layout/layout.html','\n<div id="layout-container" class="container-fluid">\n    <div class="row">\n        <!--div class="col-md-9">\n            <div ui-view />\n        </div-->\n        <div class="col-md-4">\n            <div id="mainboard" style="width: auto"></div>\n        </div>\n        <div class="col-md-5">\n            <pre id="terminal">Wellcome to Chessfix</pre>\n        </div>\n        <div id="navigator-column" class="col-md-3">\n            <navigator/>\n        </div>\n    </div>\n</div>\n\n\n');
$templateCache.put('app/components/navigator/navigator.html','<div id="navigator-container">\n    <form>\n\n        <div class="form-group">\n            <label>Script</label>\n            <select\n                class="form-control"\n                ng-model="$root.currentScript"\n                ng-options="k for (k, v) in $root.setting.scripts"\n                >\n            </select>\n        </div>\n\n        <div class="form-group">\n            <label>EPD File</label>\n            <select\n                class="form-control"\n                ng-model="$root.currentEpd"\n                ng-options="k as v for (k, v) in $root.setting.epd"\n                ng-change="$root.loadCurrentPositions()"\n                >\n            </select>\n        </div>\n\n        <div class="form-group">\n            <label>Position</label>\n            <select\n                class="form-control"\n                ng-model="$root.currentPosition"\n                ng-options="p as p.id + \' (bm: \' + p.bm + \')\' for p in $root.currentPositions"\n                >\n            </select>\n        </div>\n\n    </form>\n</div>');}]);