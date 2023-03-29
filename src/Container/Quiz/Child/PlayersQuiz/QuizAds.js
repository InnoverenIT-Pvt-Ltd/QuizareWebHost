import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import MainHeader from '../../../../Navigation/MainHeader';
import MainHeaderBackbutton from '../../../../Navigation/MainHeaderBackButton';

class QuizAds extends Component {

    render() {

        const navigation = this.props;

        const onhandleClick = () => {
            this.props.navigation.navigate('Quiz Score');
        };

        return (
            <>
                <MainHeader />

                <MainHeaderBackbutton
                    onhandleBackClick={onhandleClick}
                    headerText={'Ads'}
                    navigation={navigation.props}
                />

                <View
                    style={{
                        flex: 1,
                        paddingHorizontal: 16,
                        position: 'relative',
                        backgroundColor: '#ffffff',
                    }}
                >

                    <Text style={styles.text}>
                        Google ads before final score
                    </Text>

                    <Button
                        title={'Skip Ad'}
                        type='outline'
                        titleStyle={{
                            color: '#32167C',
                            marginHorizontal: 20,
                            fontSize: 16,
                            fontFamily: 'roboto',
                        }}
                        containerStyle={{
                            width: '40%',
                            marginHorizontal: 110,
                            marginVertical: 19,
                        }}
                        buttonStyle={{
                            height: 40,
                            borderWidth: 2,
                            borderColor: '#32167C',
                        }}
                        onPress={() => this.props.navigation.navigate('Quiz Rating')}
                    />

                </View>
            </>
        );
    }
}

export default QuizAds;

const styles = StyleSheet.create({
    text: {
        color: '#000000',
        marginTop: '40%',
        textAlign: 'center',
        fontSize: 22,
        fontFamily: 'roboto',
    },
})
