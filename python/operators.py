# given six
# numbers, a =12.5 b =3.2 c =2.1, d = 4.8, e =5.3, f=2.9
# calculate the following complex expression:

a = 12.5
b = 3.2
c = 2.1
d = 4.8
e = 5.3
f = 2.9
result = (((a+b) *(c-d) /(e + f)) ** 2 + ((a * b) % (c + d))/ (e - f) * (a ** (b -c)))
print("result:",result)