class Data {
    public method: number;
    public uri: string;
    public version: string;
    public message: string;
    public response = undefined;
    public isFulfilled: boolean = false

    constructor(method:number, uri:string, version:string, message:string){
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
    }
}

