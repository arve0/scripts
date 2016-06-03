"""2D tabell av normalfordelte tall som summerer til 100 på begge akser."""
from numpy import array, random, append, zeros

ANTALL = 6

def lag_rekke(antall, desimaler=1, senter=None, spredning=None):
    if not senter:
        senter = 100/antall
    if not spredning:
        spredning = senter/2

    tall = random.normal(senter, spredning, size=(antall - 1))

    while sum(tall) >= 100 or tall.min() < 0:
        tall = random.normal(senter, spredning, size=(antall - 1))

    # avrund til x antall desimal
    tall = tall.round(desimaler)

    tall = append(tall, 100 - tall.sum())

    return tall


tall = lag_rekke(ANTALL)
utskrift = [("%.1f" % t) for t in tall]

print("\t".join(utskrift))

# sjekk av sum
n = 0
for t in tall:
    n += round(t, 1)

print("sum: %.2f" % n)
