"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.utils import generate_sitemap, APIException
from api.models import db, User, Product
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

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
    new_user = User(email=data["email"], is_active=True)
    new_user.set_password(data["password"])
    db.session.add(new_user)
    db.session.commit()
    return jsonify(new_user.serialize()), 201

@api.route("/auth/register", methods=["POST"])
def register():
    data = request.get_json() or {}
    email = (data.get("email") or "").strip().lower()
    password = data.get("password") or ""
    if not email or not password:
        return jsonify(error="Faltan campos"), 400
    if User.query.filter_by(email=email).first():
        return jsonify(error="Email ya registrado"), 409
    u = User(email=email, is_active=True)
    u.set_password(password)
    db.session.add(u)
    db.session.commit()
    return jsonify(u.serialize()), 201

@api.route("/auth/login", methods=["POST"])
def login():
    data = request.get_json() or {}
    email = (data.get("email") or "").strip().lower()
    password = data.get("password") or ""
    u = User.query.filter_by(email=email).first()
    if not u or not u.check_password(password):
        return jsonify(error="Credenciales inválidas"), 401
    access_token = create_access_token(identity=str(u.id))
    return jsonify(access_token=access_token, user=u.serialize()), 200

@api.route("/auth/me", methods=["GET"])
@jwt_required()
def me():
    uid = int(get_jwt_identity())
    u = User.query.get(uid)
    if not u:
        return jsonify(auth=False), 200
    return jsonify(auth=True, user=u.serialize()), 200

@api.route("/productos", methods=["GET"])
def get_productos():
    items = Product.query.order_by(Product.destacado.desc(), Product.nombre.asc()).all()
    return jsonify([p.serialize() for p in items]), 200

@api.route("/productos/<string:slug>", methods=["GET"])
def get_producto(slug):
    p = Product.query.filter_by(slug=slug).first()
    if not p:
        return jsonify({"error": "Producto no encontrado"}), 404
    return jsonify(p.serialize()), 200

@api.route("/productos", methods=["POST"])
@jwt_required()
def create_producto():
    data = request.get_json() or {}

    slug = (data.get("slug") or "").strip()
    nombre = (data.get("nombre") or "").strip()
    if not slug or not nombre:
        return jsonify({"error": "slug y nombre son obligatorios"}), 400

    if Product.query.filter_by(slug=slug).first():
        return jsonify({"error": "slug ya existe"}), 409

    try:
        precio = float(data.get("precio") or 0)
    except ValueError:
        return jsonify({"error": "precio inválido"}), 400

    resumen = data.get("resumen") or None
    imagen = data.get("imagen") or None
    destacado = bool(data.get("destacado"))

    incluye = data.get("incluye")
    if isinstance(incluye, list):
        incluye = "|".join([str(x).strip() for x in incluye])
    elif isinstance(incluye, str):
        incluye = incluye.strip()
    else:
        incluye = None

    p = Product(
        slug=slug,
        nombre=nombre,
        resumen=resumen,
        incluye=incluye,
        precio=precio,
        imagen=imagen,
        destacado=destacado,
    )
    db.session.add(p)
    db.session.commit()
    return jsonify(p.serialize()), 201
