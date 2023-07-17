# Como Criar e Modificar Arquivos:
valores_celulares = [850, 2230, 1500, 3500, 5000]

# 'r'   - Para Ler algo
# 'w'   - Para Escrever algo
# 'r+'  - Ler e Escrever algo
# 'a'   - Acrescentar algo

# Apaga informaçao anterior e Acrescenta Nova informaçao
# with open('valores_celulares.txt','w') as arquivo:
# 	for valor in valores_celulares:
# 		arquivo.write(str(valor) + '\n')

# Acrescenta informação sem apagar a anterior

# with open('valores_celulares.txt','a') as arquivo:
# 	for valor in valores_celulares:
# 		arquivo.write(str(valor) + '\n')

# Ler Informação

# with open('valores_celulares.txt','r') as arquivo:
# 	for valor in valores_celulares:
# 		print(valor)

# Ler e Escrever

with open('valores_celulares.txt','r+') as arquivo:
	for valor in arquivo:
		print(valor)
	arquivo.write('9000')
