import localStorageKeys from './ls_keys'
import sessionStorageKeys from './ss_keys'

export const LS = {}
export const SS = {}

const maps = [
  { exportedObj: LS, keys: localStorageKeys },
  { exportedObj: SS, keys: sessionStorageKeys },
]

maps.forEach(({ exportedObj, keys }) => {
  keys.forEach(key => {
    exportedObj[key] = key
  })
})

/*
exported LS/SS schema:
{
  storage_key: 'storage_key'
}
*/
