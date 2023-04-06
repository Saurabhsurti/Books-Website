def binary_to_gray(binary_num):
    """
    Converts a binary number to its corresponding Gray code.
    """
    gray_num = binary_num[0]
    for i in range(1, len(binary_num)):
        gray_num += str(int(binary_num[i-1]) ^ int(binary_num[i]))
        
    return gray_num

l=['0000','0001','0010','0011','0100','0101','0110','0111','1000','1001','1010','1011','1100','1101','1110','1111']
print('********Binary to Gray Truth table********')

print(f'\t Binary\t\t Gray')
for k in l:
    print('\t',k,end='\t')
    print('\t',binary_to_gray(k))
    
print()
def gray_to_binary(gray_num):
    """
    Converts a Gray code to its corresponding binary number.
    """
    binary_num = gray_num[0]
    for i in range(1, len(gray_num)):
        binary_num += str(int(binary_num[i-1]) ^ int(gray_num[i]))
    return binary_num

# l=['0000','0001','0010','0011','0100','0101','0110','0111','1000','1001','1010','1011','1100','1101','1110','1111']
print('********Gray to Binary Truth table********')
print(f'\t Gray\t\t Binary')
for k in l:
    print('\t',k,end='\t')
    print('\t',gray_to_binary(k))
    
# for i in range(17):
#     print(binary_to_gray(input("enter 4 bit binary")))