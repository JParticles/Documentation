/*
exported LS/SS schema:
{
  storage_key: 'storage_key'
}
*/
export const LS = {}
export const SS = {}

const localStorageKeys = ['READ_QUICK_START']

const sessionStorageKeys = []

const maps = [
  { exportedObj: LS, keys: localStorageKeys },
  { exportedObj: SS, keys: sessionStorageKeys },
]

maps.forEach(({ exportedObj, keys }) => {
  keys.forEach(key => {
    exportedObj[key] = key
  })
})
