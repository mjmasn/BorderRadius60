import * as React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default class App extends React.Component<Props> {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.box1}>
          <Text>borderWidth: 2</Text>
          <Text>borderRadius: 2</Text>
        </View>
        <View style={styles.box2}>
          <Text>borderWidth: 2</Text>
          <Text>borderRadius: 2.000001</Text>
        </View>
        <View style={styles.box3}>
          <Text>borderWidth: 5</Text>
          <Text>borderRadius: 5</Text>
        </View>
        <View style={styles.box4}>
          <Text>borderWidth: 5</Text>
          <Text>borderRadius: 5.000001</Text>
        </View>
        <View style={styles.box5}>
          <Text>borderWidth: 10</Text>
          <Text>borderRadius: 10</Text>
        </View>
        <View style={styles.box6}>
          <Text>borderWidth: 10</Text>
          <Text>borderRadius: 11</Text>
        </View>
        <View style={styles.box7}>
          <Text>borderWidth: 10</Text>
          <Text>borderRadius: 5</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box1: {
    margin: 10,
    height: 100,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: "#000000"
  },
  box2: {
    margin: 10,
    height: 100,
    borderRadius: 2.000001,
    borderWidth: 2,
    borderColor: "#000000"
  },
  box3: {
    margin: 10,
    height: 100,
    borderRadius: 5,
    borderWidth: 5,
    borderColor: "#000000"
  },
  box4: {
    margin: 10,
    height: 100,
    borderRadius: 5.000001,
    borderWidth: 5,
    borderColor: "#000000"
  },
  box5: {
    margin: 10,
    height: 100,
    borderRadius: 10,
    borderWidth: 10,
    borderColor: "#000000"
  },
  box6: {
    margin: 10,
    height: 100,
    borderRadius: 11,
    borderWidth: 10,
    borderColor: "#000000"
  },
  box7: {
    margin: 10,
    height: 100,
    borderRadius: 5,
    borderWidth: 10,
    borderColor: "#000000"
  }
});
