export default class AbstractElement {
  async click () {
    throw new Error('Not Implemented. Element extensions must implement this method')
  }
}
