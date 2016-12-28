

function handleInputChange (e, component, propertyName) {
  let statePropertyName = e.target.name || propertyName

  component.setState({ [statePropertyName]: e.target.value })
}

export default {
  handleInputChange: handleInputChange
}
