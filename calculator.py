import sys
import sympy as sp

def main():
    if len(sys.argv) < 2:
        print("Erreur : Fonction non fournie.")
        return

    function_input = sys.argv[1]
    
    x = sp.symbols('x')
    try:
        function = sp.sympify(function_input)
        derivative = sp.diff(function, x)
        result = f"Dérivée de {function_input} par rapport à x : {derivative}"
    except Exception as e:
        result = f"Erreur dans le calcul : {e}"

    print(result)

if __name__ == "__main__":
    main()
