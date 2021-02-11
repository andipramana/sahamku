class Saham:

    def __init__(self, code, previous_close, open_price, high, low, close, change, volume):
        self.code = code
        self.previous_close = previous_close
        self.open_price = open_price
        self.high = high
        self.low = low
        self.close = close
        self.change = change
        self.volume = volume

    def __str__(self):
        return f'code : {self.code} \nprevious_close : {self.previous_close} \nopen_price : {self.open_price} ' \
               f'\nhigh : {self.high} \nlow : {self.low} \nclose : {self.close} \nchange : {self.change} ' \
               f'\nvolume : {self.volume}'
