import tkinter as tk

# Definindo a função que é chamada quando um botão numérico é clicado
def btn_click(num):
    # Obtém o número clicado
    current = entry.get()  # Pega o que está escrito no campo de entrada
    entry.delete(0, tk.END)  # Apaga o que estava escrito no campo de entrada
    entry.insert(tk.END, current + str(num))  # Escreve o número clicado no campo de entrada

# Definindo a função que é chamada quando o botão "C" é clicado
def btn_clear():
    # Limpa o campo de entrada
    entry.delete(0, tk.END)

# Definindo a função que é chamada quando o botão "=" é clicado
def btn_equal():
    # Tenta calcular o resultado da expressão matemática no campo de entrada
    try:
        result = eval(entry.get())  # Avalia a expressão matemática usando a função eval()
        entry.delete(0, tk.END)  # Limpa o campo de entrada
        entry.insert(tk.END, result)  # Mostra o resultado no campo de entrada
    except Exception as e:
        entry.delete(0, tk.END)
        entry.insert(tk.END, "Erro")

root = tk.Tk()
root.title("Calculadora")

entry = tk.Entry(root, width=30)  # Cria um campo de entrada para escrever os números e a expressão
entry.grid(row=0, column=0, columnspan=4, padx=10, pady=10)  # Posiciona o campo de entrada na janela

btns = [
    ("7", 1, 0),
    ("8", 1, 1),
    ("9", 1, 2),
    ("/", 1, 3),
    ("4", 2, 0),
    ("5", 2, 1),
    ("6", 2, 2),
    ("*", 2, 3),
    ("1", 3, 0),
    ("2", 3, 1),
    ("3", 3, 2),
    ("-", 3, 3),
    ("0", 4, 0),
    (".", 4, 1),
    ("=", 4, 2),
    ("+", 4, 3),
]

# Criação dos botões
for btn in btns:
    text, row, column = btn
    tk.Button(root, text=text, width=7, height=3, command=lambda num=text: btn_click(num)).grid(row=row, column=column)
    # Cria um botão com o número ou símbolo indicado na lista btns
    # Quando o botão é clicado, chama a função btn_click() para mostrar o número no campo de entrada

# Criação do botão "C" para limpar o campo de entrada
tk.Button(root, text="C", width=7, height=3, command=btn_clear).grid(row=5, column=0)

# Criação do botão "Quit" para sair do programa
tk.Button(root, text="Quit", width=7, height=3, command=root.quit).grid(row=5, column=1)

# Criação do botão "=" para calcular o resultado
tk.Button(root, text="=", width=17, height=3, command=btn_equal).grid(row=5, column=2, columnspan=2)

root.mainloop()
