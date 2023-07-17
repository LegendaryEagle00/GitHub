import PySimpleGUI as sg

# Classes e Métodos

class Carro:
    def __init__(self, Km_rodado, Litragem_Usada):
        self.Km_rodado = Km_rodado
        self.Litragem_Usada = Litragem_Usada

    def Calcular_consumo(self):
        consumo_medio = self.Km_rodado / self.Litragem_Usada
        return consumo_medio

# Layout
sg.theme('Reddit')
layout = [
    [sg.Text('KM'), sg.Input(key='km', size=(25, 1))],
    [sg.Text('Litragem'), sg.Input(key='litragem', size=(25, 1))],
    [sg.Button('Calcular')],
    [sg.Text(size=(25, 1), key='resultado')]
]

# Janela
janela = sg.Window('Tela 1', layout)

# Ler os Eventos
while True:
    eventos, valores = janela.read()
    if eventos == sg.WINDOW_CLOSED:
        break
    if eventos == 'Calcular':
        km = float(valores['km'])
        litragem = float(valores['litragem'])
        viagem = Carro(km, litragem)
        consumo = viagem.Calcular_consumo()
        janela['resultado'].update('O consumo foi de: {}'.format(consumo))

janela.close()
