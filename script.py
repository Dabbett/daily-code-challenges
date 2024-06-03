# for practicing python concepts

class Hero(object):
    def __init__(self, name='Hero'):
        self.name = name
        self.position = '00'
        self.health = 100
        self.damage = 5
        self.experience = 0


# python funtion multiplier
def multiply(n):
    num = len(str(abs(n)))
    multiplier = 5 ** num
    return  n * multiplier