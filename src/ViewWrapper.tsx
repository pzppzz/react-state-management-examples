import { PropsWithChildren } from "react";

export const ViewWrapper: React.FC<PropsWithChildren> = (props) => {
	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "1fr 1fr",
				columnGap: "12px",
				rowGap: "12px",
			}}
		>
			{props.children}
		</div>
	);
};
