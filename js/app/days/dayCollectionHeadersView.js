/*
Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
define(function(require, exports, module) {

    var appRouter = require('app/appRouter');
    var DayHeaderView = require('app/days/dayHeaderView');
    var CollectionDetailsView = require('app/components/collectionDetailsView');
    
    var DayCollectionHeadersView = CollectionDetailsView.extend({
        DetailsView: DayHeaderView,
        routeId: 'sessionCollection',
        className: 'topcoat-titles-wrap',
        allowRestore: true,
		initialize: function() {
		    // call super
		    // CollectionDetailsView.prototype.initialize.apply(this, arguments);
		    var _this = this;
		    
		    appRouter.on('route', function(route, itemId) {
		        if( route == this.routeId ) {
		            var dayId = itemId[0];
		            //this.currentItem;
		            this.navigateTo(dayId);
		        }
		    }, this);

			var documentPointerUp = function(jqEvt) {
                if( _this.el.parentNode ) {
                    _this.pointerUp.call(_this, jqEvt);
                }
            };
		    
			$(document).on({
			    pointerleave: documentPointerUp,
			    pointerup: documentPointerUp
			});
		}
    });
    
    return DayCollectionHeadersView;
});
