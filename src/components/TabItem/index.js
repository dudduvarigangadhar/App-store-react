import './index.css'

const TabItem = props => {
  const {tabsList, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabsList
  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }
  const activeBtn = isActive ? 'active-btn' : ''

  return (
    <li className="list-style">
      <button
        type="button"
        onClick={onClickTabItem}
        className={`tab-btn ${activeBtn}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
