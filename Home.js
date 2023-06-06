import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    SafeAreaView,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { PureComponent } from 'react';

export default class Home extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            searchText: '',
            list: [], 
        }
    }
    onDetails(item) {
        const { navigate } = this.props.navigation;
        console.log(this.props.navigation);
        navigate('Detail', {
            item: item,
        });
        console.log("item", item)
    }

    componentDidMount() {
            this.onLoad("");
    }

    onLoad = async (searchText) => {
        let result = await fetch('https://reqres.in/api/users?page=1')
        let resultJson = await result.json()
        if (result != null) {
            if (searchText.length >= 3) {
                this.setState({ list: resultJson.data });
            }
            else {
                this.setState({ list:resultJson.data});
            }
        }
    }

     onChangeHandler = (searchText) => {
        this.setState({ searchText: searchText }, () => {
            if (searchText.length >= 3) {
                this.onLoad(searchText)
            } else if(searchText.length == 0) {
                    this.onLoad("");
            }
        });
    }
    searchBar = () => {
        return (
            <View>
                <TextInput style={styles.textInput}
                    placeholder="Search...."
                    type='text'
                    placeholderTextColor={"#000"}
                    onChangeText={searchText => this.onChangeHandler(searchText)}
                    autoCorrect={false }
                    value={this.state.searchText}
                />
            </View>
        )
    }

    InvoiceList = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <TouchableOpacity onPress={() => this.onDetails(item)} >
                    <View style={styles.lable}>
                        <Text style={{ fontWeight: 'bold', color: 'black', marginLeft: 10 }}> {item.first_name} {item.last_name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <FlatList
                        data={this.state.list}
                        keyExtractor = {(item,index) => index.toString()}
                        renderItem={this.InvoiceList}
                        ListHeaderComponent={this.searchBar}
                        refreshing={false}
                        onEndReachedThreshold={0.5}
                        initialNumToRender={25}
                    />
                </View>
            </SafeAreaView>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#e6e6fa',
        height: '100%',
        width: '100%',
        bottom: 8,
        marginTop: 8,
        position: 'relative'
    },
    itemContainer: {
        flex: 1,
        marginTop: 2
    },
    lable: {
        flexDirection: 'row',
        borderWidth: 0.2,
        height: 70,
        marginTop: 5,
        borderColor: '#e6e6fa',
        borderRadius: 10,
        backgroundColor: '#ffff',
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
        height: 45,
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 0.5,
        borderRadius: 8,
        borderColor: '#ffff',
        backgroundColor: '#ffff',
        marginTop: 5,
    },
})