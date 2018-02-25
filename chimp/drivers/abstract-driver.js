export default class AbstractDriver {
  goto () {
    throw new Error('Not Implemented. Driver extensions must implement this method')
  }

  getElement () {
    throw new Error('Not Implemented. Driver extensions must implement this method')
  }
}
