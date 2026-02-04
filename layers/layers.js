ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-9804988.479305, 5091799.608664, -9697559.809708, 5178359.132732]);
var wms_layers = [];


        var lyr_MapboxSatellite_0 = new ol.layer.Tile({
            'title': 'Mapbox - Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.maxar.com/">© Maxar</a>',
                url: 'https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.webp?sku=101ifSAcKcVFs&access_token=pk.eyJ1IjoidW5mb2xkZWRpbmMiLCJhIjoiY2s5ZG90MjMzMDV6eDNkbnh2cDJvbHl4NyJ9.BT2LAvHi31vNNEplsgxucQ'
            })
        });
var format_CityBoundaries_1 = new ol.format.GeoJSON();
var features_CityBoundaries_1 = format_CityBoundaries_1.readFeatures(json_CityBoundaries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CityBoundaries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CityBoundaries_1.addFeatures(features_CityBoundaries_1);
var lyr_CityBoundaries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CityBoundaries_1, 
                style: style_CityBoundaries_1,
                popuplayertitle: 'City Boundaries',
                interactive: false,
                title: '<img src="styles/legend/CityBoundaries_1.png" /> City Boundaries'
            });
var format_2025_2 = new ol.format.GeoJSON();
var features_2025_2 = format_2025_2.readFeatures(json_2025_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2025_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2025_2.addFeatures(features_2025_2);
var lyr_2025_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2025_2, 
                style: style_2025_2,
                popuplayertitle: '2025',
                interactive: true,
    title: '2025<br />\
    <img src="styles/legend/2025_2_0.png" /> 0 - 1<br />\
    <img src="styles/legend/2025_2_1.png" /> 1 - 2<br />\
    <img src="styles/legend/2025_2_2.png" /> 2 - 3<br />\
    <img src="styles/legend/2025_2_3.png" /> 3 - 4<br />\
    <img src="styles/legend/2025_2_4.png" /> 4 - 5<br />\
    <img src="styles/legend/2025_2_5.png" /> 5 - 6<br />\
    <img src="styles/legend/2025_2_6.png" /> 6 - 7<br />\
    <img src="styles/legend/2025_2_7.png" /> 7 - 8<br />\
    <img src="styles/legend/2025_2_8.png" /> 8 - 9<br />\
    <img src="styles/legend/2025_2_9.png" /> 9 - 10<br />\
    <img src="styles/legend/2025_2_10.png" /> 10 - 11<br />\
    <img src="styles/legend/2025_2_11.png" /> 11 - 12<br />' });
var format_Markets_3 = new ol.format.GeoJSON();
var features_Markets_3 = format_Markets_3.readFeatures(json_Markets_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Markets_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Markets_3.addFeatures(features_Markets_3);
var lyr_Markets_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Markets_3, 
                style: style_Markets_3,
                popuplayertitle: 'Markets',
                interactive: true,
                title: '<img src="styles/legend/Markets_3.png" /> Markets'
            });

lyr_MapboxSatellite_0.setVisible(true);lyr_CityBoundaries_1.setVisible(true);lyr_2025_2.setVisible(true);lyr_Markets_3.setVisible(true);
var layersList = [lyr_MapboxSatellite_0,lyr_CityBoundaries_1,lyr_2025_2,lyr_Markets_3];
lyr_CityBoundaries_1.set('fieldAliases', {'_id': '_id', '_version': '_version', '_created_a': '_created_a', '_updated_a': '_updated_a', 'objectid': 'objectid', 'zip': 'zip', 'shape_area': 'shape_area', 'shape_len': 'shape_len', });
lyr_2025_2.set('fieldAliases', {'fid': 'fid', '_id': '_id', 'zip': 'zip', 'shape_area': 'shape_area', 'shape_len': 'shape_len', 'count': 'count', 'percentage': 'percentage', });
lyr_Markets_3.set('fieldAliases', {'Market': 'Market', 'Address': 'Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_CityBoundaries_1.set('fieldImages', {'_id': 'TextEdit', '_version': 'TextEdit', '_created_a': 'TextEdit', '_updated_a': 'TextEdit', 'objectid': 'TextEdit', 'zip': 'TextEdit', 'shape_area': 'TextEdit', 'shape_len': 'TextEdit', });
lyr_2025_2.set('fieldImages', {'fid': 'TextEdit', '_id': 'TextEdit', 'zip': 'TextEdit', 'shape_area': 'TextEdit', 'shape_len': 'TextEdit', 'count': 'TextEdit', 'percentage': 'TextEdit', });
lyr_Markets_3.set('fieldImages', {'Market': 'TextEdit', 'Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_CityBoundaries_1.set('fieldLabels', {'_id': 'no label', '_version': 'no label', '_created_a': 'no label', '_updated_a': 'no label', 'objectid': 'no label', 'zip': 'no label', 'shape_area': 'no label', 'shape_len': 'no label', });
lyr_2025_2.set('fieldLabels', {'fid': 'hidden field', '_id': 'hidden field', 'zip': 'inline label - visible with data', 'shape_area': 'hidden field', 'shape_len': 'hidden field', 'count': 'inline label - visible with data', 'percentage': 'inline label - visible with data', });
lyr_Markets_3.set('fieldLabels', {'Market': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_Markets_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});