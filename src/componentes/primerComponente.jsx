import PropTypes from "prop-types";

export const PrimerComponente = ({
  titulo = "Título por defecto",
  subtitulo = "Subtítulo por defecto",
}) => {
  return (
    <div>
      <h1>{titulo}</h1>
      <h3>{subtitulo}</h3>
    </div>
  );
};

// Definición de PropTypes
PrimerComponente.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
};
