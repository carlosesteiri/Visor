
            // Establecemos unas coordenadas (lat, lon) de la vista y un nivel de zoom.

            var map = L.map('map').setView([40.00, -3.00], 6);

            // Capa de  OpenStreetMap

            var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                minZoom: 0,
                attribution: '&copy; OpenStreetMap'
            }).addTo(map);
        
            // Capa de PNOA

            var pnoa= L.tileLayer.wms('http://www.ign.es/wms-inspire/pnoa-ma?', {
                layers: 'OI.MosaicElement,OI.OrthoimageCoverage',//nombre de la capa (ver get capabilities)
	            format: 'image/jpeg',
	            version: '1.3.0',//wms version (ver get capabilities)
	            attribution: "PNOA WMS. Cedido por © Instituto Geográfico Nacional de España"
	        }).addTo(map);
                
            // Capa de SIOSE

            var siose= L.tileLayer.wms('https://servicios.idee.es/wms-inspire/ocupacion-suelo?SERVICE=WMS&', {
                layers: 'LC.LandCoverSurfaces',
                format: 'image/jpeg',
                version: '1.3.0',
                attribution: "SIOSE WMS"
            }).addTo(map);

            // Control de capas

            var capasBase = {
                'OSM': osm  
            };
            
           var capasInfo = {
                'PNOA': pnoa,
                'SIOSE': siose     
            };
            
            L.control.layers(capasBase, capasInfo).addTo(map);
           
            //Barra de escala
            
            L.control.scale().addTo(map);


            





