import {addPersistedStateWatcher, restorePersistedState} from "../helpers/storeHelpers";

export default ({store, app: {$cookies}}) => {
    const modules = ['user.age', 'user.city'];

    modules.forEach((module) => {
        restorePersistedState(store, $cookies, module);
    })

    modules.forEach((module) => {
        addPersistedStateWatcher(store, $cookies, module);
    })
}