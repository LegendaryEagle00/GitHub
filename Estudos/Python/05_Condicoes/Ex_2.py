n1 = int(input("Digite a primeira nota"))
n2 = int(input('Digite a Segunda Nota'))
m = (n1 + n2)/2
print('A sua media foi {:.1f}'.format(m))
if m >= 6:
    print('Sua  media foi boa! PARABENS!!')
else:
    print('Sua media foi ruim! PARABENS!!')