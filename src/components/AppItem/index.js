import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {appName, imageUrl} = appsList
  return (
    <li className="img-container">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
