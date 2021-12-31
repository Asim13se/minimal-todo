import {Platform} from 'react-native';

const PrimaryFontFamily =
  Platform.OS === 'ios' ? 'Open Sans Regular' : 'OpenSans';

export default PrimaryFontFamily;
