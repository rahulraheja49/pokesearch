import { Header, Icon, Input, Item } from "native-base";
import React, { useState } from "react";
import { Keyboard, Text, View } from "react-native";
import PokeLoader from "./PokeLoader";
import SearchBody from "./SearchBody";
import axios from "axios";

const Search = () => {
  const [pokeSearch, setPokeSearch] = useState("");
  const [onCall, setOnCall] = useState(true);
  const [data, setData] = useState({});

  const searchPoke = () => {
    setOnCall(true);

    Keyboard.dismiss();

    axios
      .get("http://pokeapi.co/api/v2/pokemon/" + pokeSearch.toLowerCase())
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
        setOnCall(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const searchHandler = (pokeSearch) => {
    setPokeSearch(pokeSearch);
  };

  let body = <PokeLoader />;

  if (onCall) {
    body = <PokeLoader />;
  } else {
    body = <SearchBody data={data} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" onPress={searchPoke} />
          <Input
            value={pokeSearch}
            placeholder="Search Pokemon"
            onChangeText={searchHandler}
          />
        </Item>
      </Header>
      {body}
    </View>
  );
};

export default Search;
