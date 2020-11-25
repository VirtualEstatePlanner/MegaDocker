import { app, BrowserWindow, ipcMain, ipcRenderer } from 'electron';
import { join, resolve } from 'path';
import { format } from 'url';

export let mainWindow: BrowserWindow | null;

function createWindow() {
  const indexpath: string = join(__dirname, `/index.html`);

  const electronurl: string = resolve(indexpath);

  mainWindow = new BrowserWindow({
    width: 1100,
    height: 800,
    webPreferences: {
      allowRunningInsecureContent: false,
      contextIsolation: true,
      nodeIntegration: false,
      preload: __dirname + '/preload.js',
    },
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL(`http://localhost:3000`);
  } else {
    mainWindow.loadURL(
      format({
        pathname: indexpath,
        protocol: 'file:',
        slashes: true,
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

ipcMain.on('onButtonClick', () => {});
