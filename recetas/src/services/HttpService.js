/*

  ____          _____               _ _           _       
 |  _ \        |  __ \             (_) |         | |      
 | |_) |_   _  | |__) |_ _ _ __ _____| |__  _   _| |_ ___ 
 |  _ <| | | | |  ___/ _` | '__|_  / | '_ \| | | | __/ _ \
 | |_) | |_| | | |  | (_| | |   / /| | |_) | |_| | ||  __/
 |____/ \__, | |_|   \__,_|_|  /___|_|_.__/ \__, |\__\___|
         __/ |                               __/ |        
        |___/                               |___/         
    
____________________________________
/ Si necesitas ayuda, contáctame en \
\ https://parzibyte.me               /
 ------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
Creado por Parzibyte (https://parzibyte.me).
------------------------------------------------------------------------------------------------
            | IMPORTANTE |
Si vas a borrar este encabezado, considera:
Seguirme: https://parzibyte.me/blog/sigueme/
Y compartir mi blog con tus amigos
También tengo canal de YouTube: https://www.youtube.com/channel/UCroP4BTWjfM0CkGB6AFUoBg?sub_confirmation=1
Twitter: https://twitter.com/parzibyte
Facebook: https://facebook.com/parzibyte.fanpage
Instagram: https://instagram.com/parzibyte
Hacer una donación vía PayPal: https://paypal.me/LuisCabreraBenito
------------------------------------------------------------------------------------------------
*/
import Constantes from "@/Constantes";

const HttpService = {
    "formdata": async (ruta, fd) => {
        const respuestaRaw = await fetch(Constantes.URL_SERVIDOR + ruta, {
            credentials: "include",
            method: "POST",
            body: fd,
        });
        return await respuestaRaw.json();
    },
    "post": async (ruta, datos) =>
        fetch(Constantes.URL_SERVIDOR + ruta, {
            credentials: 'include',
            method: "POST",
            body: JSON.stringify(datos)
        })
            .then(r => r.json())
    ,
    "put": async (ruta, datos) =>
        fetch(Constantes.URL_SERVIDOR + ruta, {
            credentials: 'include',
            method: "PUT",
            body: JSON.stringify(datos)
        })
            .then(r => r.json())
    ,
    "get": async (ruta) =>
        fetch(Constantes.URL_SERVIDOR + ruta, {
            credentials: 'include',
        })
            .then(r => r.json())
    ,
    "delete": async (ruta) =>
        fetch(Constantes.URL_SERVIDOR + ruta, {
            credentials: 'include',
            method: "DELETE",
        })
            .then(r => r.json())
};
export default HttpService;