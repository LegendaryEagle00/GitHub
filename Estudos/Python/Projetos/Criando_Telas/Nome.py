import PySimpleGUI as sg

#Layout
sg.theme('Reddit')
layout = [
	[sg.Text('Usuario'), sg.Input(key='usuario', size=(25,1))],
	[sg.Text('Senha'),sg.Input(key='senha',password_char = '*', size=(25,1))],
	[sg.Checkbox('Salvar o Login?')],
	[sg.Button('Entrar')]
]
#Janela
janela = sg.Window('Tela de Login',layout)
#Ler os Eventos
while True:
	eventos, valores = janela.read()
	if eventos == sg.WINDOW_CLOSED:
		break
	if eventos == 'Entrar':
		if valores['usuario'] == 'Otavio' and valores['senha'] == '1234567':
			print('Bem Vindo')
		elif valores['usuario'] == 'Otavio' and valores['senha'] != '1234567':
			print('Senha Invalida')
		else:
			print('Usuario Nao Encontrado')
