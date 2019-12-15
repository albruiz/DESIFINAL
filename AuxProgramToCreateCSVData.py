# read csv File, to rewrite it in a new one with just data of years from 0-9,10-19,20-29,30-39,40-49,50-59,60-69,70-79,80-89,90-99,100+

def leerFichero(ruta, pais):
    file = open(ruta, 'r')
    datos = file.readlines()
    file.close()
    vector = []
    vectorFinal = []
    ultimos = []
    for caracter in datos:
        vector.append(caracter)
    filas = []
    for j in vector :
        for i in j.split(','):
            if '\n' not in i and i != pais :
                filas.append(int(i))
            elif i != pais :
                vectorFinal.append(filas)
                ultimos.append(int(i.replace("\n", "")))
                filas = []

    vectorFinal.append(ultimos)
    return vectorFinal


def escribirFichero(vector, pais, vectorultimos):
    file = open("nuevo.txt", "w")
    anyo = 1950
    for i in range(len(vector)):
        file.write(pais +','+str(anyo)+',')
        for j in vector[i]:
            if vector[i].index(j) == 0 :
                file.write(str(j))
            else:
                file.write(',' + str(j))
        file.write(','+str(vectorultimos[i])+'\n')
        anyo = anyo + 5

pais = 'WesternEurope'
vectorDatos = leerFichero('intermedioData.txt', pais)
vectorultimos = vectorDatos[len(vectorDatos) - 1]
vectorDatos.pop(len(vectorDatos)-1)
vectorSolucion = []
for i in vectorDatos:
    vectorInter = []
    auxiliar = 0
    for j in range(len(i)):
        if j % 2 != 0:
            auxiliar = i[j-1] + i[j]
            vectorInter.append(auxiliar)
    vectorSolucion.append(vectorInter)

escribirFichero(vectorSolucion, pais, vectorultimos)


#vector ultimos tiene que entrar en la funcion para añadirlo elemento a elemento
