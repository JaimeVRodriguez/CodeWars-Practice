def nb_year(p0, percent, aug, p):
    per = percent / 100
    year = 0
    while p0 < p:
        p0 += p0 * per + aug
        p0 = int(p0)
        year += 1
    return year

print(nb_year(1500, 5, 100, 5000)) # 15