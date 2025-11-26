import sys
import os

# Ruta absoluta del proyecto
project_path = os.path.dirname(os.path.abspath(__file__))

# Agregar la ruta del proyecto al sistema
sys.path.insert(0, project_path)

# Ruta del entorno virtual generado por cPanel
VENV_PATH = "/home/ndatarin2/virtualenv/www.datarig360.com/3.10/lib/python3.10/site-packages"

# Activar entorno virtual en Linux
sys.path.insert(0, VENV_PATH)

# Importar la aplicación Flask
from app import app as application
