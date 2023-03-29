import React from 'react';
import Quiz from './Quiz';
// import QuizSecondQuestion from './QuizSecondQuestion';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function QuzNavigator(props) {
    //console.log(props);
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Quiz"
        >
            <Stack.Screen name="Quiz" component={Quiz} />
            {/* <Stack.Screen name="Quiz Secondquestion" comonent={QuizSecondQuestion} /> */}
        </Stack.Navigator>
    );
}