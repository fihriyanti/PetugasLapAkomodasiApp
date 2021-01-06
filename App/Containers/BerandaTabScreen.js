
import { createAppContainer } from 'react-navigation'
import Kontingen from '../Containers/KontingenScreen'
import Hotel from '../Containers/HotelScreen'
import Cabor from '../Containers/CaborScreen'
import Search from '../Containers/SearchScreen'
import Beranda from '../Containers/AkomodasiKontingenScreen'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Ionicons from 'react-native-vector-icons'
// import { View } from 'react-native'

export default createAppContainer(
    createBottomTabNavigator(
        {
            Beranda: { 
                screen: Beranda,
                // navigationOptions: {
                //     tabBarIcon: ({ tintColor }) => {
                //         <View>
                //             <Ionicons style={{ color: tintColor }}name={'ios-home-sharp'}/>
                //         </View>
                //     }
                // } 
            },
            Search: { screen: Search },
            Hotel: { screen: Hotel },
            Cabor: { screen: Cabor },
            Kontingen: { screen: Kontingen }
        },
        {
            initialRouteName: 'Beranda',
            activeColor: '#00695c'
        },
        {
            defaultNavigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    const { routeName } = navigation.state;
                    // let IconComponent = Ionicons;
                    let iconName;
                    if (routeName === 'Beranda') {
                        iconName = focused
                            ? 'ios-home-sharp'
                            : 'ios-home-outline';
                        // Sometimes we want to add badges to some icons.
                        // You can check the implementation below.
                        // IconComponent = HomeIconWithBadge;
                    } else if (routeName === 'Search') {
                        iconName = focused ? 'ios-search' : 'ios-search-sharp';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={25} color={tintColor} />;
                },
            }),
            tabBarOptions: {
                activeTintColor: 'black',
                inactiveTintColor: 'gray',
            },
        },

    )
)
//     {
//         Beranda: {screen: Beranda},
//         Search: {screen: Search},
//         Hotel: {screen: Hotel},
//         Cabor: {screen: Cabor},
//         Kontingen: {screen: Kontingen}
//     },
//     {
//         initialRouteName: 'Beranda',
//         activeColor: 'black',
//         inactiveColor: '#3e2465',
//         barStyle: { backgroundColor: 'red' },
//       }
// )

// export default createAppContainer(TabNavigator)