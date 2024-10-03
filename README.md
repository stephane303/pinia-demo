# Vite Vue Starter


To reproduce:

```sh
pnpm install

Check types:

npx vue-tsc --build --force

```

You will get
```sh
src/App.vue:6:19 - error TS7006: Parameter 'zone' implicitly has an 'any' type.

6 store.zones.find((zone) => zone.r =='b');
                    ~~~~


Found 1 error.
```

If you change the version of pinia to 2.2.2

You will get no error
