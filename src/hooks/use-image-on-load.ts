import { type CSSProperties, useState } from "react";

export const useImageOnLoad = () => {
	const [imageIsLoaded, setImageIsLoaded] = useState<boolean>(false);

	const handleImageOnLoad = () => {
		setImageIsLoaded(true);
	};

	const styles = {
		fadeIn: {
			opacity: imageIsLoaded ? 1 : 0,
			transition: "opacity 300ms ease-in 0ms",
		} as CSSProperties,
	};

	return { imageIsLoaded, handleImageOnLoad, styles };
};
