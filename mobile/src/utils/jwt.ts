import jwtDecode from "jwt-decode";

import { api } from "./api";

import AsyncStorage from "@react-native-async-storage/async-storage";

const isValidToken = (token: string) => {
	if (!token) {
		return false;
	}
	const decoded = jwtDecode<{ exp: number }>(token);

	const currentTime = Date.now() / 1000;

	return decoded.exp > currentTime;
};

const setSession = async (token: string | null) => {
	if (token) {
    await AsyncStorage.setItem("token", token);
		api.defaults.headers.common.Authorization = `Bearer ${token}`;
	} else {
		await AsyncStorage.clear();
		delete api.defaults.headers.common.Authorization;
	}
};

export { isValidToken, setSession };
