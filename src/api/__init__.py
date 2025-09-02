import os
from flask import Flask
from api.models import db
from api.admin import setup_admin
from api.utils import generate_sitemap
from api.routes import api as api_routes
from api.commands import setup_commands  

def create_app():
    app = Flask(__name__)
    app.url_map.strict_slashes = False

    uri = os.getenv('DATABASE_URL', 'sqlite:///database.db')
    if uri.startswith('postgres://'):
        uri = uri.replace('postgres://', 'postgresql://', 1)

    app.config['SQLALCHEMY_DATABASE_URI'] = uri
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)
    setup_admin(app)
    app.register_blueprint(api_routes)
    setup_commands(app)

    @app.route('/')
    def sitemap():
        return generate_sitemap(app)

    print(f'BD activa -> {app.config["SQLALCHEMY_DATABASE_URI"]}')
    return app
