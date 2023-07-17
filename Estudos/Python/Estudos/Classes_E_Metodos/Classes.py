# Class
# Syntaxe
# Marca, Memoria Ram, Placa de Video
class Computador:
	def __init__(self,marca,memoria_ram,placa_de_video):
		self.marca = marca
		self.memoria_ram = memoria_ram
		self.placa_de_video = placa_de_video
	pass

compurador1 = Computador('Asus','8 gb ', 'Nvidea')
compurador2 = Computador('Lenovo','32 gb ', 'GeForce')
compurador3 = Computador('Dell','12 gb ', 'Nvidea')
print(compurador1.marca,compurador1.memoria_ram,compurador1.placa_de_video)
print(compurador2.marca,compurador2.memoria_ram,compurador2.placa_de_video)
print(compurador3.marca,compurador3.memoria_ram,compurador3.placa_de_video)