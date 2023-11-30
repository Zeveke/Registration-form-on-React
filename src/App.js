import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

const sendFormData = (formData) => {
	console.log(formData);
};

const App = () => {
	const [values, setValues] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});

	const inputs = [
		{
			id: 1,
			name: 'email',
			type: 'email',
			placeholder: 'Email',
			errorMessage: 'Введите email!',
			label: 'Почта',
			required: true,
		},

		{
			id: 2,
			name: 'password',
			type: 'password',
			autoComplete: 'on',
			placeholder: 'Пароль',
			errorMessage:
				'Пароль должен содержать от 8-20 прописныхи строчных букв и цифр!',
			label: 'Пароль',
			pattern: `^[a-zA-Z0-9!@#$%^&*]{8,20}$`,
			required: true,
		},
		{
			id: 3,
			name: 'confirmPassword',
			type: 'password',
			autoComplete: 'on',
			placeholder: 'Повторите пароль',
			errorMessage: 'Пароль не совпадает!',
			label: 'Повтор пароля',
			pattern: values.password,
			required: true,
		},
	];

	const handleSubmit = (e) => {
		e.preventDefault();
		sendFormData(values);
	};

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	return (
		<div className="app">
			<form onSubmit={handleSubmit}>
				<h1>Форма регистрации</h1>
				{inputs.map((input) => (
					<FormInput
						key={input.id}
						{...input}
						value={values[input.name]}
						onChange={onChange}
					/>
				))}
				<button>Зарегистрироваться</button>
			</form>
		</div>
	);
};

export default App;
