import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

// Components

// Variables
import styles from './styles';
import avatar from '../../../../assets/images/backgroudBoy.jpg';

export default class Boy extends React.Component {
    render = () => {
        return (
            <View style={styles.container}>
                <ImageBackground source={avatar} style={styles.img}/>
            </View>
        );
    }
}
