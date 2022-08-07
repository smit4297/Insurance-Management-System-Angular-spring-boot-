export class Homepolicyrequest {
//     userid int primary key,
// policyname VARCHAR(255),
// policydescription text,
// sumassurence INT,
// policyterm int,
// areaid int,
// premium Bigint,
// homevalue Bigint,
// deductables bigint

constructor(
    public userid : number,
    public sumassurence : number,
    public username : string,
    public address : string,
    public areaid:number,
    public premium:number,
    public homevalue:number,
    public policyterm : number,
    public deductables:number
    )
    {}
}
