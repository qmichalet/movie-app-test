import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface PropsFunction {
  onSubmit: (value: string) => void;
}

// question pour le passage de la fonction onsubmit
const MovieSearchInput: React.FC<PropsFunction> = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(value);
      }}
      className="input-wrapper"
    >
      <input
        type="text"
        className="input-wrapper__input"
        placeholder="Movie name"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button className="input-wrapper__btn">
        <FaSearch />
      </button>
    </form>
  );
};

export default MovieSearchInput;
