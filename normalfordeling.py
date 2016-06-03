"""Normalfordeling rundt et gitt tall."""
from numpy import random
from numpy import append

senter = 5
spredning = 1
antall = 52

tall = random.normal(senter, spredning, size=antall)

utskrift = [("%d" % t) for t in tall]

print("\t".join(utskrift))
