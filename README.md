# Next.js / Material-Ui

```
Proyecto de referencia:
https://github.com/mui-org/material-ui/tree/next/examples/nextjs

```

# Chile-compra

Instalacion:
```
git clone https://github.com/yogparra/chile-compra.git
cd chile-compra.git
npm i
npm run dev
```

# Observaciones

Apis Emulada:

```
  Dada la intermitencia de la api, se emuló su contenido, esto se configura en el .env.development

  #LOCAL
  NEXT_PUBLIC_ENV_HOST_1="http://localhost:3000/api/dumyPaises"
  NEXT_PUBLIC_ENV_HOST_2="http://localhost:3000/api/dumyUnPais"
```

Apis Publica

```
  Se configura en el .env.development

  #PUBLIC
  NEXT_PUBLIC_ENV_HOST_1="https://api.covid19api.com/summary"
  NEXT_PUBLIC_ENV_HOST_2="https://api.covid19api.com/country"
```

# Deploy

Sitio: Azure

```
  https://chile-compra.azurewebsites.net
```
# Imagenes

<p align="center">
  <img src="https://github.com/yogparra/chile-compra/blob/dev/img/listado_paises_prd.PNG?raw=true" width="350" title="todos los paises">
  <img src="https://github.com/yogparra/chile-compra/blob/dev/img/detalle_de_un_pais_prd.PNG?raw=true" width="350" title="detalle de un pais">
</p>