import locale
import sys
from yahoo_finance_api2 import share
from yahoo_finance_api2.exceptions import YahooFinanceError


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


def rupiah_format(angka):
	with_prefix = True
	desimal = 0
	locale.setlocale(locale.LC_NUMERIC, 'IND')
	rupiah = locale.format("%.*f", (desimal, angka), True)
	if with_prefix:
		return "Rp. {}".format(rupiah)
	return rupiah


def getStock(code):
	saham = Saham('', 0, 0, 0, 0, 0, 0, 0)
	my_share = share.Share(code)
	symbol_data = None

	try:
		symbol_data = my_share.get_historical(share.PERIOD_TYPE_DAY, 1,
											  share.FREQUENCY_TYPE_DAY, 1)

		print(code)

		try:
			saham.code = code
			saham.change = round((symbol_data['close'][1] - symbol_data['close'][0]) / symbol_data['close'][0] * 100, 2)
			saham.previous_close = rupiah_format(symbol_data['close'][0])
			saham.open_price = rupiah_format(symbol_data['open'][1])
			saham.high = rupiah_format(symbol_data['high'][1])
			saham.low = rupiah_format(symbol_data['low'][1])
			saham.close = rupiah_format(symbol_data['close'][1])
			saham.volume = symbol_data['volume'][1]

		except:
			print("Stock " + code + "Error")

	except YahooFinanceError as e:
		saham.code = code
		saham.previous_close = rupiah_format(0)
		saham.open_price = rupiah_format(0)
		saham.high = rupiah_format(0)
		saham.low = rupiah_format(0)
		saham.close = rupiah_format(0)
		saham.change = rupiah_format(0)
		saham.volume = 0

		print(e.message)
		sys.exit(1)

	return saham


def getAllStock(stock_list):
	data = []
	stocks_codes = stock_list

	for code in stocks_codes:
		data.append(getStock(code))

	return data
