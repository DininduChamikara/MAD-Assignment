import React from 'react'
import { Text } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import PageWrapper from '../components/Layout/PageWrapper'
import Main from '../components/Main/Main'
import Register from './Register'
import ROUTES from './ROUTES'

const Login = ({ navigation }) => {
	const [text, setText] = React.useState('')

	return (
		<PageWrapper>
			<Text>Login Screen</Text>
			<TextInput
				label='Email'
				value={text}
				onChangeText={(text) => setText(text)}
			/>
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
			<Button
				onPress={() => {
					navigation.navigate(Main)
				}}
			>
				Main
			</Button>
			<Button
				onPress={() => {
					navigation.navigate(Register)
				}}
			>
				Register
			</Button>
		</PageWrapper>
	)
}

export default Login
