describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  // beforeEach(async () => {
  //   await device.reloadReactNative()
  // })

  it('should create a new board', async () => {
    await element(by.id('add-board-button')).tap()
    await element(by.label('new-board-input')).typeText('Detox Test Board')
    await element(by.label('create-board-button')).multiTap(2)
    await expect(element(by.text('Detox Test Board'))).toExist()
    await expect(element(by.text('Detox Test Board'))).toBeVisible()
  })

  // it('should check for the board created', async () => {
  //   await expect(element(by.text('Detox Test Board'))).toExist()
  //   await expect(element(by.text('Detox Test Board'))).toBeVisible()
  //   await element(by.id('add-board-button')).tap()
  //   await element(by.label('new-board-input')).typeText('Detox Test Board 2')
  //   await element(by.label('create-board-button')).tap()
  // })
})
