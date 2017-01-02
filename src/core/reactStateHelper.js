

function handleInputChange (e, component, propertyName) {
  let statePropertyName = e.target.name || propertyName

  component.setState({ [statePropertyName]: e.target.value, [statePropertyName + 'Changed']: true })
}

export default {
  handleInputChange: handleInputChange
}
