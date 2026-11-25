// In produzione le immagini passano dalla Image CDN di Netlify, che le ridimensiona
// e le converte in un formato leggero: così si possono caricare le foto del telefono così come sono.
// In sviluppo l'endpoint /.netlify/images non esiste, quindi si usa il file originale.
const imageUrl = (src, width) => {
  if (!src || !import.meta.env.PROD) return src;
  const params = new URLSearchParams({ url: src, w: String(width) });
  return `/.netlify/images?${params}`;
};

export default imageUrl;
