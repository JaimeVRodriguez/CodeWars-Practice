def abbrev_name(name):
    name_list = name.split(' ')
    return name_list[0][0].upper() + '.' + name_list[1][0].upper()

print(abbrev_name('jaime rod'))