import locale
import sys
from models.saham import Saham
from yahoo_finance_api2 import share
from yahoo_finance_api2.exceptions import YahooFinanceError


def rupiah_format(angka):
    with_prefix = True
    desimal = 0
    locale.setlocale(locale.LC_NUMERIC, 'IND')
    rupiah = locale.format_string("%.*f", (desimal, angka), True)
    if with_prefix:
        return "Rp. {}".format(rupiah)
    return rupiah


def getStock(code, country_id):
    code = code
    saham = Saham('', '', '', '', '', '', 0, 0)
    my_share = share.Share(code + country_id)

    try:
        symbol_data = my_share.get_historical(share.PERIOD_TYPE_DAY, 3,
                                              share.FREQUENCY_TYPE_DAY, 1)

        if symbol_data['volume'][1] != 0:
            index, prev = 1, 0
        else:
            index = prev = 0

        try:
            saham.code = code
            saham.previous_close = symbol_data['close'][prev]
            saham.open_price = symbol_data['open'][index]
            saham.high = symbol_data['high'][index]
            saham.low = symbol_data['low'][index]
            saham.close = symbol_data['close'][index]
            saham.volume = symbol_data['volume'][index]
            saham.change = round((symbol_data['close'][index] - symbol_data['close'][prev])
                                 / symbol_data['close'][prev] * 100, 2)

        except Exception as e:
            print(e)

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

    return saham.__dict__


def getAllStock(stock_list, country_id):
    data = []
    stocks_codes = stock_list

    for code in stocks_codes:
        data.append(getStock(code, country_id))

    return data
