import React from "react";
import { Form, Field, FormikHelpers, Formik } from "formik";
import { Checkbox } from "@mui/material";
import "./SignUpForm.css";
import { validationSchema } from "./SignUpValidationSchema";
import { TERMS_CONDITIONS } from "../../utils/cms";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { useSelector, useDispatch } from "react-redux";
import { setUserDetails, UserState } from "../../redux/features/formSlice";
import TextFieldComponent from "../../components/TextFieldComponent/TextFieldComponent";
import PassWord from "../../components/PassWordComponen/PassWord";
import { FormFieldsData } from "./data";
import * as Yup from "yup";

const SignUpForm = () => {
	const dispatch = useDispatch();
	const formData = useSelector((state: any) => state.user);
	console.log(formData, "formData");

	const handleSubmit = (
		values: UserState,
		{ resetForm }: FormikHelpers<UserState>
	) => {
		dispatch(setUserDetails(values));
		resetForm();
	};

	return (
		<div className="signUpFormContents">
			<Formik
				initialValues={formData}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				<Form>
					{FormFieldsData.map((ele, i) => {
						return (
							<div key={i}>
								<Field name={ele.name}>
									{({
										field,
										form: { errors, touched },
									}: any) => (
										<TextFieldComponent
											type={ele.type}
											name={ele.name}
											label={ele.label}
											field={field}
											form={{
												errors,
												touched,
											}}
										/>
									)}
								</Field>
							</div>
						);
					})}
					<PassWord />
					<div className="termsConditions">
						<Checkbox
							defaultChecked
							sx={{
								"& .MuiSvgIcon-root": {
									fontSize: 28,
								},
							}}
						/>
						<p className="terms-text">{TERMS_CONDITIONS}</p>
					</div>
					<ButtonComponent
						variant="contained"
						type="submit"
						fullWidth={true}
						buttonText={"GET STARTED NOW"}
					/>
				</Form>
			</Formik>
		</div>
	);
};

export default SignUpForm;
