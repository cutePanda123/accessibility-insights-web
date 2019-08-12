// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import * as Electron from 'electron';
import { Application } from 'spectron';

describe('Electron E2E', () => {
    let app: Application;

    beforeAll(() => {
        const electronPath = `${(global as any).rootDir}/drop/electron/extension/bundle/main.bundle.js`;
        app = new Application({
            path: Electron as any,
            args: [electronPath],
        });

        return app.start();
    });

    test('test that app opened & loaded site', async () => {
        // spectron wraps calls to electron APIs as promises. Unfortunately, only electron typings are used,
        // so tslint thinks some of the methods do not return promises.
        // tslint:disable: await-promise
        expect(await app.browserWindow.isVisible()).toBe(true);
        expect(await app.client.getWindowCount()).toBe(2);
        expect(await app.webContents.getTitle()).toBe('Accessibility Insights for Mobile');
        // tslint:enable: await-promise
    });

    afterAll(() => {
        if (app && app.isRunning()) {
            return app.stop();
        }
    });
});