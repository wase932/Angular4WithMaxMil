export class UserModel {
    private _name: string;
    private _status: string;

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get status(): string {
        return this._status;
    }
    public set status(value: string) {
        this._status = value;
    }

    constructor(name: string, status: string) {
        this._name = name;
        this._status = status;
    }
}
