from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import String, Boolean, Text, Float
from sqlalchemy.orm import Mapped, mapped_column

db = SQLAlchemy()


class User(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    email: Mapped[str] = mapped_column(
        String(120), unique=True, nullable=False)
    password: Mapped[str] = mapped_column(nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean(), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }


class Product(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    slug: Mapped[str] = mapped_column(String(100), unique=True, nullable=False)
    nombre: Mapped[str] = mapped_column(String(120), nullable=False)
    resumen: Mapped[str] = mapped_column(Text, nullable=True)
    incluye: Mapped[str] = mapped_column(Text, nullable=True)
    precio: Mapped[float] = mapped_column(Float, nullable=False)
    imagen: Mapped[str] = mapped_column(String(250), nullable=True)
    destacado: Mapped[bool] = mapped_column(Boolean(), default=False)

    def serialize(self):
        return {
            "id": self.id,
            "slug": self.slug,
            "nombre": self.nombre,
            "resumen": self.resumen,
            "incluye": self.incluye.split("|") if self.incluye else [],
            "precio": self.precio,
            "imagen": self.imagen,
            "destacado": self.destacado
        }
