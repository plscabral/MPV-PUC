import { StatusBar } from 'expo-status-bar';
import { Routes } from "./src/routes";
import { colors } from './src/utils/colors';

export default function App() {
  return (
    <>
      <StatusBar
        style="light"
        backgroundColor={colors.blue950}
      />

      <Routes />
    </>
  )
}
