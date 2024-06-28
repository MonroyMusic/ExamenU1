import {Text, View} from 'react-native';
import { TemperatureScreen } from './presentation/screens/TemperatureScreen';
import { styles } from './presentation/app-theme';

const App = () => {
  return (
    <View style={styles.background}>
      <TemperatureScreen/>
    </View>
  );
};

export default App;
