import {Text, View, Pressable, StyleSheet} from 'react-native';
import {styles} from '../app-theme';
import {useState} from 'react';

interface Props {
  onPress?: () => void;
  value: () => 15
}

export const TemperatureScreen = ({onPress, value}: Props) => {
  const [temperature, setTemperature] = useState(20);

  const color = {
    cold: '#0087D1',
    hot: '#FF0000',
    medium: '#008000',
  };

  return (
    <View>
      <Text style={styles.tittle}>Temperature App</Text>
      <Text style={this_style.temperature}>{temperature}</Text>

      <View style={this_style.buttonContainer}>
        <Pressable
          onPress={() => setTemperature(temperature - 1)}
          style={({pressed}) => [
            styles.subtractButton,
            pressed && styles.buttonPress,
          ]}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Pressable
          onPress={() => setTemperature(temperature + 1)}
          style={({pressed}) => [
            styles.addButton,
            pressed && styles.buttonPress,
          ]}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

const this_style = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
  },
  temperature: {
    color: '#ffffff',
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 100,
    fontSize: 40,
    fontStyle: 'normal',
  },
  hotTemperature:{
    color: '#FF0000',
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 100,
    fontSize: 40,
    fontStyle: 'normal',
  },
  coldTemperature:{
    color: '#0087D1',
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 100,
    fontSize: 40,
    fontStyle: 'normal',
  },
});
