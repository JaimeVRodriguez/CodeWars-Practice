# Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

# The binary number returned should be a string.

# Examples:(Input1, Input2 --> Output (explanation)))

def sum_to_binary(num1, num2):
    sum = num1 + num2
    return bin(sum)[2:]

print(sum_to_binary(1, 1))


