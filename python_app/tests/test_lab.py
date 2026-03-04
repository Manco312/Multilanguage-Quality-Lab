from python_app.utils import suma


def test_ejemplo_siembra():
    assert True

def test_suma_positivos():
    assert suma(2, 3) == 5

def test_suma_cero():
    assert suma(0, 5) == 5

def test_suma_negativo():
    assert suma(-2, 3) == 1
