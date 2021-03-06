// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { Action } from 'common/flux/action';
import { WindowStatePayload } from 'electron/flux/action/window-state-payload';
import { RoutePayload } from './route-payloads';

export class WindowStateActions {
    public readonly setRoute = new Action<RoutePayload>();
    public readonly setWindowState = new Action<WindowStatePayload>();
}
