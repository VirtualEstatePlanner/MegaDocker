import { app, BrowserWindow, ipcMain, ipcRenderer } from 'electron';
import { join, resolve } from 'path';
import { format } from 'url';

export let mainWindow: BrowserWindow | null;

function createWindow() {
  const indexpath: string = join(__dirname, `/index.html`);
  console.log(`indexpath results:`);
  console.log(indexpath);

  const electronurl: string = resolve(indexpath);
  console.log(`electronurl results:`);
  console.log(electronurl);

  mainWindow = new BrowserWindow({
    width: 1100,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      allowRunningInsecureContent: false,
      preload: __dirname + '/preload.js'
    }
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL(`http://localhost:3000`);
  } else {
    //      mainWindow.loadFile(`file://${indexpath})`
    mainWindow.loadURL(
      format({
        pathname: indexpath,
        protocol: 'file:',
        slashes: true
      })
    );
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on('onButtonClick', () => {
  console.log('Main on button click');
});
