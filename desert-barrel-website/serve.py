#!/usr/bin/env python3
"""Local static server for the Desert Barrel pilot website.

Usage:
    python3 serve.py [port]

Serves this folder at http://localhost:<port> (default 8000) and opens
the default browser automatically. No dependencies beyond the Python
standard library.
"""
import http.server
import socketserver
import sys
import webbrowser
import os

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)


def main():
    with socketserver.TCPServer(("127.0.0.1", PORT), Handler) as httpd:
        url = f"http://localhost:{PORT}"
        print(f"Desert Barrel — sirviendo en {url}")
        print("Presiona Ctrl+C para detener el servidor.")
        try:
            webbrowser.open(url)
        except Exception:
            pass
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServidor detenido.")


if __name__ == "__main__":
    main()
