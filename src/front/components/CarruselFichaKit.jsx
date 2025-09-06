export default function CarruselFichaKit({ imagenes = [], altBase = "producto", onSelect }) {
  if (!imagenes.length) return null;

  return (
    <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
      {imagenes.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${altBase} ${idx + 1}`}
          onClick={() => onSelect(img)}   // ahora SI cambia la imagen principal
          style={{
            width: 60,
            height: 60,
            objectFit: "cover",
            borderRadius: 8,
            cursor: "pointer",
            border: "2px solid transparent",
          }}
        />
      ))}
    </div>
  );
}
