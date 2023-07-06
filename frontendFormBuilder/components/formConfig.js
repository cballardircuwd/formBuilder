import React, { useState } from 'react';

	const FormConfig = () => {
		const [fields, setFields] = useState([]);
		const [label, setLabel] = useState('');
		const [placeholder, setPlaceholder] = useState('');

		const handleAddField = () => {
			const newField = {
				type: 'text',
				label,
				placeholder,
			};

			setFields([...fields, newField]);
			setLabel('');
			setPlaceholder('');
		};

		return (
			<div>
			<h2>Configure your form</h2>
				{fields.map((field, index) => (
					<p key={index}>
						Field {index + 1}: {field.label} - {field.placeholder}
					</p>
				))}
				<div>
					<label>
						Label:
						<input type="text" value={label} onChange={(e) => setLabel(e.target.value)} />
					</label>
					<label>
						Placeholder:
						<input type="text" value={placeholder} onChange={(e) => setPlaceholder(e.target.value)} />
					</label>
					<button onClick={handleAddField}>Add field</button>
				</div>
			</div>
		);
	};

export default FormConfig;
