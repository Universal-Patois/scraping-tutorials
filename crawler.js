const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://lugares.inah.gob.mx/en/zonas-arqueologicas.html?zonas_estado_busqueda=&zonas_cultura_busqueda=&zona_buscar_general=&zona_toponimia_2=&zona_sabias=&zona_resumen=&zona_estado=&zona_titulo=&zona_clave_zona=&zona_patrimonio_mundial=&zona_toponimia=&zona_periodo=&zona_region=&lugar_id=&zonas_numero_of=190%20sites&cck=zonas&search=zonas_mosaico&task=search&start=1')
  .then((response) => {
    const $ = cheerio.load(response.data);

    const links = [];

    $('a[title="Ver detalle"]').each((index, element) => {
      const text = $(element).text();
      links.push(text);
    });

    console.log(links);
  })
  .catch((error) => {
    console.error(error);
  });
