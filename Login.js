import React, { PureComponent } from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Toast from 'react-native-toast-message';

export default class Login extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      year: '',
    }
  }

  componentDidMount() {
  }

  onLogin = async () => {
    const { navigate } = this.props.navigation;
    name = this.state.name;
    year = this.state.year;
    try {
      if (name == '' || name == null) {
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'name cannot be empty',
        });
      }
      else if (year == '' || year == null) {
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'year cannot be empty',
        });
      }
      else {
            navigate('Home')
      }
    }
    catch (e) {
      console.log("error", e);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Toast ref={(ref) => { Toast.setRef(ref) }} />
        <View >
          <Image style={styles.logo}
            source={require('./assets/x-mas.png')}
          />
        </View>
        <View style={{ marginTop: 70 }}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter name"
            placeholderTextColor={"#000"}
            onChangeText={(val) => this.setState({ name: val })}
            autoCorrect={true}
            value={this.state.name}
            autoCapitalize='none'
            keyboardType='email-address'
          />
          <Text style={styles.label}>Year</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter year"
            placeholderTextColor={"#000"}
            secureTextEntry={true}
            value={this.state.year}
            textContentType='year'
            onChangeText={(val) => this.setState({ year: val })}
          />
          <TouchableOpacity style={styles.btn} onPress={() => this.onLogin()} >
            <Text style={styles.login}> Login </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fffff',
    padding: 8,
  },
  logo: {
    height: 250,
    width: 250,
    alignSelf: "center",
  },
  label: {
    color: '#000'
  },
  login: {
    color: "white",
  },
  input: {
    height: 40,
    width: '100%',
    color: '#000',
    borderColor: '#676767',
    borderWidth: 0.2,
    borderRadius: 10,
    padding: 5,
    marginTop: 10,
    backgroundColor: '#F5F5F5',    
  },
  btn: {
    borderWidth: 1,
    height: 42,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#000",
    marginTop: 20
  }
});