import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = initialValue => {
	const [darkValue, setDarkValue] = useLocalStorage(initialValue);
	useEffect(
		() => {
			darkValue ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode");
		},
		[darkValue]
	);
	return [darkValue, setDarkValue];
};
