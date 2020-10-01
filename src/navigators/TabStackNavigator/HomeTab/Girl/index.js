import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

// Components

// Variables
import styles from './styles';
import avatar from '../../../../assets/images/backgroudGirl.jpg';

export default class Girl extends React.Component {
    render = () => {
        return (
            <View style={styles.container}>
                <ImageBackground source={avatar} style={styles.img}/>
            </View>
        );
    }
}
