import {Dimensions, Platform} from 'react-native'

const { width, height } = Dimensions.get('window')

// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  buttonRadius: 4,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  },

  //---------------优雅的分割线-----------------
  metrics5: 5,
  metrics15: 15,
  metrics16: 16,
  metrics17: 17,
  metrics20: 20,
  metrics25: 25,
  metrics30: 30,
  metrics40: 40,
  metrics45: 45,
  metrics60: 60,
  metrics103: 103
}

export default metrics
