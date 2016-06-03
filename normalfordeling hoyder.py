"""Normalfordeling rundt et gitt tall."""
from numpy import random
from numpy import append

senter = 180
spredning = 6
antall = 20

jenter = random.normal(senter-15, spredning, size=antall//2)
gutter = random.normal(senter, spredning, size=antall//2)

hoyder = append(jenter, gutter)

utskrift = [("%d" % h) for h in hoyder]

print("\t".join(utskrift))
