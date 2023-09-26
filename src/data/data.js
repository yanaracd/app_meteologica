export const dataWeather = [
    { 
        id      : 0, 
        nombre  : 'stateSky', 
        seccion : 'description',
        span    : '', 
        d1      : 'M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z', 
        d2      : '' 
    },
    { 
        id      : 1, 
        nombre  : 'temperaturas', 
        seccion : 'max', 
        span    : '°C (max)', 
        d1      : 'M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415z', 
        d2      : 'M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z'
    },
    { 
        id      : 2, 
        nombre  : 'temperaturas', 
        seccion : 'min', 
        span    : '°C (min)', 
        d1      : 'M9.5 12.5a1.5 1.5 0 1 1-2-1.415V9.5a.5.5 0 0 1 1 0v1.585a1.5 1.5 0 0 1 1 1.415z', 
        d2      : 'M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z'
    }
    
]

export const dataHighlights = [
    { 
        id      : 0,
        titulo  : 'Humedad', 
        nombre  : 'humedad', 
        span    : '%', 
    },
    { 
        id      : 1,
        titulo  : 'Viento', 
        nombre  : 'viento', 
        span    : ' km/h', 
    },
    { 
        id      : 2,
        titulo  : 'Precipitación', 
        nombre  : 'precipitacion', 
        span    : '%', 
    },
    { 
        id      : 3,
        titulo  : 'Orto y Ocaso', 
        nombre  : 'pronostico', 
        seccion : 'hoy',
        atributo: '@attributes',
        orto    : 'orto',
        span    : 'ocaso',
    }
]

export const dataStateSky = {
    despejado : '/assets/stateSky/00.png',
    nubes_altas : '/assets/stateSky/01.png',
    intervalos_nubosos : '/assets/stateSky/02.png',
    poco_nuboso : '/assets/stateSky/03.png',
    nuboso_con_lluvia_escasa : '/assets/stateSky/04.png', 
    cubierto : '/assets/stateSky/05.png',
    lluvia : '/assets/stateSky/06.png',
    chubasco_con_tormenta : '/assets/stateSky/07.png',
    tormenta : '/assets/stateSky/08.png',
    fuertes_vientos : '/assets/stateSky/09.png',
    tormenta_con_granizo : '/assets/stateSky/010.png', 
    nieve : '/assets/stateSky/011.png'
}