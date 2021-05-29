import * as React from 'react'
import {StyleSheet, View, Text} from "react-native";

export default class Treatment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){
        return(
            <View style={treatmentStyle.container}>
                <Text>Treatment</Text>
            </View>
        )
    }
}

const treatmentStyle = StyleSheet.create({
    container: {
        flex: 1,
    }
});
