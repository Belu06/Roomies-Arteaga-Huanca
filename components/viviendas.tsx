
// Lista de viviendas
viviendas = [
    {"ubicacion": "Centro", "precio": 120000, "habitaciones": 3},
    {"ubicacion": "Suburbios", "precio": 90000, "habitaciones": 2},
    {"ubicacion": "Centro", "precio": 150000, "habitaciones": 4},
    {"ubicacion": "Suburbios", "precio": 75000, "habitaciones": 1},
]

// Función de búsqueda
def buscar_viviendas(ubicacion, precio_max, habitaciones_min):
    resultados = []
    for vivienda in viviendas:
        if (vivienda["ubicacion"] == ubicacion and 
            vivienda["precio"] <= precio_max and 
            vivienda["habitaciones"] >= habitaciones_min):
            resultados.append(vivienda)
    return resultados

//Ejemplo de uso
ubicacion_buscada = "Centro"
precio_maximo = 130000
habitaciones_minimas = 3

viviendas_encontradas = buscar_viviendas(ubicacion_buscada, precio_maximo, habitaciones_minimas)

// Mostrar resultados
print("Viviendas encontradas:")
for vivienda in viviendas_encontradas:
    print(vivienda)