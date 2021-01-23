import { List, ListItem } from "native-base";
import React from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  ImageBackground,
  Dimensions,
} from "react-native";

const backgroundImg = require("../assets/raids_loading.png");
// { uri: "http://pokemongolive.com/img/posts/raids_loading.png" }

var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;

const Item = (props) => (
  <ListItem>
    <Text>{props.title}</Text>
  </ListItem>
);

const SearchBody = (props) => {
  var pokemon = props.data;

  if (!pokemon) {
    return <View />;
  }

  const renderItem = ({ item }) => (
    // console.log(item.ability.name);
    <Item title={item.ability.name} />
  );

  return (
    <ImageBackground style={styles.backgroundImage} source={backgroundImg}>
      <View style={{ flex: 1 }}>
        <Text style={styles.header}>
          #{pokemon.id} - {pokemon.name.toUpperCase()}
        </Text>
        <View style={styles.viewStyle}>
          <Image
            source={{ uri: pokemon.sprites.front_default }}
            style={styles.img}
          />
        </View>
        <View style={styles.info}>
          <ListItem itemDivider>
            <Text style={{ fontWeight: "bold" }}>Size</Text>
          </ListItem>
          <ListItem>
            <Text>Weight - {pokemon.weight}lbs</Text>
          </ListItem>
          <ListItem>
            <Text>Height - {pokemon.height / 10}m</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text style={{ fontWeight: "bold" }}>Abilities</Text>
          </ListItem>
          <FlatList
            data={pokemon.abilities}
            renderItem={renderItem}
            keyExtractor={(item) => item.ability.name}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = {
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    height: height,
    width: width,
  },
  header: {
    fontSize: 30,
    color: "red",
    textAlign: "center",
  },
  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  img: {
    height: 200,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    flex: 1,
    backgroundColor: "white",
    opacity: 0.8,
  },
};

export default SearchBody;
