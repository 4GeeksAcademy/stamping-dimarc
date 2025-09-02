"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route("/users", methods=["GET"])
def get_users():
    users = User.query.all()
    return jsonify([user.serialize() for user in users]), 200


@api.route("/users/<int:id>", methods=["GET"])
def get_user(id):
    user = User.query.get(id)
    if user is None:
        return jsonify({"error": "Usuario no encontrado"}), 404
    return jsonify(user.serialize()), 200


@api.route("/users", methods=["POST"])
def create_user():
    data = request.get_json()
    if not data or "email" not in data or "password" not in data:
        return jsonify({"error": "Faltan campos"}), 400

    new_user = User(email=data["email"],
                    password=data["password"], is_active=True)
    db.session.add(new_user)
    db.session.commit()

    return jsonify(new_user.serialize()), 201


productos = [
    {"slug": "kit-inicial", "nombre": "Kit inicial", "precio": 45},
    {"slug": "mini-kit-inicial", "nombre": "Mini kit inicial", "precio": 30},
    {"slug": "kit-emprendedor", "nombre": "Kit emprendedor", "precio": 32},
    {"slug": "kit-mini-doble", "nombre": "Kit mini doble", "precio": 22},
]


@api.route("/productos", methods=["GET"])
def get_productos():
    return jsonify(productos), 200


@api.route("/productos/<string:slug>", methods=["GET"])
def get_producto(slug):
    producto = next((p for p in productos if p["slug"] == slug), None)
    if producto is None:
        return jsonify({"error": "Producto no encontrado"}), 404
    return jsonify(producto), 200
