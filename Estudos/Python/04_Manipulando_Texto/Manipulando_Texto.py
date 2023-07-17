frase = 'Curso em Video Python'
#   C   u   r   s   o       e   m       V   i   d   e   o       P   y   t   h   o   n
#   0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16  17  18  19  20
print(frase)

print(frase[9])
#   V
print(frase[9:13])
#   Vide
print(frase[9:21])
#   Video Python
print(frase[9:21:2])
#   VdoPto
print(frase[:5])
#   Curso
print(frase[15:])
#   Python
print(frase[9::3])
#   VePh

print(len(frase)) # - 21 caracteres
print(frase.count('o')) # - 3
print(frase.find('deo')) # - 11
print(frase.find('Android')) # - -1
'Curso' in frase # True
print(frase.replace('Python','Android'))
print(frase)
print(frase.upper())
print(frase.lower())
print(frase.capitalize())
print(frase.title())
frase = '   Aprenda Python  '
print(frase.rtrip())
print(frase.fstrip())
print(frase.lstrip())
print(frase.split())
print('-'.join(frase))


