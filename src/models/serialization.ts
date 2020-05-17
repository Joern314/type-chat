/* OLD CODE: JSON-Schema

// Data models

import { Validator } from "jsonschema"

import * as schema from "./schema.json"
// If schema was moved: 
// let schema_network: any = {};

// initialize validator
const myValidator: Validator = (() => {
    let v = new Validator();
    v.addSchema(schema);
    return v;
})();

// helper function
const isOfType = (obj: any, type: string): boolean =>
    myValidator.validate(obj, { $ref: `#/definitions/${type}` }).valid;

*/

//////////////////////////////////////
// CUSTOM SERIALIZATION: CONVERTERS //
//////////////////////////////////////

import {PkgPing, PkgPong, PkgMessage, PkgPost} from "./network"
import {Post, Message} from "./chat"

export const wfPkgPing = (p: PkgPing) => ({
    type: "ping",
});
export const wfPkgPong = (p: PkgPong) => ({
    type: "pong",
});
export const wfPkgMessage = (p: PkgMessage) => ({
    type: "message",
    data: wfMessage(p.message)
});
type _PkgPost = {
    type: "post",
    data: _Post
}

type _Message = {
    name: string,
    message: string
}
type _Post = {
    name: string,
    message: string,
    id: number,
    username?: string,
    userid?: number
}

//////////////////////////////////////
// CUSTOM SERIALIZATION: CONVERTERS //
//////////////////////////////////////

type writeForeign<T,FT> = (obj: T) => FT;
type readForeign<FT

export const wfPackage = (pkg: Package) => {
    switch (pkg.type) {
        case "ping": return { type: "ping" };
        case "pong": return { type: "pong" };
        case "post": return { type: }
    }
}
export const serializeMessage = 


export const isPackageIn = (obj: any): obj is PackageIn => isOfType(obj, "PackageIn");
export const isPackageOut = (obj: any): obj is PackageOut => isOfType(obj, "PackageOut");


export const isMessage = (obj: any): obj is Message => isOfType(obj, "Message");
export const isPost = (obj: any): obj is Post => isOfType(obj, "Post");



/////////////
// LOGGING //
/////////////

// debugging: log data models
export const logMessage = (m: Message) => console.log(`(*) ${m.name}: ${m.message}`);
export const logPost = (p: Post) => console.log(`(${p.id}) ${p.name}: ${p.message}`);
export const logPong = () => console.log(`Pong`);

export const logIncoming = (json: string): void => {
    const pkg: any = JSON.parse(json);
    if (!isPackageIn(pkg))
        throw new Error("not a PackageIn! Type error.")

    switch (pkg.type) {
        case "post": logPost(pkg.post); return;
        case "pong": logPong(); return;
    }
}