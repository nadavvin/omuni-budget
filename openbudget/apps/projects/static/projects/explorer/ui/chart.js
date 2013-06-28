define([
    'uijet_dir/uijet',
    'project_widgets/TimelineChart',
    'controllers/TimelineChart'
], function (uijet) {

    return [{
        type    : 'TimelineChart',
        config  : {
            element         : '#chart',
            mixins          : ['Layered', 'Transitioned'],
            adapters        : ['TimelineChart'],
            resource        : 'TimeSeries',
            dont_wake       : true,
            position        : 'fluid',
            animation_type  : 'fade',
            data_events     : {},
            app_events      : {
                'picker_done.clicked'   : 'wake'
            }
        }
    }];

});
