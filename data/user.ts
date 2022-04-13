export interface User {
    id: number;
    headdraw : number;
    fullname: string;
    nickname : string;
    position : string;
    pic_path : string;
    pic_name : string;
}

export type TAPIdata = {
    bypass: boolean,
    data: Array<User>,
    status : string
}