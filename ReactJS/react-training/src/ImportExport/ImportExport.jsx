import User , { Login , varExport} from './User'
function ImportExport() {

  return (
    <>
      <h1> App </h1>
      <User />
      <Login />
      <h1> {varExport} </h1>
    </>
  )
}

export default ImportExport
