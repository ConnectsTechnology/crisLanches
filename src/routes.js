import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Index from './index'
import Login from './pages/login/login'

const Routes = createAppContainer(
    createStackNavigator({
        Login:{
            screen: Login,
            navigationOptions:{
                title: 'Tela de login'
            },
        },
        Index:{
            screen: Index,
            navigationOptions:{
                title: 'Tela inicial'
            },
        }
    },{
        defaultNavigationOptions:{
            headerTintColor: '#FFF',
            headerStyle:{
                backgroundColor: '#de2521'
            }
        }
    })
)

export default Routes