"""2D tabell av normalfordelte tall som summerer til 100 på begge akser."""
from numpy import array, random, append, zeros

antall_x = 6
antall_y = 6

def lag_arr(antall_y, antall_x, desimaler=1, senter=None, spredning=None):
    arr = zeros(antall_y, antall_x)

    for i in range(antall_y):
        for j in range(antall_x):
            sum_rad = arr[i].sum()
            sum_kolonne = arr[:,j].sum()

            # siste rute
            if i+1 == antall_y and j+1 == antall_x:
            # siste kolonne
            else if i+1 == antall_y:
                arr[i, j] = 
            # siste rad
            else if j+1 == antall_x:

            # alle andre ruter
            else:
                max_verdi = 100 - max(sum_rad, sum_kolonne)
                arr[i, j] = random.random()*max_verdi

    # forsørge at summen av kolonnene er over 100
    for i in range(antall_y):
        while arr[i].sum() < 100:
            arr[i] *= 1.01

    print(arr)

    # forsørge at summen av radene er over 100
    for i in range(antall_x):
        while arr[:, i].sum() < 100:
            arr[:, i] *= 1.01

    print(arr)

    # rund av til x antall desimaler
    arr = arr.round(1)

    print(arr)

    # forsørge at summen av kolonnene er akkurat 100
    for i in range(antall_y):
        # sett siste element i kolonne
        arr[i, -1] = 100 - arr[i, :-1].sum()

    return arr

print(lag_arr(5,5))
