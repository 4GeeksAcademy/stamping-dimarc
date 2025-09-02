
import click
from api.models import db, Product

def setup_commands(app):
    @app.cli.command("init-db")
    def init_db():
        """Crear todas las tablas"""
        with app.app_context():
            db.create_all()
            click.echo("Base creada")

    @app.cli.command("reset-db")
    def reset_db():
        """Borrar y recrear todas las tablas (desarrollo)"""
        with app.app_context():
            db.drop_all()
            db.create_all()
            click.echo("Base reiniciada")

    @app.cli.command("insert-test-products")
    def insert_test_products():
        """Insertar productos de prueba"""
        data = [
            {"slug": "kit-inicial", "nombre": "Kit inicial", "resumen": None, "incluye": None, "precio": 45.0, "imagen": None, "destacado": False},
            {"slug": "mini-kit-inicial", "nombre": "Mini kit inicial", "resumen": None, "incluye": None, "precio": 30.0, "imagen": None, "destacado": False},
            {"slug": "kit-emprendedor", "nombre": "Kit emprendedor", "resumen": None, "incluye": None, "precio": 32.0, "imagen": None, "destacado": False},
            {"slug": "kit-mini-doble", "nombre": "Kit mini doble", "resumen": None, "incluye": None, "precio": 22.0, "imagen": None, "destacado": False},
        ]
        with app.app_context():
            for p in data:
                prod = Product(**p)
                db.session.add(prod)
            db.session.commit()
            click.echo("Productos de prueba insertados")
