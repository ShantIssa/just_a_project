import { Text, TextProps } from 'react-native';

const StyledText = (props: TextProps) => <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
export default StyledText;
