import RemoteProductForm from "../components/admin/RemoteProductForm";

const RemoteAdminPanel = () => {
  const handleProductSubmit = (product) => {
    console.log("Prodotto salvato:", product);
    alert("Prodotto salvato con successo! Guarda la console per i dettagli.");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Inserisci un nuovo prodotto</h1>
      <RemoteProductForm onSubmit={handleProductSubmit} />
    </div>
  );
};

export default RemoteAdminPanel;
