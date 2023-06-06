import React, { PureComponent } from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export default class Edit extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      item: this.props.navigation?.state.params?.item,
      email_id: '',
      first_name: '',
      last_name: '',
    };
  }

  componentDidMount() {
    this.onLoad();
  }

  onBack() {
    const { navigate } = this.props.navigation;
    navigate('Detail');
  }


  onLoad = async () => {
    this.setState({
      email_id: this.state.item.email,
      first_name: this.state.item.first_name,
      last_name: this.state.item.last_name,
    })
  };

  onSave = async () => {
    if (this.state.email_id == '' || this.state.email_id == null) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'email_id cannot be empty',
      });
    }
    else if (this.state.first_name == '' || this.state.first_name == null) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'first_name cannot be empty',
      });
    }
    else if (this.state.last_name == '' || this.state.last_name == null) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'last_name cannot be empty',
      });
    }
    else {
      this.onBack()
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.login}>
          <Toast ref={(ref) => { Toast.setRef(ref) }} />
          <Text style={styles.label}>Email ID</Text>
          <TextInput style={styles.input}
            placeholder={""}
            onChangeText={(val) => this.setState({ email_id: val })}
            value={this.state.email_id}
          />
          <Text style={styles.label}>First Name</Text>
          <TextInput style={styles.input}
            placeholder={""}
            onChangeText={(val) => this.setState({ first_name: val })}
            value={this.state.first_name}
          />
          <Text style={styles.label}>Last Name</Text>
          <TextInput style={styles.input}
            placeholder={""}
            onChangeText={(val) => this.setState({ last_name: val })}
            value={this.state.last_name}
          />
          <View style={styles.btnC}>
            <TouchableOpacity style={styles.btn1} onPress={() => this.onSave()}>
              <Text style={{ color: "white", fontWeight: 'bold' }} > Save </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2} onPress={() => this.onBack()}>
              <Text style={{ color: "white", fontWeight: 'bold' }}> Cancel </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: 'white',
  },
  label: {
    fontWeight: '600',
    color: '#000'
  },
  login: {
    bottom: 20,
    width: '100%',
    marginTop: 25,
  },
  input: {
    height: 40,
    width: '100%',
    color: '#000',
    borderColor: '#000',
    borderWidth: 0.2,
    borderRadius: 8,
    padding: 5,
    marginTop: 10
  },
  btnC: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    position: 'relative',
    marginTop: "80%",
  },
  btn1: {
    borderWidth: 1,
    height: 42,
    width: '45%',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderColor: '#4dbd74',
    backgroundColor: "#4dbd74",
    marginTop: '45%',
    marginLeft: 10,
    position: 'relative',

  },
  btn2: {
    borderWidth: 1,
    height: 42,
    width: '45%',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderColor: '#f86c6b',
    backgroundColor: "#f86c6b",
    marginTop: '45%',
    marginLeft: 10,
    position: 'relative',

  }
});