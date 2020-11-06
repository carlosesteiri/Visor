            proj4.defs("EPSG:25830", "+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");

            ol.proj.proj4.register(proj4);

            var projection = new ol.proj.Projection({
                  code: 'EPSG:25830', 
                  units: 'm'
                  })
            var proj25830 = ol.proj.get('EPSG:25830');
            
            // Capa de  OpenStreetMap
            
            var osm = 
              new ol.layer.Tile({
                  title: 'OSM',
                  source: new ol.source.OSM()
                });
            
            
            // Capa de PNOA
            
            var pnoa =
              new ol.layer.Image({
                  title: 'PNOA',
                  source: new ol.source.ImageWMS({
                    url: 'http://www.ign.es/wms-inspire/pnoa-ma',
                    params: {'LAYERS':'OI.MosaicElement,OI.OrthoimageCoverage'},
                    visible: true,
                  })
                });
            
            // Capa de SIOSE

            var SIOSE =
                new ol.layer.Image({
                    title: 'SIOSE',
                    opacity: 0.5,
                    source: new ol.source.ImageWMS({
                      url: 'http://servicios.idee.es/wms-inspire/ocupacionsuelo',
                      params: {'LAYERS': 'LU.ExistingLandUse,LC.LandCoverSurfaces',
                      },
                      visible: true,
                    })
                  });      
            

            // Agrupacion capas  
        
            var capasBase = 
              new ol.layer.Group({
                 title: 'Capas Base',
                 layers: [osm]
      });

            var capasInfo = 
              new ol.layer.Group({
                 title: 'Capas Info',
                 layers: [pnoa,SIOSE]
      });
            
            
            // Caracteristicas del mapa

            var map = new ol.Map({
                    layers: [capasBase, capasInfo],
                    target: 'map',
                    view: new ol.View({
                    center: [430927 , 4490382],
                    zoom: 6,
                    projection: new ol.proj.Projection({
                        code: 'EPSG:25830', 
                        units: 'm'
                    }),
                  }),







            // Controles de mapa

                    controls: [
                    new ol.control.ZoomSlider(),
                    new ol.control.Zoom(),
                    new ol.control.ScaleLine(),
                   ]
                 });
        
            
            
            var layerSwitcher = new ol.control.LayerSwitcher({
                   tipLabel: 'Leyenda'
                    });
             map.addControl(layerSwitcher);
             
      
            
            
            
            
            
            
            
            
            
            


            
            
           
            


            





