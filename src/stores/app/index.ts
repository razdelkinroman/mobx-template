import { makeAutoObservable } from 'mobx';

export class AppStore {
    auth = false;
    operatorData: Operator | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setOperatorData = (data: Operator) => {
        this.operatorData = data;
    };
}

export type Operator = {
    name: string;
    age: number;
    status: string;
};
