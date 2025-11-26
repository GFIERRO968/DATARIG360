import os, re, unicodedata, random, smtplib, ssl
from flask import Flask, render_template, request, redirect, url_for, send_from_directory, session
from werkzeug.utils import secure_filename
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import urllib.parse


# ============================================================
# 🚀 INICIALIZACIÓN DE APP Y CONFIGURACIONES
# ============================================================
app = Flask(__name__)
app.secret_key = "ClaveSuperSegura_DataRig360"   # Requerida para session

# --- Configuración de subida ---
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
UPLOAD_ROOT = os.path.join(BASE_DIR, "uploads")
os.makedirs(UPLOAD_ROOT, exist_ok=True)

# --- Configuración de correo GMAIL ---
EMAIL_SENDER = "gfierro968@gmail.com"
EMAIL_PASSWORD = "qspdfwjglcqhpvfw"  # 🔒 App Password de Gmail
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 465


# ============================================================
# 🏠 HOME + VALIDACIÓN DE ACCESO POR CÓDIGO (OTP)
# ============================================================

@app.route('/')
def index():
    """Tablero principal (tus 6 cartas). Protegido por login."""
    if not session.get("logged_in"):
        return redirect(url_for("home"))   # <-- si no hay sesión, pide correo
    return render_template('index.html')   # <-- tu tablero con cartas/íconos originales


@app.route('/dashboard')
def dashboard():
    if not session.get("logged_in"):
        return redirect(url_for("home"))
    # Puedes cambiar los textos y descripciones a tu gusto
    cards = [
        {"titulo": "Intervenciones de Pozo", "icono": "🛠️", "desc": "Planificación, ejecución y cierre.", "href": url_for("intervenciones")},
        {"titulo": "Equipos", "icono": "🏗️", "desc": "Varisur, Mansel, Braserv y más.", "href": url_for("equipos")},
        {"titulo": "HSE", "icono": "🦺", "desc": "Alertas, lecciones aprendidas y reportes.", "href": url_for("hse")},
        {"titulo": "Ingeniería", "icono": "📐", "desc": "Cálculos, diseños, estándares.", "href": url_for("ingenieria")},
        {"titulo": "Repositorio", "icono": "📂", "desc": "Cargue/descargue de documentos.", "href": url_for("repositorio")},
        {"titulo": "Gestión", "icono": "📊", "desc": "KPIs, tiempos y costos.", "href": url_for("gestion")},
    ]
    return render_template('dashboard.html', cards=cards)


@app.route('/home')
def home():
    """Renderiza la portada con video de fondo y formulario de correo."""
    cliente = "Saudi Aramco"
    current_year = datetime.now().year
    return render_template('home.html', cliente=cliente, current_year=current_year)


@app.route('/send_code', methods=['POST'])
def send_code():
    """Recibe el correo, valida autorización y envía código OTP."""
    email = request.form.get('email', '').strip().lower()

    allowed = {'gfierro968@gmail.com', 'admin@datarig360.com'}
    if email not in allowed:
        return render_template('home.html', error='❌ Correo no autorizado')

    # Genera código y guarda en sesión
    code = str(random.randint(100000, 999999))
    session['auth_code'] = code
    session['auth_email'] = email

    # Construye el mensaje de correo
    msg = MIMEMultipart('alternative')
    msg['Subject'] = 'Código de verificación DataRig360'
    msg['From'] = EMAIL_SENDER
    msg['To'] = email
    body = MIMEText(f'Tu código de verificación es: {code}', 'plain')
    msg.attach(body)

    try:
        # Conexión segura con Gmail
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT, context=context) as server:
            server.login(EMAIL_SENDER, EMAIL_PASSWORD)
            server.sendmail(EMAIL_SENDER, email, msg.as_string())

        print(f"[INFO] Código enviado correctamente a {email} → {code}")
        return render_template('verify.html', email=email)

    except Exception as e:
        print("Error al enviar correo:", e)
        return render_template('home.html', error='⚠️ Error enviando el código. Revisa credenciales o conexión SMTP.')

@app.route('/verify_code', methods=['POST'])
def verify_code():
    user_code = request.form.get('code', '').strip()
    stored_code = session.get('auth_code')
    email = session.get('auth_email')

    if user_code == stored_code:
        session['logged_in'] = True
        return redirect(url_for('index'))   # <-- antes apuntaba a 'intervenciones' o 'dashboard'
    else:
        return render_template('verify.html', email=email, error='❌ Código incorrecto. Intente nuevamente.')

# ============================================================
# 🔧 MÓDULO: INTERVENCIONES
# ============================================================
@app.route('/intervenciones')
def intervenciones():
    # (Opcional) protección de acceso:
    # if not session.get("logged_in"): return redirect(url_for("home"))
    regionales = ["Regional Sur", "Regional Central", "Regional Llanos", "Regional Piedemonte"]
    return render_template('intervenciones.html', regionales=regionales)


@app.route('/intervenciones/<nombre>')
def regional(nombre):
    campos_por_regional = {
        "Regional Sur": [
            "Campo Tello", "Campo San Francisco", "Campo Cebu",
            "Campo Palo Grande", "Campo Dina Terciarios", "Campo Dina Cretáceos"
        ],
        "Regional Central": [
            "Campo Llanito", "Campo Lizama", "Campo Canta Gallo",
            "Campo Centro", "Campo San Roque", "Campo Nutria"
        ],
        "Regional Llanos": [
            "Campo Rubiales", "Campo Quifa", "Campo Castilla",
            "Campo Chichimene", "Campo Apiay", "Campo CPO-09"
        ],
        "Regional Piedemonte": [
            "Campo Cupiagua", "Campo Cusiana", "Campo Recetor",
            "Campo Pauto", "Campo Floreña"
        ],
    }
    campos = campos_por_regional.get(nombre, [])
    return render_template('regional.html', nombre=nombre, campos=campos)


@app.route('/intervenciones/<regional>/<campo>')
def campo(regional, campo):
    campo_normalizado = urllib.parse.unquote(campo).strip()
    pozos_por_campo = {
        # --- SUR ---
        "Campo Tello": ["Pozo TLL-001", "Pozo TLL-002", "Pozo TLL-003"],
        "Campo San Francisco": ["Pozo SF-001", "Pozo SF-002"],
        "Campo Cebu": ["Pozo CEB-001"],
        "Campo Palo Grande": ["Pozo PG-001", "Pozo PG-002"],
        "Campo Dina Terciarios": ["Pozo DNT-001", "Pozo DNT-002"],
        "Campo Dina Cretáceos": ["Pozo DNC-001"],
        # --- CENTRO ---
        "Campo Lizama": ["Pozo LZ-001", "Pozo LZ-002", "Pozo LZ-003"],
        "Campo Llanito": ["Pozo LL-001", "Pozo LL-002"],
        "Campo Canta Gallo": ["Pozo CG-001"],
        "Campo Centro": ["Pozo CE-001", "Pozo CE-002"],
        "Campo San Roque": ["Pozo SR-001", "Pozo SR-002"],
        "Campo Nutria": ["Pozo NT-001"],
        # (Puedes añadir más campos/pozos aquí)
    }
    pozos = pozos_por_campo.get(campo_normalizado, [])
    return render_template('campo.html', regional=regional, campo=campo_normalizado, pozos=pozos)


@app.route('/intervenciones/<regional>/<campo>/<pozo>')
def pozo(regional, campo, pozo):
    intervenciones = ["Intervención 1", "Intervención 2", "Intervención 3"]
    return render_template('pozo.html',
                           regional=regional, campo=campo, pozo=pozo,
                           intervenciones=intervenciones)


@app.route('/intervenciones/<regional>/<campo>/<pozo>/<intervencion>')
def intervencion_detalle(regional, campo, pozo, intervencion):
    # Aquí solo renderizamos la vista con las 4 cartas (Inform. General, Planeación, Ejecución, Cierre)
    return render_template('intervencion_detalle.html',
                           regional=regional, campo=campo, pozo=pozo,
                           intervencion=intervencion)


# ============================================================
# 📁 SUBIDA / DESCARGA / ELIMINACIÓN DE ARCHIVOS
# ============================================================
@app.route('/upload/<regional>/<campo>/<pozo>/<intervencion>/<carpeta>', methods=['GET', 'POST'])
def upload_file(regional, campo, pozo, intervencion, carpeta):
    reg = _safe_segment(regional)
    cam = _safe_segment(campo)
    poz = _safe_segment(pozo)
    intv = _safe_segment(intervencion)
    carp = _safe_segment(carpeta)

    save_dir = os.path.join(UPLOAD_ROOT, reg, cam, poz, intv, carp)
    os.makedirs(save_dir, exist_ok=True)

    if request.method == 'POST':
        if 'file' not in request.files:
            return "No se encontró archivo", 400
        f = request.files['file']
        if f.filename == '':
            return "Archivo vacío", 400
        fname = secure_filename(f.filename)
        f.save(os.path.join(save_dir, fname))
        return redirect(request.url)

    archivos = sorted(os.listdir(save_dir))
    return render_template('upload.html',
                           regional=regional, campo=campo, pozo=pozo,
                           intervencion=intervencion, carpeta=carpeta,
                           archivos=archivos)


@app.route('/download/<regional>/<campo>/<pozo>/<intervencion>/<carpeta>/<filename>')
def download_file(regional, campo, pozo, intervencion, carpeta, filename):
    path_dir = os.path.join(
        UPLOAD_ROOT,
        _safe_segment(regional),
        _safe_segment(campo),
        _safe_segment(pozo),
        _safe_segment(intervencion),
        _safe_segment(carpeta)
    )
    return send_from_directory(directory=path_dir, path=filename, as_attachment=True)


@app.route('/delete/<regional>/<campo>/<pozo>/<intervencion>/<carpeta>/<filename>', methods=['POST'])
def delete_file(regional, campo, pozo, intervencion, carpeta, filename):
    path = os.path.join(
        UPLOAD_ROOT,
        _safe_segment(regional),
        _safe_segment(campo),
        _safe_segment(pozo),
        _safe_segment(intervencion),
        _safe_segment(carpeta),
        filename
    )
    if os.path.exists(path):
        os.remove(path)
        return f"Archivo '{filename}' eliminado correctamente"
    return "Archivo no encontrado", 404


# ============================================================
# ⚙️ MÓDULO: EQUIPOS
# ============================================================
@app.route('/equipos')
def equipos():
    equipos = [
        {"nombre": "Varisur 17", "descripcion": "Equipo de reacondicionamiento y completamiento."},
        {"nombre": "Varisur 19", "descripcion": "Equipo de completamiento y pruebas de pozo."},
        {"nombre": "Varisur 20", "descripcion": "Unidad móvil de Workover de alta capacidad."},
        {"nombre": "Mansel 1", "descripcion": "Equipo de intervención ligera y slickline."},
        {"nombre": "Braserv 120", "descripcion": "Equipo de pulling y reacondicionamiento."},
        {"nombre": "Braserv 122", "descripcion": "Unidad de workover para operaciones de completamiento."},
    ]
    return render_template('equipos.html', equipos=equipos)


@app.route('/equipos/<nombre>')
def equipo_detalle(nombre):
    # Placeholder de tarjetas internas (repositorio, reportes, mantenimiento, etc.)
    modulos_equipo = [
        "📁 Repositorio de Documentos",
        "🧾 Reportes de Operación",
        "⚙️ Mantenimiento y Certificaciones",
        "🧰 Inspecciones y Checklists",
        "📊 KPIs del Equipo",
        "👷 Personal y Turnos"
    ]
    return render_template('equipo_detalle.html', nombre=nombre, modulos=modulos_equipo)


# ============================================================
# 📄 OTROS MÓDULOS (si los usas)
# ============================================================
@app.route('/repositorio')
def repositorio():
    return render_template('repositorio.html')

@app.route('/hse')
def hse():
    return render_template('hse.html')

@app.route('/ingenieria')
def ingenieria():
    return render_template('ingenieria.html')

@app.route('/gestion')
def gestion():
    return render_template('gestion.html')


# ============================================================
# ▶️ EJECUCIÓN LOCAL
# ============================================================
if __name__ == '__main__':
    app.run(debug=True)
