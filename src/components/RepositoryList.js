import React from "react";

import { View, Text, Button, ScrollView, StyleSheet } from "react-native";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import RepositoriesActions from "../store/ducks/repositories";


const RepositoryList = ({ repositories, addRepositoryRequest }) => (
  <View style={styles.container}>
    <ScrollView>
      {repositories.data.map(repository => (
        <View style={styles.repo} key={repository.id}>
          <Text>{repository.name}</Text>
          <Text>{repository.description}</Text>
        </View>
      ))}
    </ScrollView>
    <View style={styles.buttonArea}>
      <Button
        title="Adicionar"
        onPress={() => addRepositoryRequest("facebook/react")}
      />
    </View>
  </View>
);

const mapStateToProps = state => ({
  repositories: state.repositories
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepositoryList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: '#fdfdfd',
  },

  repo: {
    padding: 10,
    borderRadius: 4,
    margin: 10,
    borderWidth: 1,
  },

  buttonArea: {
    flex: 1,
    height: 80,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    elevation: 20,
  },
});