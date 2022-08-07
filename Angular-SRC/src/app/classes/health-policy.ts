export class HealthPolicy {
    constructor(
        public policyid: number,
        public healthpolicyid: number,
        public policyname : string,
        public policydescription : string,
        public imageurl : string,
        public sumassurence : number,
        public policyterm:number,
        public premium:number,
        ){}
}
