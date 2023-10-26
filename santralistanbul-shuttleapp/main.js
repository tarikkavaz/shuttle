const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    fullscreen: true,
  })

  win.loadURL('https://tools.bilgi.edu.tr/shuttle-tv/?language=tr&departure=santralistanbul%20KAMP%C3%9CS%C3%9C%E2%80%99nden')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})