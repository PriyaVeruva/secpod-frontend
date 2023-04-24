import React, { useState } from "react";
import { Field } from "formik";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./PassWord.css";
import TextFieldComponent from "../TextFieldComponent/TextFieldComponent";
const PassWord = () => {
	const [showPassword, setShowPassword] = useState(false);
	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (event: any) => {
		event.preventDefault();
	};

	return (
		<div>
			<Field name="password">
				{({ field, form: { errors, touched } }: any) => (
					<TextFieldComponent
						name="password"
						label="Password"
						field={field}
						form={{
							errors,
							touched,
						}}
						type={showPassword ? "text" : "password"}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									onClick={handleClickShowPassword}
									onMouseDown={
										handleMouseDownPassword
									}
									edge="end"
								>
									{!showPassword ? (
										<VisibilityOff />
									) : (
										<Visibility />
									)}
								</IconButton>
							</InputAdornment>
						}
					/>
				)}
			</Field>
		</div>
	);
};

export default PassWord;
