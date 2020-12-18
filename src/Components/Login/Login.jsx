import { useState, useEffect } from 'react'
import './Login.css'

function Login() {

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [disabled, setDisabled] = useState(true)

	const onSubmit = event => {
		event.preventDefault()
		console.log('Submitted', username)
	}

	useEffect(() => {
		setDisabled(!(username.length > 2))
		setDisabled(!(password.length > 5))
	}, [username, password])

	// useEffect(() => {
	// 	setDisabled(!(password.length > 5))

	// }, [password]);

	const writeName = (data) => {
		return data;
	}
	const [modified, setModified] = useState('');

	useEffect(() => {
		if (username.length > 3) {
			setModified(`Assalomu alaykum ${username}`);
		} else {
			setModified(`Qalesan? ${username}`);
		}
	}, [username])
	return (
		<>
			<div id="login">
				<h2>{writeName(modified)}</h2>
				<form onSubmit={onSubmit}>
					<div>
						<label htmlFor="username">Username</label>
						<input
							id="username"
							type="text"
							placeholder="Username"
							autoComplete="off"
							spellCheck={false}
							onChange={e => setUsername(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="password">password</label>
						<input
							id="password"
							type="text"
							placeholder="password"
							autoComplete="off"
							spellCheck={false}
							onChange={e => setPassword(e.target.value)}
						/>
					</div>
					<div>
						<button disabled={disabled}>
							<span>Login</span>
						</button>
					</div>
				</form>

			</div>
		</>
	)
}

export default Login
