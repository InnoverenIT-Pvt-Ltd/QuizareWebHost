import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-elements';
import MainHeader from '../../../../Navigation/MainHeader';
import MainHeaderBackButton from '../../../../Navigation/MainHeaderBackButton';

class QuizUrl extends Component {

    render() {

        const navigation = this.props;

        const onhandleClick = () => {
            this.props.navigation.navigate('Quiz Score');
        };

        return (
            <>
                <MainHeader />

                <MainHeaderBackButton
                    onhandleBackClick={onhandleClick}
                    headerText={'Url'}
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

                    <View style={[styles.card, styles.elevation]}>
                        <View>
                            <Text style={styles.heading} >
                                Norwegian explorers a quiz by Øystein Sundelin.
                            </Text>
                        </View>
                    </View>

                    <Card
                        containerStyle={{
                            borderRadius: 8,
                            marginTop: '10%',
                            marginLeft: '0.5%',
                            height: 220,
                            width: '99%',
                            elevation: 13,
                            shadowColor: '#6949FD',
                        }}
                    >
                        <Text style={styles.firstCardText}>Questions: 10</Text>
                        <Text style={styles.firstCardText}>Format: Multiple choice</Text>
                        <Text style={styles.firstCardText}>Response time per question: 30 seconds</Text>
                        <Text style={styles.firstCardText}>Estimated completion time: 5 minutes</Text>
                    </Card>

                    <Button
                        title={'Enter Username'}
                        titleStyle={{
                            color: '#ffffff',
                            marginHorizontal: 20,
                            fontSize: 17,
                            fontFamily: 'roboto',
                            //textTransform: 'uppercase',
                            letterSpacing: 1,
                        }}
                        containerStyle={{
                            width: '99%',
                            marginHorizontal: 50,
                            marginTop: '18%',
                            marginLeft: '0.5%',
                        }}
                        buttonStyle={{
                            height: 55,
                            backgroundColor: '#32167D',
                            borderRadius: 8,
                        }}
                    // onPress={() => props.navigation.navigate('Quiz Score')}
                    />

                    <Button
                        title={'Play'}
                        titleStyle={{
                            color: '#ffffff',
                            marginHorizontal: 20,
                            fontSize: 17,
                            fontFamily: 'roboto',
                            //textTransform: 'uppercase',
                            letterSpacing: 1,
                        }}
                        containerStyle={{
                            width: '99%',
                            marginHorizontal: 50,
                            marginTop: '8%',
                            marginLeft: '0.5%',
                        }}
                        buttonStyle={{
                            height: 55,
                            backgroundColor: 'rgba(111, 202, 186, 1)',
                            borderRadius: 8,
                        }}
                    // onPress={() => props.navigation.navigate('Quiz Score')}
                    />

                </View>
            </>
        );
    }
}

export default QuizUrl;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    heading: {
        color: '#6949FD',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 15,
        width: '99%',
        marginVertical: 5,
    },
    elevation: {
        elevation: 13,
        shadowColor: '#6949FD',
    },
    firstCardText: {
        marginTop: '5%',
        color: '#000000',
        fontSize: 17,
    },
});