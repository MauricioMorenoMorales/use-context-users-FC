import React, { useReducer } from 'react'
import UsuarioReducer from './userReducer'
import UserContext from './UserContext'

const UserState = props => {
	const initialState = {
		users: [],
		selectedUser: null,
	}

	const [state, dispatch] = useReducer(UsuarioReducer, initialState)

	const getUsers = () => {}

	const getProfile = () => {}

	return (
		<UserContext.Provider
			value={{
				users: state.users,
				selectedUser: state.selectedUser,
				getUsers,
				getProfile,
			}}
		>
			{props.children}
		</UserContext.Provider>
	)
}

export default UserState
