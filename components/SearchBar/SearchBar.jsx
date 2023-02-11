import * as React from "react";
import { Searchbar } from "react-native-paper";

const SearchBarComponent = ({ searchQuery, setSearchQuery }) => {
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default SearchBarComponent;
