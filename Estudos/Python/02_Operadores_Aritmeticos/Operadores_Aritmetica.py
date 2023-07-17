n1 = int(input('Digite um Numero'))
n2 = int(input('DIgite mais um numero'))
s = n1 + n2
print('A soma vale {} ' .format(s))

# '+'   - Adição
# '-'   - Subtração
# '*'   - Multiplicação
# '/'   - Divisao
# '**'  - Potencia
# '//'  - Divisão inteira
# '%!   - Resto da Divisao

5 + 2 == 7
5 - 2 == 3
5 * 2 == 10
5 / 2 == 2.5
5 ** 2 == 25
5 // 2 == 2
5 % 2 == 1

# Ordem de precedencia
# 1º        ()
# 2º        **
# 3º    *   /   //  %
# 4º        +   -


5 + 3 * 2 == 11
3 * 5 + 4 ** 2 == 31
3 * (5 + 4) ** 2 == 243