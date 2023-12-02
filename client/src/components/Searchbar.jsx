import { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
const Searchbar = () => {
  const [input, setInput] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (input.length > 0) {
      setDisabled(false);
      console.log(input);
    } else {
      setDisabled(true);
    }
  }, [input]);

  return (
    <div className="Searchbar-nav">
      <form action="/">
        <button disabled={disabled}>
          <GoSearch />
        </button>
        <input
          type="search"
          placeholder="Search for Products"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
};
export default Searchbar;
