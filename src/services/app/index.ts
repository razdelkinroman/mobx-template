import { RootService } from '..';

export class AppService {
    rootService: RootService;

    constructor(rootService: RootService) {
        this.rootService = rootService;
    }
}
