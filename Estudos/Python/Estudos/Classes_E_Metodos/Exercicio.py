class Carro:
	def __init__(self,Km_rodado,Litragem_Usada):
		self.Km_rodado = Km_rodado
		self.Litragem_Usada = Litragem_Usada

	def Calcular_consumo(self):
		consumo_medio = self.Km_rodado/self.Litragem_Usada
		print('O consumo foi de: {}'.format(consumo_medio))

	def iniciar(self):
		self.Km_rodado = float(input('Digite a Quilometragem rodada: '))
		self.Litragem_Usada = float(input('Digite a Litragem de Combustível usada: '))

viagem = Carro(0, 0)
viagem.iniciar()
viagem.Calcular_consumo()