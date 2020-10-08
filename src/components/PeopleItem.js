import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { getTheme } from 'react-native-material-kit'
import { Icon } from 'react-native-vector-icons/EvilIcons'
import * as actions from '../Actions'

const theme = getTheme();
const styles = StyleSheet.create({
    card: {
        marginTop: 20,

    },
    title: {
        top: 20,
        left: 80,
        fontSize: 24,
    },
    image: {
        height: 100
    },
    action: {
        backgroundColor: 'black',
        color: 'white',
    },
    icon: {
        position: 'absolute',
        top: 15,
        left: 0,
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0),'
    }
});
class PeopleItem extends Component {

    render() {
        const { people } = this.props;
        console.log(people)
        return (
            <View>
                {/* <Image/>
                <Icon/>
        <Text>{this.props.people.firstName} {this.props.people.lastName}</Text>
        <Text>{this.props.people.company}</Text> */}
                <Text>asd</Text>
            </View>
        )
    }

}

const mapStateToProps = state => {
    return { people: state.people }
}

export default connect(mapStateToProps)(PeopleItem);