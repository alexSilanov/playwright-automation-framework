import {test as base, expect} from '@playwright/test';
import { AppManager } from '../../pages/AppManager';

type Fixture = {
    app: AppManager;
}

export const test = base.extend<Fixture>({
    app:async({page}, use) => {
        const app = new AppManager(page);
        await use(app);
    }
})

export {expect};