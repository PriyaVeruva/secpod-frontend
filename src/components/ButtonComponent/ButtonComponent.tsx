import React from "react";
import { Button } from "@mui/material";

const ButtonComponent = ({
	variant,
	onClick,
	buttonText,
	fullWidth,
	className,
	type,
	style,
}: any) => {
	return (
		<Button
			variant={variant}
			onClick={onClick ? onClick : null}
			type={type}
			fullWidth={fullWidth}
			className={className}
			style={style}
		>
			{buttonText}
		</Button>
	);
};

export default ButtonComponent;
