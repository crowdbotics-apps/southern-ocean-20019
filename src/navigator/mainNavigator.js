import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile97282Navigator from '../features/UserProfile97282/navigator';
import Tutorial97281Navigator from '../features/Tutorial97281/navigator';
import NotificationList97253Navigator from '../features/NotificationList97253/navigator';
import Settings97252Navigator from '../features/Settings97252/navigator';
import Settings97244Navigator from '../features/Settings97244/navigator';
import UserProfile97242Navigator from '../features/UserProfile97242/navigator';
import BlankScreen097161Navigator from '../features/BlankScreen097161/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile97282: { screen: UserProfile97282Navigator },
Tutorial97281: { screen: Tutorial97281Navigator },
NotificationList97253: { screen: NotificationList97253Navigator },
Settings97252: { screen: Settings97252Navigator },
Settings97244: { screen: Settings97244Navigator },
UserProfile97242: { screen: UserProfile97242Navigator },
BlankScreen097161: { screen: BlankScreen097161Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
