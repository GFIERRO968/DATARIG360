@echo off
REM ============================================
REM  WLM Ecopetrol v3.5 - Intervenciones UI Mejorada
REM ============================================
set PROJECT_DIR=C:\Oil_Managment\WLM_Ecopetrol_v3_5
if not exist "%PROJECT_DIR%" (
  echo ❌ No se encuentra %PROJECT_DIR%
  pause
  exit /b
)
cd /d "%PROJECT_DIR%"
if not exist venv_wlm (
  py -m venv venv_wlm
)
call venv_wlm\Scripts\activate
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
start "" http://127.0.0.1:5000
python app.py
pause
