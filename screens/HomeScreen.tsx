import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Div, Text } from "react-native-magnus";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ route, navigation }: Props) {
	return (
		<Div>
			<Text>Home</Text>
		</Div>
	);
}
