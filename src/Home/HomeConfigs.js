import HomeScreen from './HomeScreen';
import HomeDetailsScreen from './HomeDetailsScreen';

export default {
    /**
     * 路由跳转
     * 参考地址  https://reactnavigation.org/docs/zh-Hans/navigation-prop.html#通用-api-参考
     */
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null,
        },
    },
    HomeDetails:{
        screen: HomeDetailsScreen,
        navigationOptions: {
            title:'新页面',
            headerBackTitle:null,
        },
    },
};
