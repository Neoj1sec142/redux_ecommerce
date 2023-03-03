import stripe
options = dir(stripe.Account)
with open('./Account.txt', 'w') as f:
    count = 0
    for option in options:
        f.writelines(f'{count}: {option}\n')
    f.close()