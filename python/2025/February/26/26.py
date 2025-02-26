def get_middle(s):
    s_len = len(s)
    if s_len % 2 == 0:
        return s[s_len // 2 - 1] + s[s_len // 2]
    else:
        return s[s_len // 2]

print(get_middle('test'))
print(get_middle('testing'))