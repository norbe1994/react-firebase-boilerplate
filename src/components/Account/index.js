import React from 'react'

import { AuthUserContext, withAuthorization } from '../Session'
import { PasswordForgetForm } from '../PasswordForget'
import PasswordChangeForm from '../PasswordChange'

const AccountPage = () => (
	<AuthUserContext.Consumer>
		{user => (
			<div>
				<h1>Account: {user.email}</h1>
				<p>Nivel: {user.nivel.nivelId}</p>
				<p>Puntos: {user.puntos}</p>
				<p>Género: {user.gender === 'Masculino' ? 'Hombre' : 'Mujer'}</p>
				<p>Teléfono: {user.telefono}</p>
				<PasswordForgetForm />
				<PasswordChangeForm />
			</div>
		)}
	</AuthUserContext.Consumer>
)

const condition = user => !!user

export default withAuthorization(condition)(AccountPage)
