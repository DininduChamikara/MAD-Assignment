import { useEffect, useState, useContext } from 'react'
import { Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import PageWrapper from '../components/Layout/PageWrapper'
import Main from '../components/Main/Main'
import { LoginUser } from '../core/auth'
import { auth } from '../core/config'
import { Search } from '../core/databaseCrud'
import Register from './Register'
import ROUTES from './ROUTES'
import { Image } from 'react-native'
import { SnackBarContext } from "../contexts/SnackBarContext";
import SnackBarComponent from '../components/SnackBar/SnackBar';



const Login = ({ navigation }) => {
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
  const { setSnackbarVisible, setSnackbarMessage } = useContext(SnackBarContext);
  

	return (
		<PageWrapper>
			<View style={{ alignItems: 'center' }}>
				<Text
					style={{ fontSize: 30, fontWeight: 'bold', marginTop: 40 }}
					variant='displayLarge'
				>
					{'My Movie Collection'}
				</Text>
				<Image
					source={require('../assets/login.png')}
					style={{ width: 150, height: 150 }}
				/>
			</View>

			<Text
				style={{
					fontSize: 24,
					fontWeight: 'semi-bold',
					marginBottom: 10,
					marginTop: 30,
				}}
				variant='headlineMedium'
			>
				{"Let's Login"}
			</Text>

			<TextInput
				style={{ width: '100%', marginVertical: 15 }}
				label='Email'
				value={email}
				onChangeText={(text) => setEmail(text)}
			/>

			<TextInput
				style={{ width: '100%', marginVertical: 15 }}
				label='Password'
				value={password}
				onChangeText={(text) => setPassword(text)}
			/>

			<Button
				onPress={() => {
					LoginUser(email, password)
						.then((userCredential) => {
							navigation.navigate(Main)
						})
						.catch((error) => {
							console.log(error)
              setSnackbarMessage("Login Failed Try Again!");
              setSnackbarVisible(true);

						})
				}}
				mode='contained'
				style={{ width: '100%', marginVertical: 15, paddingVertical: 8 }}
			>
				Login
			</Button>

			<Button
				onPress={() => {
					navigation.navigate(Register)
				}}
				mode='contained'
				style={{ width: '100%', marginVertical: 15, paddingVertical: 8 }}
			>
				Register page
			</Button>
      <SnackBarComponent/>
		</PageWrapper>

	)
}

export default Login
