export default function CarruselFichaKit({
  imagenes = [],
  altBase = "producto",
  onSelect,
  align = "right",        
}) {
  if (!imagenes.length) return null;

  const containerStyle = {
    display: "flex",
    gap: "8px",
    marginTop: "10px",
    flexWrap: "wrap",
    justifyContent:
      align === "right" ? "flex-end" : align === "center" ? "center" : "flex-start",
  };

 return (
  <div
    style={{
      display: "flex",
      gap: 20,          
      marginTop: 8,
      flexWrap: "nowrap",   
      justifyContent: "flex-end"
    }}
  >
    {imagenes.map((img, idx) => (
      <img
        key={idx}
        src={img}
        alt={`${altBase} ${idx + 1}`}
        onClick={() => onSelect(img)}
        style={{
          width: 200,      
          height:250,
          objectFit: "cover",
          borderRadius: 8,
          cursor: "pointer"
        }}
      />
    ))}
  </div>
);
}

