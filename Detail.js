import React, { PureComponent, useState } from 'react';
import {
    Text,
    View,
    Alert,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';


export default class Details extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.navigation?.state.params?.item
        };
    }
    onBack() {
        const { navigate } = this.props.navigation;
        navigate('Home');
    }
    onEdit() {
        const { navigate } = this.props.navigation;
        console.log(this.props.navigation);
        navigate('Edit', {
            item: this.state.item,
        });
    }

    componentDidMount() {
    }
        editAlert = () =>
        Alert.alert(
            "Edit",
            " Are you sure you want to Edit? ",
            [
                {
                    text: "No",
                    onPress: () => console.log("No Pressed"),
                    style: "cancel"
                },
                {
                    text: "Yes",
                    onPress: () => this.onEdit(),
                }
            ]
        );

    render() {
            return (
                <View style={styles.container}>
                    <Toast ref={(ref) => { Toast.setRef(ref) }} />
                    <View style={styles.lable}>
                        <View style={styles.left}>
                            <Text style={{ lineHeight: 30, fontWeight: 'bold', color: '#000' }}> Id</Text>
                            <Text style={{ lineHeight: 30, color: '#000' }}> Email ID   </Text>
                            <Text style={{ lineHeight: 30, color: '#000' }}> First Name </Text>
                            <Text style={{ lineHeight: 30, color: '#000' }}> Last Name </Text>
                        </View>
                        <View style={styles.right}>
                            <Text style={{ lineHeight: 30, fontWeight: 'bold', color: '#000' }}> {this.state.item.id} </Text>
                            <Text style={{ lineHeight: 30, color: '#000' }}> {this.state.item.email}</Text>
                            <Text style={{ lineHeight: 30, color: '#000' }}> {this.state.item.first_name} </Text>
                            <Text style={{ lineHeight: 30, color: '#000' }}> {this.state.item.last_name} </Text>
                        </View>
                    </View>
                       <View style={styles.footer}>
                        <TouchableOpacity style={styles.btn2} onPress={() => this.onEdit()} >
                            <Text style={{ color: '#fff' }}> Edit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    footer: {
        width: '100%',
        height: '10%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:"100%",
    },
    lable: {
        flexDirection: 'row',
        marginTop: 5,
        borderColor: '#e6e6fa',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginLeft: 10,
        marginRight: 10
    },
    left: {
        marginLeft: 10,
        marginTop: 10,
    },
    right: {
        flex: 1,
        marginTop: 10,
        marginRight: 10,
        alignItems: "flex-end",
    },
    btn2: {
        borderWidth: 1,
        height: 45,
        width: '70%',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        backgroundColor: "#000",
        padding: 10,
        marginTop:"75%",
    },
})