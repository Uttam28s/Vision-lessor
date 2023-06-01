export function generateUniqueCode() {
  const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let code = '';

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters[randomIndex];
  }

  return code;
}

export function getRoundedUpAmount(number) {
  const integerPart = Math.floor(number);
  const roundedUpAmount = number - integerPart;
  return roundedUpAmount;
}

export const tabStyle = {
  tabBarLabelPosition:'beside-icon',
  tabBarActiveTintColor: "#0a3c90",
  tabBarInactiveTintColor: '#5677b1',
  tabBarInactiveBackgroundColor: '#e9edf2',
  tabBarLabelStyle: {fontSize: 18},
  tabBarActiveBackgroundColor:'#cbbff6a8',
  tabBarAllowFontScaling: true,
  tabBarIconStyle:{width: 32},
  tabBarStyle:{height: 58, shadowColor:'#000000', shadowRadius: 1, shadowOpacity: 0.1, shadowOffset: {width:2, height: -2}},              
  headerTitleStyle: {color: '#0a3c90', fontSize: 20, fontWeight: 'bold'},
  headerStyle: {backgroundColor: '#e9edf2', height:50, shadowColor:'#000000', shadowRadius: 4, shadowOpacity: 0.2},
  headerTitleAlign: 'center',
}

export const stateData = [
  { label: "Gujarat", value: 24 },
  { label: "Maharashtra", value: 27 }
];


export const priceCalculator = {
  assembleValue: (quantity, price) => (quantity * price).toFixed(2),
  igst: (price, gst) => (price * (gst/100)).toFixed(2),
  gst: (price, gst) => ((price * (gst/100))/2).toFixed(2),
  total: (price, gst) => (price + gst).toFixed(2) 
}