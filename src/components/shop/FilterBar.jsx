import PropTypes from "prop-types";

const FilterBar = ({ filters, setFilters }) => {
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value || null, // Se vuoto, resettiamo il filtro
    }));
  };

  return (
    <div className="card flex flex-wrap gap-4 justify-center mb-6 z-10">
      {/* Filtro Categoria */}
      <select
        name="category"
        value={filters.category || ""}
        onChange={handleFilterChange}
        className="input-field bg-gray-50 md:hover:bg-gray-100 transition"
      >
        <option value="">Tutte le categorie</option>
        <option value="MTB">MTB</option>
        <option value="Corsa">Corsa</option>
      </select>

      {/* Filtro Tipologia */}
      <select
        name="type"
        value={filters.type || ""}
        onChange={handleFilterChange}
        className="input-field bg-gray-50 hover:bg-gray-100 transition"
      >
        <option value="">Tutte le tipologie</option>
        <option value="Muscolare">Muscolare</option>
        <option value="Elettrica">Elettrica</option>
      </select>

      {/* Filtro Diametro Ruota */}
      <select
        name="wheelSize"
        value={filters.wheelSize || ""}
        onChange={handleFilterChange}
        className="input-field bg-gray-50 hover:bg-gray-100 transition"
      >
        <option value="">Tutte le misure</option>
        <option value="28">28"</option>
        <option value="29">29"</option>
      </select>

      {/* Filtro Sospensioni */}
      <select
        name="suspension"
        value={filters.suspension || ""}
        onChange={handleFilterChange}
        className="input-field bg-gray-50 hover:bg-gray-100 transition"
      >
        <option value="">Tutte le sospensioni</option>
        <option value="Rigida">Rigida</option>
        <option value="Front">Front</option>
        <option value="Full">Full</option>
      </select>
    </div>
  );
};

FilterBar.propTypes = {
  filters: PropTypes.object.isRequired,
  setFilters: PropTypes.func.isRequired,
};

export default FilterBar;
