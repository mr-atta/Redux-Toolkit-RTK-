import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { add, remove, get } from "../store-rtk/pokemon.store";

const Pokemon = (props) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // add to the list of pokemon
    props.add(name);

    // e.reset();
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    props.get();
  }, []);

  return (
    <section>
      <ul>
        {/* list of pokemons
                on li click we need to remove
                */}

        {props.pokemon.map((pokemon, idx) => (
          <li key={idx} onClick={() => props.remove(pokemon.name)}>
            {pokemon.name}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" placeholder="pokemon" />
      </form>
    </section>
  );
};

const mapStateToProps = (state) => ({
  pokemon: state.pokemon,
});

const mapDispatchToProps = { add, remove, get };

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
