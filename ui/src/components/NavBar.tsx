import React, { useState } from 'react';

interface NavProps {
  title: string;
}

const Navbar: React.FC<NavProps> = ({ title }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Search logic here. For example, making an API call with the searchTerm value.
    console.log(`Searching for assets: ${searchTerm}`);
  };

  return (
    <nav>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search assets"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button type="submit">Search</button>
      </form>
      <li>
      <button onClick={() => console.log("Button clicked")}>
    Connect your wallet
  </button>
</li>

    </nav>
  );
};

export default Navbar;
