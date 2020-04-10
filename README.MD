# Nuxt  Persistate State (via cookie-universal-nuxt)

Problem: you want to share some Vuex-state modules between on server-client session in Nuxt SSR mode

Decision (already implemented but described below):
1. Install [cookie-universal-nuxt](https://github.com/microcipcip/cookie-universal/tree/master/packages/cookie-universal-nuxt)
2. Create [restore mutation](./store/mutations.js)
3. Create [plugin](./plugins/persistedState.js) where you should restore modules from storage and subscribe store to these modules mutations.
    1. See the store's restorer and subscriber implementation in [store helper](./helpers/storeHelpers.js);
4. Run Nuxt in ssr mode: ```yarn dev```
5. Check out index page in [http://localhost:3000](http://localhost:3000), change values and reload the page to see the result.
    1. To see that age field actually sent from server with relevant value checkout page source via browser devtools
        1. Default changing fields are ``user.age`` and ``user.city``
6. To change modules that should be used in persistent plugin change ``modules`` array value in [plugin file](./plugins/persistedState.js). 
