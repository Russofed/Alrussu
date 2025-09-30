ol.proj.proj4.register(proj4);
//ol.proj.get("").setExtent([1348429.574464, 326266.914809, 1722522.629978, 563384.359228]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_RAZGR10K_1 = new ol.format.GeoJSON();
var features_RAZGR10K_1 = format_RAZGR10K_1.readFeatures(json_RAZGR10K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_RAZGR10K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAZGR10K_1.addFeatures(features_RAZGR10K_1);
var lyr_RAZGR10K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RAZGR10K_1, 
                style: style_RAZGR10K_1,
                popuplayertitle: 'RAZGR-10K',
                interactive: true,
                title: '<img src="styles/legend/RAZGR10K_1.png" /> RAZGR-10K'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_RAZGR10K_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_RAZGR10K_1];
lyr_RAZGR10K_1.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'NUMBER': 'NUMBER', 'верхняя': 'верхняя', 'нижняя': 'нижняя', 'левая': 'левая', 'правая': 'правая', });
lyr_RAZGR10K_1.set('fieldImages', {'id': '', 'left': '', 'top': '', 'right': '', 'bottom': '', 'NUMBER': '', 'верхняя': '', 'нижняя': '', 'левая': '', 'правая': '', });
lyr_RAZGR10K_1.set('fieldLabels', {'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'NUMBER': 'header label - always visible', 'верхняя': 'no label', 'нижняя': 'no label', 'левая': 'no label', 'правая': 'no label', });
lyr_RAZGR10K_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});