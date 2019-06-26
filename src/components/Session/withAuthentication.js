import React from 'react'
import AuthUserContext from './context'
import { withFirebase } from '../Firebase'
import axios from 'axios'

const appDev = axios.create({
	baseURL: 'https://appdev.clau.io/pos/v1',
	headers: {
		apikey: 'POS-NNKZecND4tThKCuUWG3FZ6yP7TTV6ZemV6eDjBXsbXGA',
		'Content-Type': 'application/json',
		origen: 'POS-Nombre',
	},
})

const withAuthentication = Component => {
	class WithAuthentication extends React.Component {
		constructor(props) {
			super(props)
			this.state = {
				user: null,
			}
		}

		componentDidMount() {
			this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
				if (authUser) {
					const { email } = authUser
					appDev
						.post('/consultar_usuario', {
							cliente: { email },
						})
						.then(response => {
							const user = response.data.data[0]
							console.log(user)
							user ? this.setState({ user }) : this.setState({ user: null })
						})
				} else {
					this.setState({ user: null })
				}
			})
		}

		componentWillUnmount() {
			this.listener()
		}

		render() {
			return (
				<AuthUserContext.Provider value={this.state.user}>
					<Component {...this.props} />
				</AuthUserContext.Provider>
			)
		}
	}

	return withFirebase(WithAuthentication)
}

export default withAuthentication
