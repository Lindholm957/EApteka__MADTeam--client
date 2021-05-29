import * as React from 'react'
import {StyleSheet, View, FlatList, Text, TouchableOpacity, Image} from "react-native";
import {RFValue} from 'react-native-responsive-fontsize';


const BUTTONS = [
    {title: 'Мои назначения', img: '../../assets/systemAssets/my_treatments_icon.png', route: ''},
    {title: 'Добавить курс лечения', img: '../../assets/systemAssets/my_treatments_icon2.png', route: ''},
    {title: 'Календарь приема', img: '../../assets/systemAssets/my_treatments_icon2.png', route: ''},
]
export default class Treatment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){
        return(
            <View style={treatmentStyle.container}>
                <View style={treatmentStyle.header}>
                    <Text style={treatmentStyle.headerText}>Назначения</Text>
                </View>
                {BUTTONS.map((item) => (
                    <TouchableOpacity
                        style={treatmentStyle.buttonStyle}
                        image={item.img}
                        title={item.title}
                        onPress={() => {
                        }}
                    >
                        <Image style={treatmentStyle.icon} source={item.img}/>
                        <Text>{item.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        )
    }
}

const treatmentStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    header: {
        // backgroundColor: 'blue',
        width: '100%',
        height: '16%',
        justifyContent: 'flex-end'
    },
    headerText: {
        paddingLeft: 30,
        fontSize: RFValue(20, 580),
    },
    buttonStyle: {
        width: '90%',
        height: '15%',
        justifyContent: 'center',
        margin: 20,
        borderWidth: 1,
        // backgroundColor: 'red',
        padding: 10,
        borderRadius: 30,
    },
    icon: {
        resizeMode: 'contain',
        width: 20,
        height: 20,
    },
});
