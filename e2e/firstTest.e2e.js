describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should create a new board', async () => {
    await element(by.id('add-board-button')).tap()
    await element(by.label('new-board-input')).typeText('Detox Test Board')
    await element(by.label('create-board-button')).tap()
    await expect(element(by.text('Detox Test Board'))).toExist()
    await expect(element(by.text('Detox Test Board'))).toBeVisible()
  })
})
